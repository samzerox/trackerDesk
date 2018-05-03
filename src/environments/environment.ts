// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAEhOpEf5hpPXcCOLU_W_zaLRuASrgA2LQ',
    authDomain: 'tracker-3b7f9.firebaseapp.com',
    databaseURL: 'https://tracker-3b7f9.firebaseio.com',
    projectId: 'tracker-3b7f9',
    storageBucket: 'tracker-3b7f9.appspot.com',
    messagingSenderId: '67193227283'
  }
};
