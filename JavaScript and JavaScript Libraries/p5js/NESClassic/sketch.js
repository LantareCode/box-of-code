function setup() {
  createCanvas(750,543);
  noStroke();
}

/*
https://www.nintendo.com/images/page/nes-classic/nes-classic-edition.png
*/
function draw() {
  /*background(289,255,45);*/
  //background(99,134,252);
  /*background(0);*/
  
//------------------CONSOLE START------------------\\
// ***** Shapes Top ******
  //Grey Top Left
    beginShape();
    fill(207, 207, 211); //Colour
    noStroke();
    vertex(397,20);
    vertex(632,72);
    vertex(553,178);
    vertex(343,128);
    vertex(316,154);
    vertex(273,144);
    endShape();
  //Grey Top Middle Bottom
    beginShape();
    fill(207, 207, 211); //Colour
    noStroke();
    vertex(343,128);
    vertex(553,178);
    vertex(531,208);
    vertex(316,154);
    endShape();
//Grey Top Right
    beginShape();
    fill(207, 207, 211); //Colour
    noStroke();
    vertex(688,86);
    vertex(737,96);
    vertex(643,235);
    vertex(592,224);
    endShape(); 
//black Top Top
    beginShape();
    fill(0); //Colour
    noStroke();
    vertex(632,72);
    vertex(693,86);
    vertex(678,108);
    vertex(618,93);
    endShape(); 
//Grey Top Middle Middle
    beginShape();
    //fill(207, 207, 211); //Colour
    fill(159,160,164);
    noStroke();
    vertex(618,92);
    vertex(679,108);
    vertex(614,194);
    vertex(553,178);
    endShape(); 
    //Smaller Blocks on Top (Drawn with lines)
      //Main
        strokeWeight(8);
        stroke(207, 207, 211);
        line(621,97,668,109);
        line(614,107,660,119);
        line(606,117,653,129);
        line(598,127,646,139);
        line(591,137,639,149);
        line(584,147,632,159);
        line(577,157,625,169);
        line(570,167,618,179);
        line(563,177,611,189);
      //Reflecctions top
        strokeWeight(1);
        stroke(254, 254, 254);
        line(620,93,668,105);
        line(613,103,660,115);
        line(605,113,653,125);
        line(598,123,646,135);
        line(591,133,639,145);
        line(584,143,632,155);
        line(577,153,625,165);
        line(570,163,618,175);
        line(563,173,611,185);
      //Dark bottom
        strokeWeight(1);
        stroke(82, 82, 83);
        line(619,102,665,114);
        line(611,112,657,124);
        line(604,121,650,133); 
        line(597,131,643,143);
        line(592,141,636,153);
        line(583,151,629,163);
        line(576,161,622,173);
        line(569,171,615,183);
        line(562,181,608,193);
    
    
//black Top Bottom
    beginShape();
    fill(0); //Colour
    noStroke();
    vertex(553,178);
    vertex(616,194);
    vertex(596,224);
    vertex(531,208);
    endShape();  
  
// ***** Shapes Right Side ******
  //Grey Right Top
    beginShape();
    fill(147,147,149); //Colour
    noStroke();
    vertex(737,96);
    vertex(737,149);
    vertex(643,293);
    vertex(643,235);
    endShape();  
  //Dark Grey Right Bottom
    beginShape();
    fill(97,96,99); //Colour
    vertex(737,149);
    vertex(737,160);
    vertex(643,304);
    vertex(643,293);
    noStroke();
    endShape();
  

// ***** Shapes Front ******
  //Grey Front Left (Including lid, lid will be added using lines.)
    beginShape();
    fill(214,214,217); //Colour
    vertex(273,144);
    vertex(531,208);
    vertex(524,265);
    vertex(266,198);
    noStroke();
    endShape();
  //Grey Front Right
    beginShape();
    fill(214,214,217); //Colour
    vertex(596,224);
    vertex(643,235);
    vertex(643,293);
    vertex(590,280);
    noStroke();
    endShape();
  //Black Front Top
    beginShape();
    fill(16,16,16); //Colour
    vertex(530,208);
    vertex(596,224);
    vertex(590,280);
    vertex(525,265);
    noStroke();
    endShape();
  //Dark Grey Front Left
    beginShape();
    fill(165,162,168); //Colour
    vertex(266,198);
    vertex(266,206);
    vertex(286,260);
    vertex(520,322);
    vertex(524,265);
    noStroke();
    endShape();
  //Dark Grey Front Right
    beginShape();
    fill(165,162,168); //Colour
    vertex(590,280);
    vertex(643,293);
    vertex(643,304);
    vertex(613,347);
    vertex(583,339);
    noStroke();
    endShape();
  //Black Front Bottom
    beginShape();
    fill(16,16,16); //Colour
    vertex(524,265);
    vertex(590,280);
    vertex(583,339);
    vertex(520,322);
    noStroke();
    endShape();
    //black front curve rightside
      beginShape();
      fill(16,16,16); //Colour
      vertex(588,286);
      vertex(594,295);
      vertex(591,328);
      vertex(583,333);
      noStroke();
      endShape();
  
// ***** Buttons Front (and little light left)******
  //Light Left
    beginShape();
    stroke(250,91,83);
    fill(255,142,127); //Colour
    vertex(310, 234);
    vertex(318, 236);
    vertex(318, 244);
    vertex(310, 242);
    vertex(310, 234);
    endShape();
  //Left Button (darkgrey back)
    beginShape();
    fill(54,54,54); //Colour
    noStroke();
    vertex(324,234);
    vertex(356,242);
    vertex(356,256);
    vertex(324,248);
    endShape();
  //Left Button (Light grey front)
    beginShape();
    fill(165,162,168); //Colour
    noStroke();
    vertex(327,237);
    vertex(353,244);
    vertex(353,253);
    vertex(327,246);
    endShape();  
    
  //Right Button (darkgrey back)
    beginShape();
    fill(54,54,54); //Colour
    noStroke();
    vertex(374,246);
    vertex(406,254);
    vertex(406,268);
    vertex(374,260);
    endShape();
  //Right Button (Light grey front)
    beginShape();
    fill(165,162,168); //Colour
    noStroke();
    vertex(374,251);
    vertex(400,258);
    vertex(400,268);
    vertex(374,261);
    endShape();
  //Right Button (Light grey top)
    beginShape();
    fill(206,206,210); //Colour
    noStroke();
    vertex(378,248);
    vertex(405,255);
    vertex(400,258);
    vertex(374,251);
    endShape();
  //Right Button (dark grey right)
    beginShape();
    fill(98,98,100); //Colour
    noStroke();
    vertex(403,255);
    vertex(403,268);
    vertex(400,268);
    vertex(400,258);
    endShape();  

// ***** Lines Top ******
  //Grey Top Left lines
    strokeWeight(1);
    stroke(254, 254, 254);
    line(345,127, 553,176);//White reflection line back
    stroke(82, 82, 83);
    line(316,154,343,128); //Dark Line
    line(343,128, 553,178);//Dark Line
    line(553,178,632,72);//Dark Line
    strokeWeight(3);
    line(555,177,617,93);//Dark Line
    strokeWeight(1)
    stroke(254, 254, 254);
    line(273,144,316,154);//White reflection line front
  //Grey Top Middle Bottom Lines
    stroke(254, 254, 254);
    line(316,154,531,208);//White reflection line front
    stroke(82, 82, 83);
    line(553,178,531,208); //Dark Line
  //Grey Top Middle Middle Lines 
    stroke(82, 82, 83);
    strokeWeight(3);
    line(675,108,614,193); //Dark Line
    strokeWeight(1);
  //black Top Bottom Lines
    stroke(254, 254, 254);
    line(531,208,596,224);//White reflection line front
  //Grey Top Right Lines
    stroke(254, 254, 254);
    line(596,224,643,235);//White reflection line front
    stroke(82, 82, 83);
    line(736,96,643,235); //Dark Line
    
// ***** Lines Right Side ******  
  //Grey Right Top Lines
    stroke(254, 254, 254);
    line(643,235,643,293);//White reflection line front right
    stroke(82, 82, 83);
    line(736,149,643,293); //Dark Line side

// ***** Lines Front ******
  //Grey Front Left Lines (Including lid, lid will be added using lines.)  
    stroke(254, 254, 254);
    line(273,144,266,198);//White reflection line front left
    line(267,196,524,263);//White reflection line front bottom
    stroke(82, 82, 83);
    line(267,198,524,265); //Dark Line bottom
    line(525,249,524,265); //Dark Line right
    //LID
      stroke(82, 82, 83);
      line(316,154,313,196); //Dark Line left lid
      line(313,196,523,249); //Dark Line bottom lid
      line(529,208,525,249); //Dark Line right lid
      line(400,216,440,226); //Dark line grip lid
      stroke(254, 254, 254);
      line(313,198,523,251);//White reflection line bottom lid
      line(400,214,440,224);//White reflection line grip lid
  //Black Front Top Lines
    stroke(254, 254, 254);
    line(596,224,590,280);//White reflection line front right
  //Grey Front Right
    stroke(254, 254, 254);
    line(590,278,643,291);//White reflection line front top
    stroke(82, 82, 83);
    line(590,280,643,293);//Dark Line bottom
  //Dark Grey Front Right
    stroke(82, 82, 83);
    line(642,303,612,346);//Dark Line side
    line(583,338,611,345);//Dark Line bottom
  //Dark Grey Front Left
    stroke(82, 82, 83);
    line(287,259,520,321);//Dark Line bottom
    
// **** LINES ****
// ***** Black right Top and Bottom Decorations ****
  stroke(162,160,166);
  //Top
    line(628,82,682,95);
    line(545,192,602,206);
  //Bottom
    line(532,225,590,238);
    line(528,249,587,263);
 
 
// ***** Buttons Front Bottom ******   
  //Black Front Bottom Lines
    stroke(254, 254, 254);
    line(524,263,590,278);//White reflection line top
  
// ***** Buttons Front (and little light left)******  
  //Left Button (darkgrey back) lines
    stroke(254, 254, 254);
    line(325,232,355,240);//White reflection line top
    stroke(82, 82, 83);
    line(325,234,355,242);//Dark line top
    line(327,246,353,253);//Dark line bottop
  //Left Button (Light greyfront) lines
    stroke(254, 254, 254);
    line(328,237,352,243);//White reflection line top
    stroke(82, 82, 83);
    line(327,246,353,253);//Dark line bottom
    
  //Right Button (darkgrey back) lines
    stroke(254, 254, 254);
    line(374,244,406,252);//White reflection line top
    stroke(82, 82, 83);
    line(374,246,406,254);//Dark line top
    line(375,260,405,268);//Dark line bottop
  //Right Button (Light greyfront) lines
    stroke(254, 254, 254);
    line(376,250,399,256);//White reflection line top
    stroke(82, 82, 83);
    line(375,260,399,267);//Dark line bottom 
    line(374,251,374,260);//Dark lin left

// ***** Plugs Front ******   
  //Right Plug
    //Thicker top and bottom
      stroke(209,209,213);
      strokeWeight(3);
      line(567,289,579,292);//top
      line(564,324,577,328);//bottom
    //Regular Sides      
      strokeWeight(1);
      line(580,292,578,328);//regs
      line(563,314,563,323);//links onder
      line(563,314,567,315);//links plat onder
      line(569,300,568,315);//middleop
      line(566,299,569,300);//links plat bo
      line(565,289,565,299);//links bo
    //Highlights
      stroke(254, 254, 254);
      strokeWeight(2)
      line(567,288,579,291);//White reflection line top
      line(564,323,577,327);//White reflection line bottom
      
  //Left Plug
    //Thicker top and bottom
      stroke(209,209,213);
      strokeWeight(3);
      line(535,282,547,285);//top
      line(532,316,545,320);//bottom
    //Regular Sides      
      strokeWeight(1);
      line(548,285,546,321);//regs
      line(531,307,531,316);//links onder
      line(531,307,535,308);//links plat onder
      line(537,293,536,308);//middleop
      line(534,292,537,293);//links plat bo
      line(533,282,533,292);//links bo
    //Highlights
      stroke(254, 254, 254);
      strokeWeight(2);
      line(535,281,547,284);//White reflection line top
      line(532,315,545,319);//White reflection line bottom

//------------------CONSOLE END------------------\\      

//------------------MARIO START------------------\\
  noStroke();
  /*stroke(0);
  strokeWeight(1);*/
  
  fill(223,26,0);//red
    rect(104,266, 17,17);
    rect(121,266, 17,17);
    rect(138,266, 17,17);
    rect(155,266, 17,17);
    rect(172,266, 17,17);
  fill(266,162,74);//skin
    rect(223,266, 17,17);
    rect(240,266, 17,17);
    rect(257,266, 17,17);
    
  fill(223,26,0);//red
    rect(87,283, 17,17);
    rect(104,283, 17,17);
    rect(121,283, 17,17);
    rect(138,283, 17,17);
    rect(155,283, 17,17);
    rect(172,283, 17,17);
    rect(189,283, 17,17);
    rect(206,283, 17,17);
    rect(223,283, 17,17);
  fill(266,162,74);//skin
    rect(240,283, 17,17);
    rect(257,283, 17,17);
    
  fill(113,105,0);//groen
    rect(87,300, 17,17);
    rect(104,300, 17,17);
    rect(121,300, 17,17);
  fill(266,162,74);//skin
    rect(138,300, 17,17);
    rect(155,300, 17,17);
  fill(113,105,0);//groen    
    rect(172,300, 17,17);
  fill(266,162,74);//skin    
    rect(189,300, 17,17);
    //rect(206,300, 17,17);
  fill(113,105,0);//groen 
    rect(223,300, 17,17);
    rect(240,300, 17,17);
    rect(257,300, 17,17);
    
  fill(113,105,0);//groen
    rect(70,317, 17,17);
  fill(266,162,74);//skin
    rect(87,317, 17,17);
  fill(113,105,0);//groen
    rect(104,317, 17,17);
  fill(266,162,74);//skin    
    rect(121,317, 17,17);
    rect(138,317, 17,17);
    rect(155,317, 17,17);
  fill(113,105,0);//groen    
    rect(172,317, 17,17);
  fill(266,162,74);//skin    
    rect(189,317, 17,17);
    rect(206,317, 17,17);
    rect(223,317, 17,17);
  fill(113,105,0);//groen 
    rect(240,317, 17,17);
    rect(257,317, 17,17);
  
  fill(113,105,0);//groen
    rect(70,334, 17,17);
  fill(266,162,74);//skin
    rect(87,334, 17,17);
  fill(113,105,0);//groen
    rect(104,334, 17,17);
    rect(121,334, 17,17);
  fill(266,162,74);//skin 
    rect(138,334, 17,17);
    rect(155,334, 17,17);
    rect(172,334, 17,17);
  fill(113,105,0);//groen 
    rect(189,334, 17,17);
  fill(266,162,74);//skin
    rect(206,334, 17,17);
    rect(223,334, 17,17);
    rect(240,334, 17,17);
  fill(113,105,0);//groen 
    rect(257,334, 17,17);
    
  fill(113,105,0);//groen
    rect(70,351, 17,17);
    rect(87,351, 17,17);
  fill(266,162,74);//skin
    rect(104,351, 17,17);
    rect(121,351, 17,17);
  fill(266,162,74);//skin 
    rect(138,351, 17,17);
    rect(155,351, 17,17);
  fill(113,105,0);//groen 
    rect(172,351, 17,17);
    rect(189,351, 17,17);
    rect(206,351, 17,17);
    rect(223,351, 17,17);
    rect(240,351, 17,17);
    
  fill(266,162,74);//skin
    rect(104,368, 17,17);
    rect(121,368, 17,17);
    rect(138,368, 17,17);
    rect(155,368, 17,17); 
    rect(172,368, 17,17);
    rect(189,368, 17,17);
    rect(206,368, 17,17);
  fill(113,105,0);//groen 
    rect(223,368, 17,17);
    rect(240,368, 17,17);
    
  
  fill(113,105,0);//groen
    rect(53,385, 17,17);
    rect(70,385, 17,17);
    rect(87,385, 17,17);
    rect(104,385, 17,17);
  fill(223,26,0);//red
    rect(121,385, 17,17);
  fill(113,105,0);//groen
    rect(138,385, 17,17);
    rect(155,385, 17,17);
    rect(172,385, 17,17);
  fill(223,26,0);//red  
    rect(189,385, 17,17);
  fill(113,105,0);//groen
    rect(206,385, 17,17);
    rect(223,385, 17,17);
  fill(113,105,0);//groen  
    rect(274,385, 17,17);
 
 
  fill(266,162,74);//skin
    rect(19,402, 17,17);
    rect(36,402, 17,17);
  fill(113,105,0);//groen
    rect(53,402, 17,17);
    rect(70,402, 17,17);
    rect(87,402, 17,17);
    rect(104,402, 17,17);
    rect(121,402, 17,17);
  fill(223,26,0);//red
    rect(138,402, 17,17);
  fill(113,105,0);//groen
    rect(155,402, 17,17);
    rect(172,402, 17,17); 
    rect(189,402, 17,17);
  fill(223,26,0);//red
    rect(206,402, 17,17);
  fill(113,105,0);//groen
    rect(257,402, 17,17);  
    rect(274,402, 17,17); 
    
    
  fill(113,105,0);//groen
  fill(223,26,0);//red
  fill(266,162,74);//skin
    rect(19,419, 17,17);
    rect(36,419, 17,17);
    rect(53,419, 17,17);
  fill(113,105,0);//groen
    rect(70,419, 17,17);
    rect(87,419, 17,17);
    rect(104,419, 17,17);
    rect(121,419, 17,17);
  fill(223,26,0);//red
    rect(138,419, 17,17);
    rect(155,419, 17,17);
    rect(172,419, 17,17); 
    rect(189,419, 17,17);
  fill(266,162,74);//skin
    rect(206,419, 17,17);
  fill(223,26,0);//red
    rect(223,419, 17,17);
    rect(240,419, 17,17);
  fill(113,105,0);//groen
    rect(257,419, 17,17);  
    rect(274,419, 17,17);
    
 
  fill(266,162,74);//skin
    rect(36,436, 17,17);
  fill(223,26,0);//red  
    rect(87,436, 17,17);
    rect(104,436, 17,17);
    rect(121,436, 17,17);
    rect(138,436, 17,17);
  fill(266,162,74);//skin
    rect(155,436, 17,17);
  fill(223,26,0);//red 
    rect(172,436, 17,17); 
    rect(189,436, 17,17);
    rect(206,436, 17,17);
    rect(223,436, 17,17);
    rect(240,436, 17,17);
  fill(113,105,0);//groen
    rect(257,436, 17,17);  
    rect(274,436, 17,17);
    
  
  fill(113,105,0);//groen
    rect(53,453, 17,17);
    rect(70,453, 17,17);
  fill(223,26,0);//red
    rect(87,453, 17,17);
    rect(104,453, 17,17);
    rect(121,453, 17,17);
    rect(138,453, 17,17);
    rect(155,453, 17,17);
    rect(172,453, 17,17); 
    rect(189,453, 17,17);
    rect(206,453, 17,17);
    rect(223,453, 17,17);
    rect(240,453, 17,17);
  fill(113,105,0);//groen
    rect(257,453, 17,17);  
    rect(274,453, 17,17);
    
  
  fill(113,105,0);//groen
    rect(36,470, 17,17);
    rect(53,470, 17,17);
    rect(70,470, 17,17);
  fill(223,26,0);//red
    rect(87,470, 17,17);
    rect(104,470, 17,17);
    rect(121,470, 17,17);
    rect(138,470, 17,17);
    rect(155,470, 17,17);
    rect(172,470, 17,17);
    
  fill(113,105,0);//groen
    rect(36,487, 17,17);
    rect(53,487, 17,17);
    
//------------------MARIO END------------------\\
  
//------------------TEXT START------------------\\ 
  noStroke();
  textStyle(BOLD);
  fill(222,62,55);
  
  drawingContext.rotate(0.24);
  textSize(15);
  text('Nintendo',355,91);
  
  textSize(10);
  text('ENTERTAINMENT SYSTEM',355,106);
  
  textSize(5);
  text('POWER',378,160);
  
  textSize(5);
  text('RESET',428,162);
//------------------TEXT END------------------\\
    
}











