<template>
  <div class="projects">
    <section class="gallery">
      <figure class="gallery_pcb_1">
        <img src="../assets/pcb/pcb3.jpeg" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_2">
        <img src="../assets/pcb/pcb_2.png" class="gallery__img" alt />
        <div class="img_description">Motor control</div>
      </figure>
      <figure class="gallery_pcb_3">
        <img src="../assets/pcb/pcb30.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_4">
        <img src="../assets/pcb/pcb_5.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_5">
        <img src="../assets/pcb/pcb_39.jpg" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_6">
        <img src="../assets/pcb/pcb_38.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_7">
        <img src="../assets/pcb/pcb_35.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_8">
        <img src="../assets/pcb/pcb9.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_9">
        <img src="../assets/pcb/pcb36.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_10">
        <img src="../assets/pcb/pcb5.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_11">
        <img src="../assets/pcb/pcb_3.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_12">
        <img src="../assets/pcb/pcb_37.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_13">
        <img src="../assets/pcb/pcb_11.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_14">
        <img src="../assets/pcb/pcb29.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_15">
        <img src="../assets/pcb/pcb27.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_16">
        <img src="../assets/pcb/pcb_9.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_17">
        <img src="../assets/pcb/pcb_1.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_18">
        <img src="../assets/pcb/pcb_8.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_pcb_19">
        <img src="../assets/pcb/pcb_12.png" class="gallery__img" alt />
      </figure>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {}
};
</script>

<style scoped>
html {
  height: 100%;
}
body {
  min-height: 100%;
}
.heading_1 {
  position: relative;
  font-size: 22pt;
  color: #ffff;
  font-weight: normal;
  line-height: 1.6;
  padding: 15px;
  padding-bottom: 25px;
}
.projects_intro {
  position: relative;
  font-size: 14px;
  font-weight: normal;
  max-width: 60vw;
  margin: 0 auto;
  color: #eee;
}

.project_headers {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  color: #fff;
  padding: 4px;
  font-size: 18pt;
}
#router_link {
  text-decoration: none;
  color: #ffff;
}

.pcb {
  border-bottom: solid 0.5px #eee;
}

.web {
  border-bottom: solid 0.5px #eee;
}

.product {
  border-bottom: solid 0.5px #eee;
}

.router_link_active {
  text-decoration: none;
  border-bottom: solid 2px blue;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}
.gallery_pcb > figure {
  cursor: pointer;
}

.gallery {
  display: grid;
  background: #f77e38;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(15, 5vw);
  grid-gap: 1.5px;
  padding: 1.5px;
}

/* PCB */

.gallery_pcb_1 {
  grid-row: 1 / span 4;
  grid-column: 1 / span 3;
}

.gallery_pcb_2 {
  grid-row: 1 / span 3;
  grid-column: 4 / span 3;
}

.gallery_pcb_3 {
  grid-row: 1 / span 2;
  grid-column: 7 / span 2;
}

.gallery_pcb_4 {
  grid-row: 1 / span 2;
  grid-column: 9 / -1;
}

.gallery_pcb_5 {
  grid-row: 5 / span 4;
  grid-column: 1 / span 3;
}

.gallery_pcb_6 {
  grid-row: 4 / span 4;
  grid-column: 4 / span 3;
}

.gallery_pcb_7 {
  grid-row: 3 / span 3;
  grid-column: 7 / -1;
}

.gallery_pcb_8 {
  grid-row: 6 / span 2;
  grid-column: 7 / span 2;
}

.gallery_pcb_9 {
  grid-row: 6 / span 3;
  grid-column: 9 / -1;
}

.gallery_pcb_10 {
  grid-row: 9 / span 2;
  grid-column: 1 / 4;
}

.gallery_pcb_11 {
  grid-row: 8 / span 3;
  grid-column: 4 / span 2;
}

.gallery_pcb_12 {
  grid-row: 8 / span 4;
  grid-column: 6 / span 3;
}
.gallery_pcb_13 {
  grid-row: 9 / span 3;
  grid-column: 9 / -1;
}

.gallery_pcb_14 {
  grid-row: 11 / span 3;
  grid-column: 1 / span 2;
}
.gallery_pcb_15 {
  grid-row: 11 / span 3;
  grid-column: 3 / span 3;
}
.gallery_pcb_16 {
  grid-row: 12 / span 5;
  grid-column: 6 / span 2;
}
.gallery_pcb_17 {
  grid-row: 12 / span 5;
  grid-column: 8 / -1;
}
.gallery_pcb_18 {
  grid-row: 14 / -1;
  grid-column: 1 / span 3;
}
.gallery_pcb_19 {
  grid-row: 14 / -1;
  grid-column: 4 / span 2;
}
</style>