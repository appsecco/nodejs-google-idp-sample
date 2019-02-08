'use strict'

const { OAuth2Client } = require('google-auth-library')
const gapiClient = new OAuth2Client()

// Express middleware to perform JWT bearer token verification
// This middleware will set request.user with the decoded JWT
function jwt(req, res, next) {
  let idToken = req.headers['authorization']

  let failure = function(msg) {
    res.status(403).json({
      status: 'Error',
      response: { error: msg }
    })
  }

  if(!idToken) {
    return failure('No authorization token provided')
  }

  idToken = idToken.replace(/bearer\s/i, '')
  gapiClient.verifyIdToken({idToken})
    .then(jwt => {
      let payload = jwt.getPayload()
      req.user = payload
      next()
    })
    .catch(err => {
      return failure(err)
    })
}

module.exports = {
  jwt
}