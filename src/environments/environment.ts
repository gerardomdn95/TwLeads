// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyBCgARU1aE6TaX8HOKSkI5O12M2hoAoz5Q',
    authDomain: 'koomkintest-1515085101760.firebaseapp.com',
    databaseURL: 'https://koomkintest-1515085101760.firebaseio.com',
    projectId: 'koomkintest-1515085101760',
    storageBucket: 'koomkintest-1515085101760.appspot.com',
    messagingSenderId: '174885230282'
  },
};
