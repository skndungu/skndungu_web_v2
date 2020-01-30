<template>
  <div class="pcb_design">
    <div class="pcb_design_content">
      <div class="sub_title_content">PCB Design <br> <br> Experience</div>
      <p>Through my 4 years of professional experience in the fields of electronics, industrial control and metrology I’ve acquired many skills on both sides of the fence dividing design from maintenance, that together with my unstoppable drive to tinker and improve have shaped my mind regarding design for maintenance and reliability. I always derive great satisfaction from seeing a new project reach completion, or making an old system perform better than it did before. I am a very fast and avid learner, most of my skills in electronics and software development come directly from my own tinkering, self learning and practical training.</p>
      <div class="sub_title_content">Areas of Concentration</div>
      <p>
        In order to align my self with the way the world
        is mostly leaning to I have focused on few key areas to also play a role in development of wearables and IoT products based on this areas: 
        <ul>
          <li>RF PCB designs and Layout</li>
          <li>High Speed PCB designs and Layout</li>
          <li>EMC/EMI Techniques</li>
          <li>FCC, CE, UL, RoHs ... etc </li>
          <li>Power Supplies - Switch Mode Power Supplies(SMPS) and LDOs</li>
          <li>Microcotroller based designs(Atmel, STM32, PIC)</li>
        </ul>
      </p>
      <div class="sub_title_content">Tools I Use</div>
      <p>
        I use the following tools, it all depends with the clients preference, my tools include: 
        <ul class="software_tools">
          <li><img class="tool_icon" src="./assets/kicad.png" alt="">
          <br> KiCad 
          </li>
          <li> <img class="tool_icon" src="./assets/altium_designer.webp" alt="">  
          <br> Altium Designer</li>
          <li> <img class="tool_icon" src="./assets/eagle.jpeg" alt=""> 
           <br> Eagle CAD</li>
          <li> <img class="tool_icon" src="./assets/allegro.jpg" alt=""> <br> Allegro</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pcb_design p {
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
</style>