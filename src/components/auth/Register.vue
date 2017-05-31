
  <template>
    <div class="container is-fluid">
      <div class="columns is-mobile">
        <div class="column column is-half is-offset-one-quarter">

          <form action="">

            <div class="field">
              <label class="label">Firstname:</label>
              <p class="control">
                <input class="input" type="text" placeholder="Your firstname" v-model="userData.firstname">
              </p>
              <p class="help is-danger">{{errorMsg.firstname}}</p>
              <p class="help is-success">{{successMsg.firstname}}</p>
            </div>

            <div class="field">
              <label class="label">Lastname:</label>
              <p class="control">
                <input class="input" type="text" placeholder="Your lastname" v-model="userData.lastname">
              </p>
              <p class="help is-danger">{{errorMsg.lastname}}</p>
              <p class="help is-success">{{successMsg.lastname}}</p>
            </div>

            <div class="field">
              <label class="label">Email:</label>
              <p class="control">
                <input class="input" type="email" placeholder="Your email" v-model="userData.email">
              </p>
              <p class="help is-danger">{{errorMsg.email}}</p>
              <p class="help is-success">{{successMsg.success}}</p>
            </div>

            <div class="field">
              <label class="label">Password:</label>
              <p class="control">
                <input class="input" type="password" placeholder="Enter password" v-model="userData.password">
              </p>
              <p class="help is-danger">{{errorMsg.password}}</p>
              <p class="help is-success">{{successMsg.password}}</p>
            </div>

            <div class="field">
              <label class="label">Confirm Password:</label>
              <p class="control">
                <input class="input" type="password" placeholder="Confirm password">
              </p>
            </div>




            <div class="field is-grouped">

              <p class="control">
                <a href="/home" class="button is-primary" @click.prevent="registerSubmit">Register</a>
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
            firstname:'',
            lastname:'',
            email:'',
            password:''
          },
          errorMsg:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
          },
          successMsg:{
            firstname:'',
            lastname:'',
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

          if(this.userData.firstname === ''){
              this.errorMsg.firstname = 'Enter your firstname';
              return false;
          }
          if(this.userData.firstname.length < 3){
              this.errorMsg.firstname = 'Your fistname is to short';
              return false;
          }

          if(this.userData.lastname === ''){
            this.errorMsg.lastname = 'Enter your lastname';
            return false;
          }
          if(this.userData.lastname.length < 3){
            this.errorMsg.lastname = 'Your lastname is to short';
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
            this.errorMsg.password = "Your password must have at least 6 characters";
            return false;
          }


          return true;

        },

        registerSubmit(){
            if(this.sanitization()){

            }

        }
      }

    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>

