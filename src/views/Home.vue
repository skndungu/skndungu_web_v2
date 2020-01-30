<template>
  <div class="home">
    <div class="home_background_img">
      <div class="heading_1">
        Simon | Ndung'u
        <div class="slogan">Cut me, I Bleed Content</div>
      </div>
      <app-menu-btn></app-menu-btn>
      <div class="side_navigation">
        <ul class="side_navigation_list">
          <router-link to="/" id="router_link" class="home">Home</router-link>
          <router-link to="/about" id="router_link" class="about">About</router-link>
          <router-link to="/projects" id="router_link" class="projects">Projects</router-link>
          <router-link to="/skills" id="router_link" class="skills">Skills</router-link>
          <router-link to="/blogs" id="router_link" class="blogs">Blogs</router-link>
          <router-link to="/contacts" id="router_link" class="contacts">Contacts</router-link>
          <router-link to="/clients" id="router_link" class="clients">Clients</router-link>
        </ul>
      </div>
      <div class="paragraphs">
        <p class="para_1">
          Hi! I am an embedded PCB designs engineer and a software developer based in Kenya
          (the heart of Africa), I run quite a successful IoT based firm that handles freelance and
          long term projects for clients from all over the world.
        </p>
        <br />
        <br />
        <p class="para_2">
          I have diverse set of skiills that are well back from my background - Mechatronic
          Engineering, ranging from HTML5+CSS3+Javascript, Node js, Python for data analysis,
          Dart, Arduino, RF and High-Speed PCB Designs all the way to Product design & development.
        </p>
      </div>
      <br />
      <br />
      <div class="profile_footer">
        <div class="profile_img">
          <img src="../assets/profile1.jpg" alt="profile_photo" />
        </div>
        <div class="connect">Do you want to connect? This is how you can reach me</div>
        <i class="material-icons drop_down animated infinite swing delay-.3s">arrow_drop_down</i>
      </div>
      <div class="social_icons">
        <div class="linkedin">
          <a href="https://www.linkedin.com/in/simon-ndung-u-06095296" target="_blank">
            <i class="fa fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div class="github">
          <a href="https://github.com/skndungu" target="_blank">
            <i class="fa fa-github fa-2x"></i>
          </a>
        </div>

        <div class="youtube">
          <a href="https://www.youtube.com/channel/UCU55Qk4kQyf2NcbtplJvKGw" target="_blank"></a>
          <i class="fa fa-youtube-square fa-2x"></i>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/skndungu1" target="_blank">
            <i class="fa fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
      <div class="hr_light"></div>
    </div>
  </div>
</template>

<script>
import MenuBtn from "./shared/Menu";
export default {
  name: "home",
  components: {
    appMenuBtn: MenuBtn
  }
};
</script>

<style scoped>
.home_background_img {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  height: 100vh !important;
}
.home_background_img::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}
.heading_1 {
  font-size: 22pt;
  color: #ffff;
  font-weight: 600;
  line-height: 1.6;
  padding: 15px;
  padding-bottom: 20px;
  text-align: center;
}
.slogan {
  font-family: "Arizonia", cursive;
  font-weight: 50;
  font-size: 20px;
  color: rgb(8, 255, 8);
  text-align: center;
}
.paragraphs {
  font-size: 16.5px;
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
  height: 180px;
  width: 180px;
  border-radius: 50%;
}
.profile_footer {
  text-align: center;
}
.connect {
  text-align: center;
  color: #eee;
}
.drop_down {
  text-align: center;
  color: rgb(8, 255, 8);
  font-size: 28px;
}
.side_navigation {
  opacity: 1;
}
.side_navigation_list {
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  color: #ffff;
  max-width: 80px;
  text-align: center;
}

#router_link {
  text-decoration: none;
  color: #ffff;
}
.side_navigation_list #router_link {
  list-style: none;
  margin-bottom: 40px;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 0.5px #eeee;
}
.side_navigation_list > router-link:hover {
  background-color: red;
  font-size: 12.5x;
  opacity: 0.8;
  transition: all 0.4s;
}
.router-link-active {
  color: red important;
  font-size: 12.5x;
  opacity: 0.8;
  transition: all 0.4s;
}
.social_icons {
  display: flex;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
}
.fa-linkedin {
  padding-right: 25px;
  color: #00acee;
}
.fa-twitter {
  padding-right: 25px;
  color: #00acee;
}
.fa-youtube-square {
  padding-right: 25px;
  color: #c4302b;
}
.fa-github {
  padding-right: 25px;
  color: #f78a48;
}
.hr_light {
  border-bottom: solid 0.8px #eeee;
  max-width: 55vw;
  margin: 0 auto;
}
.hr_light:hover {
  color: #ccc;
}

@media screen and (max-width: 374px) {
  .home_background_img {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    height: 100%;
  }
}
@media screen and (max-width: 713px) {
  .side_navigation_list {
    display: none;
  }
  .paragraphs {
    margin: 16px;
  }

  @media screen and (min-width: 320px) {
    .home_background_img {
      height: 100% !important;
    }
  }
  @media screen and (min-width: 767px) {
    .heading_1 {
      display: none !important;
    }
  }
}
</style>
