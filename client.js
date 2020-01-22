
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    let m1 = new Matrix(2, 2);
    let m2 = new Matrix(2, 3);
    m1.randomize();
    m2.randomize();
    m1.mult(m2);
  }
  
  
  
  function draw() {
    
  }