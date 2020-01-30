<template>
  <div class="hardware_design">
        <div class="pcb_design_content">
      <div class="sub_title_content">
        Software Programing <br> <br>
        Experience</div>
      <p>
        In order to breath life into IoT products and also speak a language that even the non technical guys understand, software programming then becomes a no brainer in order to roll out such platforms. This platforms gives a sense of connections and more deeper comunications and feedbacks between user and the products - I have been developing such programs/platforms for the past 3 years
      </p>
      <div class="sub_title_content">Areas of Concentration</div>
      <p>
        The field of software programing is perharps one of the broadest fields we have in the areas of IT, therefore to keep yourself aligned to the current treads it's quite demanding as frameworks are developed/updated daily - to keep my track in IoT I have majored on the following areas:
        <br>
        <br>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Web design</li>
          <li>Data Analysis</li>
        </ul>
      </p>
      <div class="sub_title_content">Tools I Use</div>
      <p> 
        <ul class="software_tools">
          <li><img class="tool_icon" src="./assets/javascript.jpg" alt="">
          <br> JavaScript
          </li>
          <li> <img class="tool_icon" src="./assets/vue_js.jpeg" alt="">  
          <br> Vue JS </li>
          <li> <img class="tool_icon" src="./assets/flutter.png" alt=""> 
           <br>Flutter</li>
          <li> <img class="tool_icon" src="./assets/python.png" alt=""> <br>Python</li>
          <li> <img class="tool_icon_node" src="./assets/node_js.webp" alt=""> <br>Node_js</li>
        </ul>
        <ul class="software_tools">
          <li> <img class="tool_icon" src="./assets/html.svg" alt="">  
          <br> HTML5 </li>
          <li> <img class="tool_icon" src="./assets/css.png" alt=""> 
           <br>CSS3</li>
          <li> <img class="tool_icon" src="./assets/bootstrap.png" alt=""> <br>Bootstrap</li>
          <li> <img class="tool_icon" src="./assets/materialize.jpg" alt=""> <br>Materialize</li>
          <li> <img class="tool_icon" src="./assets/adobe_xd.png" alt=""> <br>Adobe Xd</li>
        </ul>
        
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.hardware_design p {
  color: #fff;
}
.header_img > img {
  height: 150px;
  width: 100vw;
}
.pcb_design_content p {
  max-width: 80%;
  margin: 0 auto;
  padding-top: 8px;
}
.sub_title_content {
  font-family: "Arizonia", cursive;
  font-size: 27px;
  color: #ffa069;
  text-align: center;
}
.software_tools{
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}
.tool_icon {
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 6px;
  margin-top: 20px;
  /* margin-top: 60px; */
}
.tool_icon_node{
  height: 70px;
  width: 90px;
}
</style>