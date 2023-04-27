let n = 6;

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    if (i == n || j == i || j == 1) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row); 
}


//OUTPUT- 

// * * * * * *
// *       *
// *     *
// *   *
// * *
// *