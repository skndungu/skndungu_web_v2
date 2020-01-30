<template>
  <div class="menu">
    <div class="menu_btn">
      <i class="fa fa-angle-down fa-3x" @click="openMenu"></i>
    </div>
    <div
      :class="{side_navigation_active :side_nav_triggered, side_navigation_not_active :side_nav_not_triggered  }"
    >
      <div id="time">
        <p>Simon | Ndungu</p>
        <br />
        <div class="timer">Date Today</div>
        <p>{{date}}</p>
        <br />
        <div class="timers">Time Now</div>
        <p>{{time}}</p>
      </div>
      <div class="my_logo">
        <img src="./skndungu_logo.png" alt="logo" />
      </div>
      <ul class="side_navigation_list">
        <i class="fa fa-angle-up fa-2x" id="close_btn" @click="closeMenu"></i>
        <router-link to="/" id="router_link" class="home">Home</router-link>
        <router-link to="/about" id="router_link" class="about">About</router-link>
        <router-link to="/projects" id="router_link" class="projects">Projects</router-link>
        <router-link to="/skills" id="router_link" class="skills">Skills</router-link>
        <router-link to="/blogs" id="router_link" class="blogs">Blogs</router-link>
        <router-link to="/contacts" id="router_link" class="contacts">Contacts</router-link>
        <router-link to="/clients" id="router_link" class="clients">Clients</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      side_nav_triggered: false,
      side_nav_not_triggered: true,
      today: "",
      time: "",
      date: ""
    };
  },
  methods: {
    openMenu() {
      console.log("clicked");
      this.side_nav_triggered = !this.side_nav_triggered;
      this.side_nav_not_triggered = !this.side_nav_not_triggered;
      this.today = new Date();
      this.time = this.today.getHours() + ":" + this.today.getMinutes();

      this.date =
        this.today.getDate() +
        "/" +
        (this.today.getMonth() + 1) +
        "/" +
        this.today.getFullYear();
      console.log(this.time);
      console.log(this.date);
    },
    closeMenu() {
      console.log("closed Menu!");
      this.side_nav_not_triggered = !this.side_nav_not_triggered;
      this.side_nav_triggered = !this.side_nav_triggered;
    }
  }
};
</script>

<style scoped>
.menu_btn {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}
#close_btn {
  cursor: pointer;
  position: absolute;
  top: -40px;
  right: 40px;
}
.fa-angle-down {
  color: rgb(8, 255, 8);
}
#time {
  position: absolute;
  top: 50px;
  left: 60px;
  color: #fff;
}
#time p {
  font-family: "Arizonia", cursive;
  font-weight: 50;
  font-size: 35px;
  color: rgb(8, 255, 8);
}
.my_logo {
  position: absolute;
  top: 275px;
  left: 21px;
}
.my_logo img {
  height: 180px;
  width: 220px;
}
.side_navigation_active {
  position: absolute;
  top: 0;
  right: -170px;
  background-color: #000;
  height: 100%;
  width: 100%;
  transform: translateX(-200);
  animation: slide_in 0.7s forwards;
}
.side_navigation_not_active {
  animation: slide_in 0.7s forwards;
  display: none;
}
.side_navigation_list {
  background-color: #000;
  width: 100%;
}
.side_navigation_list {
  position: absolute;
  top: 70px;
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
.side_navigation_list > li:hover {
  color: #ccc;
  font-size: 12.5x;
  opacity: 0.8;
  transition: all 0.4s;
}

@keyframes slide_in {
  100% {
    right: 0;
  }
}
@keyframes slide_out {
  100% {
    left: 0;
  }
}

@media screen and (min-width: 700px) {
  .menu_btn {
    display: none;
  }
}
</style>