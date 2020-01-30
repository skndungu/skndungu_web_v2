<template>
  <div class="skills">
    <div class="heading">
      <p>Skills</p>
      <app-back-btn class="back_btn"></app-back-btn>
    </div>
    <app-menu-btn class="new_home_btn"></app-menu-btn>
    <div class="skills_description">
      <div class="side_nav">
        <div class="side_nav_header">
          <p>Categories</p>
        </div>
        <div class="skill_categories">
          <ul>
            <li @click="selectedComponent = 'AppPcbDesign'">PCB Design</li>
            <li @click="selectedComponent = 'AppHardwareProgramming'">Hardware Programming</li>
            <li @click="selectedComponent = 'AppSoftwareProgramming'">Software Programming</li>
            <li @click="selectedComponent = 'AppProductDesign'">Product Design</li>
            <li @click="selectedComponent = 'AppIoTProducts'">IoT Products Development</li>
          </ul>
        </div>
        <div class="logo">
          <img src="./shared/skndungu_logo.png" alt="logo" />
        </div>
      </div>
      <div class="main_wrapper">
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import BackBtn from "./shared/Back";
import MenuBtn from "./shared/Menu";
import PcbDesign from "./skills/PcbDesign";
import HardwareProgramming from "./skills/HardwareProgramming";
import SoftwareProgramming from "./skills/SoftwareProgramming";
import ProductDesign from "./skills/ProductDesign";
import IoTProducts from "./skills/IoTProducts";
export default {
  components: {
    AppBackBtn: BackBtn,
    AppMenuBtn: MenuBtn,
    AppPcbDesign: PcbDesign,
    AppHardwareProgramming: HardwareProgramming,
    AppSoftwareProgramming: SoftwareProgramming,
    AppProductDesign: ProductDesign,
    AppIoTProducts: IoTProducts
  },
  data() {
    return {
      selectedComponent: "AppPcbDesign"
    };
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
  font-size: 27px;
}

.back_btn {
  position: absolute;
  left: 10px;
  cursor: pointer;
}
.skills_description {
  display: flex;
  height: 100vh;
}

.side_nav {
  background-color: #f77e38;
  width: 20vw;
}
.main_wrapper {
  background-color: #090057;
  width: 80vw;
}
.side_nav_header p {
  color: #fff;
  text-align: center;
  padding-top: 8px;
  font-size: 27px;
  margin-bottom: 20px;
}

.skill_categories ul > li {
  padding-left: 20px;
  border-bottom: solid 1px #eee;
  max-width: 12vw;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
  list-style: none;
  text-decoration: none;
  margin-bottom: 30px;
}
.skill_categories ul > li:hover {
  color: #eee;
  border-bottom: solid 1px #090057;
  transition: all 0.6s;
}
.logo {
  text-align: center;
}
.logo > img {
  height: 150px;
  width: 180px;
}
</style>