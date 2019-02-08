# JSON Web Tokens


## What is it?

JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.


## How is it secured?

JWTs are cryptographically verifiable and contains all the required information about the user, avoiding the need to query the database more than once


## How to use JWT

1. Extract JWT (Identity Token) from request
2. Crytographically verify JWT *signer*
3. Extract identity payload from JWT
4. Apply authentication and authorization rules on identity


## JWT Verification

* HS256
  * Shared secret based token verification
* RS256
  * Public key based token verification