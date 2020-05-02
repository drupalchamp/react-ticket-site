var profileInfo = (function() {
    var full_name = "";
    var authInfo = 'datahere';
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };

    var getAuth = function() {
        return authInfo;    // Or pull this from cookie/localStorage
      };
    
      var setAuth = function(authData) {
        authInfo = authData;     
        // Also set this in cookie/localStorage
      };
  
    return {
      getName: getName,
      setName: setName,
      getAuth: getAuth,
      setAuth: setAuth
    }
  
  })();
  
  export default profileInfo;