<template>
  <div class="container is-fluid">
    <div class="columns is-mobile">
      <div class="column column is-half is-offset-one-quarter">

        <form action="">

          <div class="field">
            <label class="label">Email:</label>
            <p class="control">
              <input class="input" type="text" placeholder="Enter email">
            </p>
          </div>

          <div class="field">
            <label class="label">Password:</label>
            <p class="control">
              <input class="input" type="password" placeholder="Enter password">
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">Login</button>
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

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
