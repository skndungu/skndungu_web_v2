<template>
  <div class="home">
    <div class="home_background_img">
      <div class="heading_1">Simon | Ndung'u</div>
      <div class="side_navigation">
        <ul class="side_navigation_list">
          <li class="home">Home</li>
          <li class="about">About</li>
          <li class="projects">Projects</li>
          <li class="skills">Skills</li>
          <li class="blogs">Blogs</li>
          <li class="contacts">contacts</li>
          <li class="clients">Clients</li>
        </ul>
      </div>
      <div>
        <div class="paragraphs">
          <p
            class="para_1"
          >My skill are widely spread in the fielngineering standards-as governed by the various engineering bodies all over the world Client satisfaction is the main driving agenda</p>
          <br />
          <br />
          <p class="para_2">
            ving in quite a few tools as listed below, I have developed various projects and products (view the projects), some still in production and others already in market
            Together with my team we developg agenda
          </p>
        </div>
        <br />
        <br />
        <div class="profile_img">
          <img src="../assets/profile1.jpg" alt="profile_photo" />
        </div>
        <div class="social_icons">
          <div class="linkedin">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="twitter">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="youtube">
            <i class="fab fa-youtube"></i>
          </div>
          <div class="github">
            <i class="fab fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.home_background_img {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  height: 100vh;
}
.heading_1 {
  font-size: 22pt;
  color: #ffff;
  font-weight: normal;
  line-height: 1.6;
  padding: 15px;
  padding-bottom: 25px;
}
.para_1 {
  max-width: 500px;
  color: #ffff;
  margin: 0 auto;
}
.para_2 {
  max-width: 500px;
  color: #ffff;
  margin: 0 auto;
}

.profile_img > img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
.side_navigation {
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  color: #ffff;
}

.side_navigation_list > li {
  list-style: none;
  /* padding-top: 20px; */
  margin-bottom: 40px;
  margin-right: 20px;
  border-bottom: solid 0.8px #eeee;
  cursor: pointer;
}
.side_navigation_list > li:hover {
  background-color: #5c3c10;
}
</style>
