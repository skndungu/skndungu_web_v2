<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "SF Pro Text", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 713px) {
  #home_name {
    display: none !important;
  }
}
</style>
