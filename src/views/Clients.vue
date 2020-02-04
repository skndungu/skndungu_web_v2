<template>
  <div class="skills">
    <div class="heading">
      <p>Clients</p>
      <app-back-btn class="back_btn"></app-back-btn>
      <app-name id="home_name"></app-name>
    </div>
    <app-menu-btn></app-menu-btn>
    <div class="clients">
      <ul class="clients_list">
        <li class="list_items" v-for="client in clients" :key="client.src">
          <div class="logo">
            <img id="logo" src="../assets/client/fiverr.png" alt />
          </div>
          <img id="client_list" :src="client.src" alt="img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BackBtn from "./shared/Back";
import MenuBtn from "./shared/Menu";
import Name from "./shared/Name";
export default {
  components: {
    AppBackBtn: BackBtn,
    appMenuBtn: MenuBtn,
    appName: Name
  },
  data() {
    return {
      clients: [
        {
          src: require("@/assets/client/client_1.png")
        },
        {
          src: require("@/assets/client/client_2.png")
        },
        {
          src: require("@/assets/client/client_3.png")
        },
        {
          src: require("@/assets/client/client_4.png")
        },
        {
          src: require("@/assets/client/client_5.png")
        },
        {
          src: require("@/assets/client/client_6.png")
        },
        {
          src: require("@/assets/client/client_7.png")
        },
        {
          src: require("@/assets/client/client_8.png")
        },
        {
          src: require("@/assets/client/client_9.png")
        },
        {
          src: require("@/assets/client/client_10.png")
        },
        {
          src: require("@/assets/client/client_11.png")
        }
      ]
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
  width: 100%;
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

.back_btn {
  position: absolute;
  left: 10px;
  cursor: pointer;
}
.clients_list {
  display: flex;
  flex-direction: column;
  list-style: none;
  /* justify-content: center; */
  /* align-items: center; */
}
#client_list {
  height: 150px;
  padding: 5px;
}
#logo {
  height: 110px;
  width: 110px;
  margin: 15px;
}
.list_items {
  display: flex;
  margin-left: 20vw;
  border-bottom: 1px solid #eee;
  width: 70%;
}

@media screen and (max-width: 768px) {
  #home_name {
    display: none !important;
  }
  #logo {
    height: 50px;
    width: 50px;
    margin: 5px;
  }
  #client_list {
    height: 100%;
    width: 100%;
    padding: 5px;
  }
  .list_items {
    display: flex;
    margin-left: 5vw;
    border-bottom: 1px solid #eee;
  }
}
</style>