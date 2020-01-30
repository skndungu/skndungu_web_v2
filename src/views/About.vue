<template>
  <div class="about">
    <div class="heading">
      <app-back-btn class="back_btn"></app-back-btn>
      <p>About Me !</p>
    </div>
    <app-menu-btn></app-menu-btn>
    <div class="grid_content">
      <div class="about_me side_right">
        <div class="profile_img">
          <img src="../assets/profile1.jpg" alt="profile_photo" />
        </div>
        <div class="side_left_heading">Short Bio</div>
          <p class="side_right_para">
          Through my 4 years of professional experience in the fields of electronics, industrial control and metrology I’ve acquired many skills on both sides of the fence dividing design from maintenance, that together with my unstoppable drive to tinker and improve have shaped my mind regarding design for maintenance and reliability. I always derive great satisfaction from seeing a new project reach completion, or making an old system perform better than it did before. I am a very fast and avid learner, most of my skills in electronics and software development come directly from my own tinkering, self learning and practical training
          I have worked for and with lots of clients from all over the world on
          idea development and molding it to a product see products on
          <a
            href
          >work</a>
          section to get a glimpse of products we have developed and designed for
          various clients around the World.
          <br /> <br/> I have wide range of skills ranging from Embedded PCB designs, IoT Products,
          Software and hardware Programming, product design and development. Consultancy
          on a product design and development is also a key area of service.
        </p>
      </div>
      <div class="side_left">
        <div class="side_right_heading">Our Common Interst !</div>
        <p class="side_left_para">
          Like most of my clients you must already be a high
          achiever and a go getter! Always inovative and full of ideas
          but you lack an execution plan and the right guy to execute it
          given that you're not just looking for one-dimensional success, I
          already got you covered.
        You need to thrive in other domains of life:
        <br/> <br/>
        <ul class="para2">
          <li>Your relationships with friends and family</li>
          <li>Your intellectual developments</li>
          <li>Your legacy in the lives of the people around you</li>
        </ul>You are after long-lasting, multidimensional success
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BackBtn from "./shared/Back";
import MenuBtn from "./shared/Menu";
export default {
  components: {
    AppBackBtn: BackBtn,
    appMenuBtn: MenuBtn
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
  font-size: 25px;
  letter-spacing: 1.8px;
}

.back_btn {
  position: absolute;
  left: 10px;
  cursor: pointer;
}

.grid_content {
  display: flex;
  height: 100vh;
  justify-content: center;
}

.profile_img {
  /* text-align: center; */
}
.profile_img > img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.side_left {
  background-color: #090057;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.side_left_heading {
  position: relative;
  text-align: center;
  font-family: "Arizonia", cursive;
  font-size: 22px;
  color: #2b2a64;
  font-weight: 500;
  letter-spacing: 1.5px;
}
.side_right_heading {
  position: relative;
  text-align: center;
  font-family: "Arizonia", cursive;
  font-size: 22px;
  color: #f77e38;
  font-weight: 500;
  letter-spacing: 1.5px;
}
.side_right {
  font-size: 14px;
  background-color: #f77e38;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.side_right_para {
  text-align: center;
  /* max-width: 60%; */
}
.side_left_para{
 /* text-align: center; */
  max-width: 75%;
}
.para2{
  display: flex;
  flex-direction: column;
}


@media screen and (max-width: 1024px) {
  .grid_content {
    display: flex;
    flex-direction: column;
    background-color: #f77e38;
    height: 100%;
    width: 100%;
  }
  .side_right {
    display: flex;
    flex-direction: column;
    margin: 18px;
    font-size: 14px;
    height: 100%;
  }
  .side_left {
    margin: 18px;
    background-color: #f77e38;
    color: #000;
    font-size: 14px;
    height: 100vh;
  }
  .side_right_heading,.side_left_heading {
  text-align: center;
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #2b2a64;
  font-weight: 700;
  letter-spacing: 2px;
}
}
</style>
