/**
 * Created by vlada on 6/1/17.
 */

import router from '../router/index.js';

//Auth Class
class Auth {

  constructor(){
    this.role = "user"
  }

  //changing auth
  auth(n){
    var user = {
      authentication:n
    };
    return user.authentication = n;
  }

  login(token,role){

    // Redirect to a specified route
    if(role === "user"){
      localStorage.setItem('id_token',token);
      this.auth(true);
      router.replace('/home');

    } else if(role === "admin"){
      this.role = "admin";
      // router.replace('/adminPanel');
      alert("There is not admin page yet");
      return false;
    }else{
      alert("Incorrect input");
      return false;
    }

  }


  logout(){
    localStorage.removeItem('id_token');
    this.auth(false);

    // Redirect to a homepage
    router.replace('/');
  }
  checkAuth(tokenName){
    var jwt = localStorage.getItem(tokenName);
    if(jwt){
      this.auth(true);
      return true;
    }
    else{
      this.auth(false);
      return false;
    }
  }
  checkRole(){
    return this.role;
  }
  getHeader(tokenName){
    if(this.checkAuth()){
      return  'Bearer ' + localStorage.getItem(tokenName);
    }
    return '';
  }

}

export const auth = new Auth();
