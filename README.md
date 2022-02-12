# Local development

Create a .env file with the following variables

```
REACT_APP_REDIRECT_URL 
REACT_APP_STRAVA_CLIENTID 
REACT_APP_STRAVA_CLIENT_SECRET 
```

Run `source ~/.setenv.sh` to export the env variables.

Make sure to change `Authorization Callback Domain` in the [Strava settings](https://www.strava.com/settings/api) prior to deployment.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
### Deployment to Heroku

Automatically deploys [here](https://oelze-strava-test.herokuapp.com/) upon push to `main` branch.

