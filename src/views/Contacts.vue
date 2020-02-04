<template>
  <div class="skills">
    <div class="heading">
      <p>Contacts</p>
      <app-back-btn class="back_btn"></app-back-btn>
      <app-name id="home_name"></app-name>
    </div>
    <app-menu-btn class="new_home_btn"></app-menu-btn>
    <div class="contacts">
      <div class="contact_header">
        <p class="contacts_para1">I'd Love to hear from you</p>
        <p class="contacts_para2">
          Whether you have a question about a product, pricing, prototypes,
          need to talk, make collaborations or anything else. I am here to
          to cater for such needs.
        </p>
      </div>
      <div class="contact_details">
        <div class="contact_detail_header">This is how you can reach me!!</div>
        <div class="contacts_reach">
          <div class="email">
            <a id="a_style" href="mailto:skndungu75@outlook.com" target="_blank">
              <i class="fa fa-envelope fa-3x"></i>
              <br />
              <span id="link_style">Email</span>
            </a>
          </div>
          <div class="skype">
            <a id="a_style" href="skype:live:skndungu75_1?add">
              <i class="fa fa-skype fa-3x"></i>
              <br />
              <span id="link_style">Skype</span>
            </a>
          </div>
          <div class="telephone">
            <a id="a_style" href="tel:+254712283875">
              <i class="fa fa-phone fa-3x"></i>
              <br />
              <span id="link_style">Call</span>
            </a>
          </div>
          <div class="linkedin">
            <a
              id="a_style"
              href="https://www.linkedin.com/in/simon-ndung-u-06095296"
              target="_blank"
            >
              <i class="fa fa-linkedin fa-3x"></i>
              <br />
              <span id="link_style">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
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
}

.back_btn {
  position: absolute;
  left: 10px;
  cursor: pointer;
}
.contact_header {
  background-image: url("../assets/pattern.jpg"),
    linear-gradient(to bottom, rgba(57, 115, 230, 0.2), transparent);
  height: 330px;
}
.contacts_para1 {
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  padding-top: 50px;
}
.contacts_para2 {
  font-family: "Nunito", sans-serif;
  max-width: 80%;
  margin: 0 auto;
  padding: 15px;
  font-size: 18px;
  text-align: center;
}
.contact_detail_header {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 25px;
  padding: 20px;
}

.contacts_reach {
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Arizonia", cursive;
  font-size: 18px;
}
.fa-envelope,
.fa-phone,
.fa-skype,
.fa-linkedin:hover {
  padding: 2px;
  cursor: pointer;
}
.fa-twitter {
  color: #00acee;
}
.fa-skype {
  color: #00aff0;
}
.fa-linkedin {
  color: #0072b1;
}
#a_style {
  text-decoration: none;
}
#link_style {
  color: #2b2a64;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  #home_name {
    display: none !important;
  }
  #a_style {
    margin: 15px;
    text-decoration: none;
  }
  #link_style {
    font-size: 18px;
    margin: 15px;
  }
  .contacts_reach {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Arizonia", cursive;
    font-size: 18px;
  }
}
</style>