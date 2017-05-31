<template>
  <div class="loginWrapper container is-fluid">
    <div class="columns is-mobile">
      <div class="column column is-half is-offset-one-quarter">

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

          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary" @click.prevent="loginSubmit">Login</button>
            </p>
            <p class="control">
              <a href="/register" class="button">Register</a>
            </p>
          </div>


        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
            } else{
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
        loginSubmit(){
            if(this.sanitization()){
              //validation
              //ajaxCall
              //savingToken -> redirectToHome
            }
        }
    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
