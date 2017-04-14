javascript:(window.alert((()=>{
  const APP_NAME_REGEX = /myapp/i;
  const APP_NAME = "My app";
  let libs = window.Ember.libraries._registry; 
  for( var l in libs ) { 
    if (APP_NAME_REGEX.test(libs[l].name)) { 
      var ev = libs[l].version.slice(libs[l].version.match(/\+/).index+1);
      return(`${APP_NAME} ember app version is ${ev}`);
    }
  }
})()))
