<template>
  <div class="loginWrapper container is-fluid">
    <div class="columns is-mobile">
      <div class="column column is-one-quarter is-offset-1">

        <form action="">

          <div class="field">
            <label class="label">Email:</label>
            <p class="control">
              <input class="input" type="text" placeholder="Enter email" v-model="userData.email">
            </p>
            <p class="help is-danger">{{errorMsg.email}}</p>
            <p class="help is-success">{{successMsg.email}}</p>
          </div>

          <div class="field">
            <label class="label">Password:</label>
            <p class="control">
              <input class="input" type="password" placeholder="Enter password" v-model="userData.password">
            </p>
            <p class="help is-danger">{{errorMsg.password}}</p>
            <p class="help is-success">{{successMsg.password}}</p>
          </div>
          <hr>
          <div class="field is-grouped">
            <p class="control">
              <button class="button" @click.prevent="loginSubmit">Login</button>
              <a href="/register" class="button">Register</a>
            </p>
          </div>


        </form>
      </div>
        <descriptionView></descriptionView>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../../router/index.js';
import {auth} from '../../auth/index.js';
import descriptionView from '../description.vue';

export default {
    components:{
      descriptionView
    },
    data(){
      return{
            success:false,
            userData:{
                email:'',
                password:''
            },
            errorMsg:{
                email:'',
                password:''
            },
            successMsg:{
                email:'',
                password:''
            }
        }
    },

    methods:{
        sanitization(){

            for (const key of Object.keys(this.errorMsg)) {
              let value = this.errorMsg[key];
                if(value.length > 0){
                    value = '';
                    this.errorMsg[key] = value;
                }
            }

            if(this.userData.email === ''){
                this.errorMsg.email = "Provide your email please";
                return false;
            }

            if(this.userData.email.length < 6){
                this.errorMsg.email = "Your email must have at least 6 chars!";
                return false;
            }

            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userData.email)){
                  this.successMsg.email = "Email is correct";
            } else {
                  this.errorMsg.email = 'You have entered wrong email address';
                  return false;
            }

            if(this.userData.password === ''){
              this.errorMsg.password = "Your password field is empty";
              return false;
            }

            if(this.userData.password.length < 6){
                this.errorMsg.password = "Your password must have at least 6 chars";
                return false;
            }

            this.successMsg.password = "Password correct";
            return true;

        },

        validation(){
//          this.ajaxCall(URLlink,userData);

          if(this.userData.email !== 'vladimir.greksa@gmail.com'){
              this.successMsg.email = '';
              this.errorMsg.email = "User doesn't exist, please provide registration first";
              return false;
          }
          this.successMsg.email = "Email correct";
          this.success = true;
          return true;

          //if user exist return message user exist return false
        },
        loginSuccess(){
          this.ajaxCall('https://jsonplaceholder.typicode.com/posts');
          //4.savingToken
          auth.login('puRUYl7Ic2L-Rhc:;u%FP+{:_9)1:L95Yy@R1];p|§wN0kA[e+D:bhfC%°]sodsE','user');
          this.$store.dispatch('updateUserData',this.userData);
        },
        ajaxCall(url){
          this.config = {
            headers: {
  //            'Authorization': auth.getHeader('id_token'),
              'Access-Control-Allow-Origin':'*',
              'Accept': 'application/json'
            }

          };

          var _this = this;

          axios.get(url,this.config)
            .then(function (response) {
                _this.$store.dispatch('updateJsonData',response.data);

            })
            .catch(function (error) {
                console.log(error);
            });
        },
        loginSubmit(){

            if(this.sanitization() && this.validation() && this.success){
              this.loginSuccess();
            }
        }
    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
