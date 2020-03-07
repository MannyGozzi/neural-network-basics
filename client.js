
function setup() {
    createCanvas(windowWidth, windowHeight);
    let m1 = new Matrix(2, 3);
    m1.randomize(); 
    let m2 = new Matrix(3, 2);
    m2.randomize();
    console.table(m1.mult(m2).matrix);
  }
  
  
  
  function draw() {
    
  }
