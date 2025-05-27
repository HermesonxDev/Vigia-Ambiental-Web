import Parse from 'parse';

Parse.initialize(
    import.meta.env.BACK4APP_APPID,
    import.meta.env.BACK4APP_JSKEY
)

Parse.serverURL = 'https://parseapi.back4app.com';

export default Parse;