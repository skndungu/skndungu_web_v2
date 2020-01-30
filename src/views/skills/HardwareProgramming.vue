<template>
  <div class="hardware_design">
        <div class="pcb_design_content">
      <div class="sub_title_content"> Hardware Programming <br> <br> Experience</div>
      <p>
      In order to breath life to IoT and also speak a language that even the non technical guys understands, software programming then becomes a no brainer in 
      </p>
      <div class="sub_title_content">Areas of Concentration</div>
      <p>
        Hardware programming is a broad area as attributed from numerous microcontroller environments developed each day - I have aligned myself with the follwing
        <br>
        <br>
        <ul>
          <li>LPWAN networks - LoRa, NBIoT, SigFox</li>
          <li>Robotics</li>
          <li>Wearables</li>
          <li>Communication Devices - WiFi, BLE</li>
          <li>Security Devices</li>
          <li>Medical and Sports Devices</li>
        </ul>
      </p>
      <div class="sub_title_content">Tools I Use</div>
      <p>
        I use the following tools, it all depends with the clients preference, my tools include: 
        <ul class="software_tools">
          <li><img class="tool_icon" src="./assets/arduino.png" alt="">
          <br> Arduino
          </li>
          <li> <img class="tool_icon" src="./assets/arm_cortex.jpg" alt="">  
          <br> ARM based </li>
          <li> <img class="tool_icon" src="./assets/raspberry_pi.png" alt=""> 
           <br> Raspberry Pi</li>
          <li> <img class="tool_icon" src="./assets/embedded_rust.jpg" alt=""> <br> Embedded Rust</li>
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
</style>