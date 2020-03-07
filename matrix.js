
/* Usage
*  let matrix1 = new Matrix(3, 2);
*  let matrix2 = new Matrix(2, 4);
*  matrix1.mult(matrix2);
*  let matrix3 = Matrix.mult(matrix1, matrix2); //this line is using the static mult function
*
*      note that the actually matrixdata is found using .matrix
*      e.g. matrix1.matrix holds the underlying matrix data
*  
* this is deliberately made innefficient in order to aid understanding
* a significant optimisation would be to not use nested arrays however
* we are gonna keep it as simple as possible
*/

class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.matrix = [];
      
      // create a 0 matrix
      for(let row = 0; row < this.rows; row++) {
        this.matrix[row] = [];
        for(let col = 0; col < this.cols; col++) {
          this.matrix[row][col] = 0;
        }
      }
    }
    
    
    /*
    * multiplies this matrix with the supplied matrix (matrix product)
    * or scales the matrix if supplied with a scalar
    */
    mult(n) {
      if(n instanceof Matrix && this.cols === n.rows) {
        const result = new Matrix(this.rows, n.cols);
        for(let row = 0; row < result.rows; row++) {    // resulting matrix will have dimensions of the 1st matrix's rows and the # of columns in the 2nd matrix
          for(let col = 0; col < result.cols; col++) {
            let sum = 0;
            for(let index = 0; index < this.cols; index++) {
              sum += this.matrix[row][index] * n.matrix[index][col];
            }
            result.matrix[row][col] = sum;
          }
        }
        this.matrix = result.matrix;
      } else {
        for(let row = 0; row < this.rows; row++) {
          for(let col = 0; col < this.cols; col++) {
            this.matrix[row][col] *= n;
          }
        }
      }
      this.print();
      return this;
    }
  
    
    /*
    * if n is a matrix then add it element wise
    * if n is a number then add it homogeneously
    */
    add(n) {
      if(n instanceof Matrix
         && this.rows.length === n.rows.length
         && this.cols.length === n.cols.length) {
        for(let row = 0; row < this.rows; row++) {
          for(let col = 0; col < this.cols; col++) {
            this.matrix[row][col] += n.matrix[row][col];
          }
        }
      } else { // this is a number not a matrix
        for(let row = 0; row < this.rows; row++) {
          for(let col = 0; col < this.cols; col++) {
            this.matrix[row][col] += n;
          }
        }
      }
    }
    
    identity() {
      for(let row = 0; row < this.rows; row++) {
        for(let col = 0; col < this.cols; col++) {
          if(row === col) this.matrix[row][col] = 1;
          else            this.matrix[row][col] = 0;
        }
      }
    }
    
    randomize() {
      for(let row = 0; row < this.rows; row++) {
        this.matrix[row] = [];
        for(let col = 0; col < this.cols; col++) {
          this.matrix[row][col] = Math.floor(Math.random() * 11);
        }
      }
      this.print();
    }

    transpose() {
      let result = new Matrix(this.cols, this.rows);
      for(let row = 0; row < this.rows; row++) {
        for(let col = 0; col < this.cols; col++) {
          result.matrix[col][row] = this.matrix[row][col];
        }
      }
      return result;
    }
  
    static mult(m1, m2) {
        const result = new Matrix(m1.rows, m2.cols);
        for(let row = 0; row < result.rows; row++) {    // resulting matrix will have dimensions of the 1st matrix's rows and the # of columns in the 2nd matrix
          for(let col = 0; col < result.cols; col++) {
            let sum = 0;
            for(let index = 0; index < m1.cols; index++) {
              sum += m1.matrix[row][index] * m2.matrix[index][col];
            }
            result.matrix[row][col] = sum;
          }
        }
      return result;
    }
    
    print() {
      console.table(this.matrix);
    }
    
  }
