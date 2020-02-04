<template>
  <div class="pcb_design">
    <div class="pcb_design_content">
      <div class="sub_title_content">
        <span  class="sub_title_header"> PCB Design </span>
         Experience</div>
            <p>I am an Electrical and Electronics Designs Engineer specializing and Accomplished in the area of Embedded Systems, Product Design & Prototyping, Schematics, and PCB layout.
            I have run quite some miles being in the field for more than 6 years I have become an Accomplished Designer in RF, Impedance control, EMI/EMC, Signal Integrity, High-Speed Designs, FPGA, DRAM, BGA designing standards-based and professional PCB layout for industry standards - Internationally working with companies from all over       
    </p>
      <div class="sub_title_content">Areas of Concentration</div>
      <p>
        In order to align my self with the way the world
        is mostly leaning to I have focused on few key areas to also play a role in development of wearables and IoT products based on this areas: 
        <ul>
          <li> Single Sheet to Multi sheet Schematics</li>
          <li> Single/double-sided and Multi-layer PCBs layouts</li>
          <li> Digital video, audio, and other multimedia interfaces: HDMI, MIPI DSI/CSI, I2S, TDM, etc</li>
          <li>Typical data and control interfaces: UART, USB, SPI, I2C, SDIO, PCIe, etc.</li>
          <li>RF PCB designs and Layout</li>
          <li>High Speed PCB designs and Layout</li>
          <li>EMC/EMI emission control techniques</li>
          <li>FCC, CE, UL, ANSI-C, RoHs ... etc </li>
          <li>Power Supplies - Switch Mode Power Supplies(SMPS) and LDOs</li>
          <li>Microcotroller based designs(Atmel, STM32, PIC)</li>
          <li>Signal Integrity</li>
          <li>CAN Protocols</li>
          <li> ECAD Library Administration</li>
          <li>IPC standards-based models</li>
          <li>... and more</li>
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
          <br> Altium</li>
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
  font-family: "Open Sans", sans-serif;
  color: #fff;
  height: 100%;
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

@media screen and (max-width: 758px) {
.pcb_design_content{
  display: flex;
  flex-direction: column;
}
.pcb_design_content p {
  max-width: 100;
}
.sub_title_header{
  display: none;
}
}
</style>