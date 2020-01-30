<template>
  <div class="projects">
    <div class="heading">
      <app-back-btn class="menu_btn"></app-back-btn>
      <p>Previous | Projects</p>
    </div>
    <app-menu-btn class="new_home_btn"></app-menu-btn>
    <div class="projects_intro">
      Based on my areas of expertism I have been
      involved in several designs and products - this page serves to show case
      some of those projects - in case you may need further details on a given
      project just reach out !
    </div>
    <div class="project_headers">
      <div
        class="btn"
        :class="{active : isPcbActive}"
        @click="selectedComponent = 'AppProjectsPcbDesign'
        ; pcbActive()"
      >PCB Design</div>
      <div
        class="btn"
        :class="{active : isWebActive}"
        @click="selectedComponent = 'AppProjectsWebDesign';
      webActive()
      "
      >Web Design</div>
      <div
        class="btn"
        :class="{active : isProductActive}"
        @click="selectedComponent = 'AppProjectsProductDesign';
       productActive()
       "
      >Product Design</div>
    </div>
    <p style="color: white">{{selectedComponent}}</p>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import BackBtn from "./shared/Back";
import MenuBtn from "./shared/Menu";
import ProjectsPcbDesign from "./Projects_pcb";
import ProjectsWebDesign from "./Projects_web";
import ProjectsProductDesign from "./Projects_product";
export default {
  components: {
    AppBackBtn: BackBtn,
    AppMenuBtn: MenuBtn,
    AppProjectsPcbDesign: ProjectsPcbDesign,
    AppProjectsWebDesign: ProjectsWebDesign,
    AppProjectsProductDesign: ProjectsProductDesign
  },
  data() {
    return {
      selectedComponent: "AppProjectsPcbDesign",
      isPcbActive: true,
      isWebActive: false,
      isProductActive: false
    };
  },
  methods: {
    pcbActive() {
      // console.log("clicked");
      this.isPcbActive = !this.isPcbActive;
      this.isProductActive = false;
      this.isWebActive = false;
    },
    webActive() {
      // console.log("clicked");
      this.isWebActive = !this.isWebActive;
      this.isPcbActive = false;
      this.isProductActive = false;
    },
    productActive() {
      // console.log("clicked");
      this.isProductActive = !this.isProductActive;
      this.isPcbActive = false;
      this.isWebActive = false;
    }
  }
};
</script>

<style scoped>
.projects {
  background-color: #090057;
}
.heading {
  height: 80px;
  width: 100vw;
  background-color: #2b2a64;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.heading p {
  font-family: "Arizonia", cursive;
  font-size: 25px;
  letter-spacing: 2px;
}

.menu_btn {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
}
.projects {
  background-size: cover;
  height: 100%;
}
.heading_1 {
  position: relative;
  z-index: 100;
  font-size: 22pt;
  color: #ffff;
  font-weight: normal;
  line-height: 1.6;
  padding: 15px;
  padding-bottom: 25px;
}
.projects_intro {
  max-width: 75vw;
  margin: 0 auto;
  color: #fff;
  padding-top: 5px;
}
.project_headers {
  display: flex;
  justify-content: center;
  padding: 12px;
}
.project_headers .btn {
  padding: 10px;
  border-radius: 2px;
  margin-right: 5px;
  margin-left: 5px;
  background-color: #fff;
  cursor: pointer;
}
.active {
  background-color: #ffa069 !important;
  color: white;
  transition: all 0.8s;
  /* display: none; */
}
</style>