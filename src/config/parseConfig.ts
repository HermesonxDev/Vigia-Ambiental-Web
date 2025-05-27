// @ts-ignore
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(
  import.meta.env.VITE_BACK4APP_APPID,
  import.meta.env.VITE_BACK4APP_JSKEY
);
Parse.serverURL = 'https://parseapi.back4app.com';

export default Parse;
