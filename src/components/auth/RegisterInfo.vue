
<template>
  <div class="container is-fluid">
    <div class="columns is-mobile">
      <div class="column column is-one-quarter is-offset-1">

        <form action="">

          <div class="field">
            <label class="label">Subject</label>


            <p class="control">
              <span class="select">
                <select v-model="userData.country">
                   <option disabled value="">Please select one</option>
                  <option v-for="country in countries">{{country}}</option>

                </select>

              </span>

            </p>




           <div class="field">
            <p class="control">
              <label class="radio">
                <input type="radio" name="question" v-model="gender" value="Male">
                Male
              </label>
              <label class="radio">
                <input type="radio" name="question" v-model="gender" value="Female">
                Female
              </label>
            </p>
          </div>
            <hr>

            <div class="field is-grouped">

              <p class="control">
                <a href="/home" class="button" @click.prevent="registerSubmit">Register</a>
                <button class="button is-link">Cancel</button>
              </p>
            </div>

          </div>


        </form>
      </div>
      <descriptionView></descriptionView>
    </div>
  </div>
</template>

<script>
  import router from '../../router/index.js';
  import axios from 'axios';
  import descriptionView from '../description.vue';
  import {auth} from '../../auth/index.js';

  export default {
    components:{
      descriptionView
    },
    data(){
      return{
        countries:['Belgrade','Budapest','Wien'],
        gender:'Male',
        success:false,
        userData:{
          country:'',
          gender:'male'

        }
      }
    },


    methods: {

        //we want to login just after registration
      loginAfterRegistration(){
        auth.login('puRUYl7Ic2L-Rhc:;u%FP+{:_9)1:L95Yy@R1];p|§wN0kA[e+D:bhfC%°]sodsE','user');
      },
      passwordConfirm(){
        if (this.userData.password !== this.userData.passwordConf) {
          this.errorMsg.password = "Confirm your password";
          this.userData.passwordConf = '';
          return false;
        }
        return true;
      },
      ajaxCall(url){
        this.config = {
          headers: {
            //            'Authorization': auth.getHeader('id_token'),
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
          }

        }
        var _this = this;

        axios.get(url, this.config)
          .then(function (response) {
            _this.$store.dispatch('updateJsonData', response.data);

          })
          .catch(function (error) {
            console.log(error);
          });
      },
      beforeRouteEnter (to, from, next) {
        if(this.success){
          next();
        }else{
          next(false);
        }
        // called before the route that renders this component is confirmed.
        // does NOT have access to `this` component instance,
        // because it has not been created yet when this guard is called!
      },
      registerSuccess(){
        this.ajaxCall('https://jsonplaceholder.typicode.com/posts');
        this.success = true;
        router.push({path: 'home'});
        this.$store.dispatch('updateUserData', this.userData);


        this.loginAfterRegistration();
      },
      registerSubmit(){
        this.registerSuccess();
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

