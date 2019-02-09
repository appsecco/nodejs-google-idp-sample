# Authentication and Authorization using OAuth2
This repository contains an example of using Google as Identity Provider for authentication. For this example, we used NodeJS as the backend and VueJS as the frontend. The backend is available in `demo/api` and frontend in `demo/ui`.

## Build Presentation Content

```bash
npm install reveal-md -g
npm install gulp-cli -g
npm install
```

Build content into output directory `dist`:

```
gulp build
```

Start presentation with `reveal-md`

```
gulp present
```

> If you get an error `Error: listen EADDRINUSE :::35729`, make sure that you are not running any other instance of reveal-md using `ps aux | grep reveal-md` 

## Demo

Install `http-server`

```
npm i -g http-server
```

Start API server

```
cd demo/api
npm install
npm start
```

> This should listen on `http://127.0.0.1:3000`

Start UI

```
cd demo/ui
http-server
```

This should listen on `http://localhost:8080`. In case of different host/port, the appropriate origin has to be updated in Google oauth2 credentials settings.

Google client credential identifier is hardcoded in `demo/ui/index.html`. The following code needs to be changed:

```
<meta name="google-signin-client_id" content="323026488616-o837nl9ddichgi4gttalsq6voabfh2mb.apps.googleusercontent.com">
```
