<template>
  <div class="home-btn">
    <i class="fa fa-chevron-left fa-2x" @click="redirectHome"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    redirectHome() {
      console.log("clicked");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>