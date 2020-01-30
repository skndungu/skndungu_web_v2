<template>
  <div class="hardware_design">
        <div class="pcb_design_content">
      <div class="sub_title_content"> IoT Products Development <br> <br> Experience</div>
      <p>
        Finally, IoT architecture is not complete without a physical product being rolled out to actualy implement and provide a clear visualization of the ideas and thoeries put across to solve the problem indentified.
      </p>
      <div class="sub_title_content">Areas of Concentration</div>
      <p>
        This section entirely involves the synergy of all the three fields of interest that is hardware design, Software  and hardware programming - to ensure extreme aestheics and outlook CAD design and 3D modeling also comes into play, we have developed plenty of this designs, check out the <router-link id="link" to="/projects">projects page</router-link> for details.
        <br>
        The developed products include:
        <br>
        <br>
        <ul>
          <li>Security Devices (Home & Commercial)</li>
          <li>Agricultural Monitoring Products</li>
          <li>Wearables</li>
          <li>Communication/Remote control Devices</li>
          <li>Energy Meters</li>
          <li>Medical and Sports Devices</li>
        </ul>
      </p>
      <div class="sub_title_content">Tools I Use</div>
      <p>
        In this area a synergy of tools from this fields is done in a very precise manner.
        <ul class="software_tools">
          <li><img class="tool_icon" src="./assets/hardware.png" alt="">
          <br> Hardware Programming
          </li>
          <li> <img class="tool_icon" src="./assets/software.jpeg" alt="">  
          <br> Software Programming </li>
          <li> <img class="tool_icon" src="./assets/mechanical.png" alt=""> 
           <br> Mechanical design</li>
          <li> <img class="tool_icon" src="./assets/electronics.png" alt=""> <br>Hardware Design</li>
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
#link{
  text-decoration: none;
  color: #ffa069;
}

#link:hover{
  color: blue;
  transition: all 0.4s;
}
</style>