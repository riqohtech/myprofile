// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBHoV6g8hWK1dnq4rsc3prRoR0GpDyAfRo",
    authDomain: "neutron-stars.firebaseapp.com",
    databaseURL: "https://neutron-stars.firebaseio.com",
    projectId: "neutron-stars",
    storageBucket: "neutron-stars.appspot.com",
    messagingSenderId: "182094658858"
  }
};
