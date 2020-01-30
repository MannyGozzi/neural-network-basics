
function setup() {
    createCanvas(windowWidth, windowHeight);
    let m1 = new Matrix(2, 3);
    m1.randomize(); 
    let m2 = m1.transpose();
    console.table(m2.matrix);
  }
  
  
  
  function draw() {
    
  }