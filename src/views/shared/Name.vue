<template>
  <div class="name">
    <router-link to="/">
      <p id="name">skndungu | devs</p>
    </router-link>
  </div>
</template>

<script>
import Name from "./Name";
export default {};
</script>

<style scoped>
#name {
  position: absolute;
  right: 10px;
  font-family: "Nunito", sans-serif;
  /* font-family: "Pacifico", cursive; */
  font-size: 10px;
  color: rgb(131, 129, 129);
}
#name:hover {
  cursor: pointer;
}
</style>