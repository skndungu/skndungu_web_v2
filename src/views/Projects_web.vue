<template>
  <div class="projects">
    <section class="gallery">
      <figure class="gallery_web_1">
        <img src="../assets/web/web17.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_2">
        <img src="../assets/web/web15.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_3">
        <img src="../assets/web/web12.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_4">
        <img src="../assets/web/web6.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_5">
        <img src="../assets/web/web8.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_6">
        <img src="../assets/web/web7.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_7">
        <img src="../assets/web/web5.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_8">
        <img src="../assets/web/web11.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_9">
        <img src="../assets/web/web13.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_10">
        <img src="../assets/web/web20.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_11">
        <img src="../assets/web/web1.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_12">
        <img src="../assets/web/web2.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_13">
        <img src="../assets/web/web10.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_web_14">
        <img src="../assets/web/web9.png" class="gallery__img" alt />
      </figure>
      <!-- <figure class="gallery_web_14">
        <img src="../assets/web/web12.png" class="gallery__img" alt />
      </figure>-->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.projects {
  /* background-image: url("../assets/projects.jpg"); */
  /* background-size: cover; */
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
  position: relative;
  z-index: 100;
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
  z-index: 100;
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
}
.gallery_pcb > figure {
  cursor: pointer;
}

.gallery {
  position: relative;
  z-index: 100;
  display: grid;
  background: #f77e38;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(22, 4vw);
  grid-gap: 1.5px;
  padding: 1.5px;
  height: 100%;
}

/* Web Design */
.gallery_web_1 {
  grid-row: 1 / span 9;
  grid-column: 1 / span 2;
}
.gallery_web_2 {
  grid-row: 1 / span 6;
  grid-column: 3 / span 4;
}
.gallery_web_3 {
  grid-row: 1 / span 6;
  grid-column: 7 / -1;
}
.gallery_web_4 {
  grid-row: 7 / span 3;
  grid-column: 3 / span 3;
}
.gallery_web_4 {
  grid-row: 7 / span 3;
  grid-column: 3 / span 3;
}
.gallery_web_5 {
  grid-row: 7 / span 4;
  grid-column: 6 / span 3;
}
.gallery_web_6 {
  grid-row: 7 / span 9;
  grid-column: 9 / span 2;
}
.gallery_web_7 {
  grid-row: 10 / span 3;
  grid-column: 1 / span 3;
}
.gallery_web_8 {
  grid-row: 10 / span 3;
  grid-column: 4 / span 2;
  padding: 0;
}
.gallery_web_9 {
  grid-row: 11 / span 5;
  grid-column: 6 / span 3;
}
.gallery_web_10 {
  grid-row: 13 / -1;
  grid-column: 1 / span 2;
}
.gallery_web_11 {
  grid-row: 13 / span 3;
  grid-column: 3 / span 3;
}
.gallery_web_12 {
  grid-row: 16 / span 4;
  grid-column: 3 / span 3;
}
.gallery_web_13 {
  grid-row: 20 / span 3;
  grid-column: 3 / span 3;
}
.gallery_web_14 {
  grid-row: 16 / span 7;
  grid-column: 6 / -1;
}
</style>