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
              <li><router-link :to="'/home/profile'">Profile settings</router-link></li>
              <li><router-link :to="'/'">Log out</router-link></li>

            </ul>

          </aside>
        </div>

</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
