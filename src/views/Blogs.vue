<template>
  <div class="skills">
    <div class="heading">
      <p>Blogs</p>
      <app-back-btn class="back_btn"></app-back-btn>
    </div>
    <app-menu-btn class="new_home_btn"></app-menu-btn>
    <div class="blogs">
      <div class="page_title">
        This page shows Blogs I have found intersting from other
        design engineer's as well as mine, feel free to follow on at topic you might find intersting. I use this blogs for my daily refreshers as well as learning some new approach.
      </div>
      <ul>
        <li id="list_blogs" v-for="blog in blogs" :key="blog.title">
          <span class="blog_header">{{blog.title}}</span>
          <br />
          <p class="blog_p">{{blog.description}}</p>
          <span>
            <a
              id="blog_link"
              target="_blank"
              href="https://www.microtype.io/high-power-pcb-design-tips-tricks/"
            >Read More</a>
          </span>
          <br />
          <span class="blog_by">By: {{blog.by}}</span>
        </li>
      </ul>
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
  data() {
    return {
      blogs: [
        {
          title:
            "Narrow Band (NB) IoT – The next level Communication Network for Internet of Things",
          link:
            "https://circuitdigest.com/article/narrow-band-nb-iot-next-level-communication-network-for-internet-of-things?utm_source=pushengage&utm_medium=pushnotification&utm_campaign=pushengage",
          description:
            "Internet of Things (IOT) is the technology that would change the future of how things would work and that we have seen in our previous IoT based Projects. The main aim of IOT is to connect devices and make things easier for humans to control. Now, with an increase in production and the use of IOT devices, the experts have predicted that the globe will have around 75 Billion or more working IOT devices by 2025. But, this big number of IOT devices couldn't...",
          by: "Abhiemanyu Pandit"
        },
        {
          title: "High Power PCB Design Tips & Tricks",
          link: "https://www.microtype.io/high-power-pcb-design-tips-tricks/",
          description:
            "The goal with this article is to discuss some of the methods that I have learned and implemented from these projects and to hopefully provide a good starting point for any designer who wishes to design a board that can supply > 30A continuously through a standard PCB...",
          by: "Microtype Engineering"
        },
        {
          title: "8 PCB Grounding Rules",
          link:
            "https://www.autodesk.com/products/eagle/blog/8-pcb-grounding-rules/",
          description:
            "Grounding isn’t all that important, right? It’s just the foundation that we build all of our electronic designs on. But what about those signals! The truth is, grounding is the most important part of your entire design, and we all tend to ignore it until it becomes a huge problem. Without a stable ground, you’ll never pass clean signals from one device to another....",
          by: "Autodesk Eagle"
        },
        {
          title: "H-Bridge Circuit Design",
          link: "https://www.microtype.io/h-bridge-circuit-design/",
          description:
            "H-Bridge Circuit Basics What is an H-Bridge circuit? In the most simplistic terms, an H-bridge circuit can switch the polarity of the attached load. The most common use of an H-bridge is to drive a DC motor, allowing directional control. There are various H-Bridge designs, and some use discrete components consisting of MOSFETs, while other designs utilize a dedicated Integrated Chip (IC) H-bridge. How does it work...?",
          by: "Microtype Engineering"
        },
        {
          title: "Why Low Quiescent Current Matters for Longer Battery Life",
          link:
            "https://www.mouser.com/pdfdocs/why-low-quiescent-current-matters-for-longer-battery-life.pdf",
          description: `Battery life is getting increased scrutiny as our devices continue to shrink but are still
            expected to deliver more functionality and performance than ever before. Effectively
            extending battery life in future devices will require mastery of low quiescent current. This
            paper examines the role of low quiescent current in delivering the battery life essential for
            today’s (and tomorrow’s) wearable, mobile, and other smart, connected devices. ...`,
          by: "Maxim Integrated"
        },
        {
          title: "Patent Before Prototype: Which Comes First?",
          link:
            "https://www.microtype.io/patent-before-prototype-which-comes-first/",
          description:
            "One of the most misunderstood topics when launching a new product to market is of patents and prototypes. My goal with this article is to dispel myth’s and help guide entrepreneurs in product development. I will try to help suggest when to patent an invention first, and when to prototype it first. For the sake of this article, when I say “patent,” I mean a fully filed utility patent. A great resource on the importance...",
          by: "Microtype Engineering"
        },
        {
          title: "LPWAN, LoRa, LoRaWAN and the Internet of Things",
          link:
            "https://www.microtype.io/patent-before-prototype-which-comes-first/",
          description:
            "A low-power wide-area network (LPWAN) or low-power wide-area (LPWA) network or low-power network (LPN) is a type of wireless telecommunication wide area network designed to allow long range communications at a low bit rate among things (connected objects), such as sensors operated on a battery..",
          by: "Prashant Ram"
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
  width: 100vw;
  background-color: #2b2a64;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
}
.heading p {
  font-family: "Pacifico", cursive;
  font-size: 25px;
}

.back_btn {
  position: absolute;
  left: 10px;
  cursor: pointer;
}
.blogs {
  background: #ddd;
  height: 100%;
}
#list_blogs {
  background-color: #f77e38;
  height: 110px;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  list-style: none;
  margin-bottom: 5px;
}
.blog_header {
  font-family: "Pacifico", cursive;
  color: #fff;
  font-weight: 500;
  font-size: 17px;
}
.blog_p {
  font-size: 13px;
}
#blog_link {
  position: absolute;
  right: 100px;
  text-decoration: none;
  color: #fff;
  background: #2b2a64;
  padding: 4px;
  border-radius: 3px;
  font-size: 8px;
}
.blog_by {
  font-size: 8px;
  color: rgb(131, 129, 129);
  position: absolute;
  right: 80px;
}
.page_title {
  max-width: 90%;
  margin: 0 auto;
  padding: 14px;
  font-size: 14px;
}
</style>