
<template>
  <div class="container is-fluid">
    <div class="columns is-mobile">
      <div class="column column is-one-quarter is-offset-1">

        <form action="">

          <div class="field">
            <label class="label">Subject</label>


            <p class="control">
              <span class="select">
                <select>
                  <option>Select Country</option>
                  <option>With options</option>
                </select>

              </span>

            </p>




           <div class="field">
            <p class="control">
              <label class="radio">
                <input type="radio" name="question">
                Male
              </label>
              <label class="radio">
                <input type="radio" name="question">
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

  export default {
    components:{
      descriptionView
    },
    data(){
      return{
        success:false,
        userData:{
          country:'',
          gender:'male'

        }
      }
    },


    methods: {
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
      registerSuccess(){
        this.ajaxCall('https://jsonplaceholder.typicode.com/posts');
        this.success = true;
        router.push({path: 'home'});
        this.$store.dispatch('updateUserData', this.userData);
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

