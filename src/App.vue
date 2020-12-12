<template>
  <div>
    <div class="nav">
      <router-link to="/past">Past</router-link> |
      <router-link to="/">Present</router-link> |
      <router-link to="/future">Future</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500&display=swap");
@import "@/scss/_colors.scss";
* {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $blue;
    text-transform: uppercase;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ul {
  list-style: none;
  margin: 0;
}
</style>
