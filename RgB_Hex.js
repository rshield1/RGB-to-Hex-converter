window.onload = function(){
   alert("Hey there! Welcome to Rob's Color picker. \n\n Change the color by moving the bar, entering a value from 0 to 255 in the input boxes, click the \'random\' button for random colors, or by inserting the hex value, in the input") ;
}
//control sliders//
function moveSliders(a,b,c){
    document.getElementById("r").value = a;
    document.getElementById("g").value = b;
    document.getElementById("b").value = c;
}

function get(index){
    if(index !== undefined && index != 4 && index != 5){
       var value1 = document.getElementById('num1').value;   
       var value2 = document.getElementById('num2').value; //gets the 3 input type numbers
       var value3 = document.getElementById('num3').value;
       
       if(value1 > 255){
          value1 = 255; 
       } else if(value2 > 255){  //if you manually try any value higher than 255
          value2 = 255;         //It will make it 255 automatically
       } else if(value3 > 255){
          value3 = 255; 
       } 
    }
    
    var r,g,b;
    
    if(index == 1){
       r = value1;
       document.getElementById('num1').value = r;
       g = document.getElementById('num2').value;    //if altering from 1st number input
       b = document.getElementById('num3').value;
       
       moveSliders(r,g,b);
       
    } else if(index == 2){
       r = document.getElementById('num1').value;  
       g= value2;                               //if altering from 2nd number input
       g = document.getElementById('num2').value = g;
       b = document.getElementById('num3').value;  
       
       moveSliders(r,g,b);
       
    } else if(index == 3){
        r = document.getElementById('num1').value;  
        g = document.getElementById('num2').value;  //if altering from 3rd number input
        b = value3;
        document.getElementById('num3').value = b;
        
        moveSliders(r,g,b);
       
    } else if(index == 4){
       r = Math.floor(Math.random() * 256) ;
       g = Math.floor(Math.random() * 256) ;    //if altering from random button
       b = Math.floor(Math.random() * 256) ;
       
       document.getElementById('num1').value = r;  
       document.getElementById('num2').value = g;  
       document.getElementById('num3').value = b;   
       
       moveSliders(r,g,b);
       
    } else if(index == 5){
       r = document.getElementById('hex').value;
       if(r.substring(0,1) != '#'){ //if there's no #, insert it
           document.getElementById('hex').value = '#' + r;
           r = r.substring(0,2);
           g = document.getElementById('hex').value;    //if altering from the hex box input
           g = g.substring(3,5);
           b = document.getElementById('hex').value;
           b = b.substring(5,7);
       } else { //otherwise just do the normal procedure
           r = r.substring(1,3);
           g = document.getElementById('hex').value;
           g = g.substring(3,5);
           b = document.getElementById('hex').value;
           b = b.substring(5,7);
       }
    } else {
           r = document.getElementById('r').value;
           g = document.getElementById('g').value;
           b = document.getElementById('b').value;       //if altering from any of the sliders
           document.getElementById('num1').value = r;
           document.getElementById('num2').value = g;
           document.getElementById('num3').value = b;
    }
    
    if(r <= 15){ // if the val is less than 15
       if(index == 5){
          document.getElementById('num1').value = parseInt(r,16); //altering the number input from hex input
       } else {
          r = parseInt(r,10);
          r = (r).toString(16); //if not from hex input, convert r to string
       }
       if(r == 'NaN'){
          r = '0';
          document.getElementById('num1').value = r;    //if invalid input, it will be 0
          moveSliders(r,g,b);
       }
       if(index != 5){
          r = '0' + r; // adds a 0 for low values. Ex A, will be 0A
       }
    } else{
       if(index == 5){
       
          var rval = parseInt(r,16);
          if(rval > 255){
             rval = 255;          
          }
          document.getElementById('num1').value = rval; //moves input num1 with hex val converted to int
          document.getElementById('r').value = rval; //moves the slider r with hex val converted to int
     } else {
       r = parseInt(r,10);
       r = (r).toString(16);    // if not from hex input, convert it to string
     }
    }

   if(g <= 15){
       if(index == 5){

          document.getElementById('num2').value = parseInt(g,16); //altering the number input from hex input
       } else {
          g = parseInt(g,10);
          g = (g).toString(16); //if not from hex input, convert g to string
       }
       if(g == 'NaN'){
          g = '0';
          document.getElementById('num2').value = g;  // if invalid input, it will be 0
          moveSliders(r,g,b);
       }
       if(index != 5){ 
          g = '0' + g; // adds a 0 for low values. Ex A, will be 0A
       }
    } else{
       if(index == 5){
       
          var gval = parseInt(g,16);
          if(gval > 255){
             gval = 255;          
          }
          document.getElementById('num2').value = gval; //moves input num2 with hex val converted to int
          document.getElementById('g').value = gval; //moves the slider g with hex val converted to int
     } else {
       g = parseInt(g,10);
       g = (g).toString(16);    // if not from hex input, convert it to string
     }
    }
    
       if(b <= 15){
       if(index == 5){
        
          document.getElementById('num3').value = parseInt(b,16); //altering the number input from hex input
       } else {
          b = parseInt(b,10);
          b = (b).toString(16); //if not from hex input, convert b to string
       }
       if(b == 'NaN'){
          b = '0';
          document.getElementById('num3').value = b; //if invalid input, it will be 0
          moveSliders(r,g,b);
       }
       if(index != 5){
          b = '0' + b; // adds a 0 for low values. Ex A, will be 0A
       }
    } else{
       if(index == 5){
         
          var bval = parseInt(b,16);
          if(bval > 255){
             bval = 255;          
          }
          document.getElementById('num3').value = bval; //moves input num3 with hex val converted to int
          document.getElementById('b').value = bval; //moves the slider b with hex val converted to int
     } else {
       b = parseInt(b,10);
       b = (b).toString(16); // if not from hex input, convert it to string
     }
    }
    
    var hex = '#' + r + g + b;
    hex = hex.toUpperCase();
    document.body.style.backgroundColor = hex;
    document.getElementById('hex').value = hex;
}

