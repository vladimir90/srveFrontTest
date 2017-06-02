<template>

        <div class="column is-one-third">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><router-link :to="'/home/'">Dashboard</router-link></li>
              <li><router-link :to="'/home/customers'">Customers</router-link></li>
            </ul>
            <p class="menu-label">
              Profile
            </p>
            <ul class="menu-list">
              <li><router-link :to="'/home/profile'">{{userData.email}} Profile settings</router-link></li>
              <li><a @click="logOut">Log out</a></li>

            </ul>

          </aside>
        </div>

</template>

<script>




//    import {auth} from '../../auth/index.js';
  export default {

    data(){
        return {
          userData: this.$store.getters.getUserData
        }
    },
    methods:{
            logOut(){
                auth.logout();

            }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
