<template>

  <div class="column">
    <h1 class="title">Profile</h1>
    <p>{{fullname}}</p>
  </div>

</template>

<script>
  export default {

      data(){
        return {
          userData: this.$store.getters.getUserData,
        }
      },
      methods:{
          fullname(){
              let firstname = this.userData[0].firstname;
              let lastname = this.userData[0].lastname;
              return firstname + " " + lastname;

          }
      }



  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
