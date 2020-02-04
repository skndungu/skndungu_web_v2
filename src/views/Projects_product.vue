<template>
  <div class="projects">
    <section class="gallery">
      <figure class="gallery_product_1">
        <img src="../assets/product/product_1.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_2">
        <img src="../assets/product/product_2.png" class="gallery__img" alt />
        <div class="img_description">Motor control</div>
      </figure>
      <figure class="gallery_product_3">
        <img src="../assets/product/product_11.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_4">
        <img src="../assets/product/product_4.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_5">
        <img src="../assets/product/product_5.jpeg" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_6">
        <img src="../assets/product/product_13.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_7">
        <img src="../assets/product/product_7.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_8">
        <img src="../assets/product/product_8.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_9">
        <img src="../assets/product/product_10.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_10">
        <img src="../assets/product/product_16.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_11">
        <img src="../assets/product/product_18.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_12">
        <img src="../assets/product/product_12.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_13">
        <img src="../assets/product/product_13.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_14">
        <img src="../assets/product/product_14.png" class="gallery__img" alt />
      </figure>
      <figure class="gallery_product_15">
        <img src="../assets/product/product_15.jpeg" class="gallery__img" alt />
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
.projects {
  height: 100%;
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
  /* position: relative; */
  display: grid;
  background: #f77e38;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(15, 5vw);
  grid-gap: 1.5px;
  padding: 1.5px;
  height: 100%;
}

/* Product */

.gallery_product_1 {
  grid-row: 1 / span 4;
  grid-column: 1 / span 3;
}
.gallery_product_2 {
  grid-row: 1 / span 5;
  grid-column: 4 / span 5;
}
.gallery_product_3 {
  grid-row: 1 / span 4;
  grid-column: 9 / span 2;
}
.gallery_product_4 {
  grid-row: 5 / span 4;
  grid-column: 1 / span 3;
}
.gallery_product_5 {
  grid-row: 6 / span 3;
  grid-column: 4 / span 3;
}
.gallery_product_6 {
  grid-row: 6 / span 3;
  grid-column: 7 / span 2;
}
.gallery_product_7 {
  grid-row: 5 / span 2;
  grid-column: 9 / span 2;
}
.gallery_product_8 {
  grid-row: 7 / span 2;
  grid-column: 9 / span 2;
}
.gallery_product_9 {
  grid-row: 9 / span 4;
  grid-column: 1 / span 4;
}
.gallery_product_10 {
  grid-row: 9 / span 3;
  grid-column: 5 / span 3;
}
.gallery_product_11 {
  grid-row: 9 / span 3;
  grid-column: 8 / span 3;
}
.gallery_product_12 {
  grid-row: 13 / span 3;
  grid-column: 1 / span 2;
}
.gallery_product_13 {
  grid-row: 13 / span 3;
  grid-column: 3 / span 2;
}
.gallery_product_14 {
  grid-row: 12 / span 4;
  grid-column: 5 / span 4;
}
.gallery_product_15 {
  grid-row: 12 / span 4;
  grid-column: 9 / span 2;
}
</style>