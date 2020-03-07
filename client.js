
function setup() {
    createCanvas(windowWidth, windowHeight);
    let m1 = new Matrix(2, 3);  m1.randomize(); 
    let m2 = new Matrix(3, 2);  m2.randomize();
  
    function doubleIt(value) {return value * 2};
    m1.map(doubleIt);
    m1.print();
  }
  
  
  
  function draw() {
    
  }
