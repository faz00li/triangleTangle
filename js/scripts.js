// collect data
//determine if sides produce triangle
  //if they do, detemine what kind of triangle
    // equalateral a === b && a ===c && b === c
    // scalene a != b && a != c && b != c
    // equilateral a === b || a === c || b === c


var sideA = 0;
var sideB = 0;
var sideC = 0;

function getSides(sideA, sideB, sideC) {

  sideA = parseInt($("input#sideA").val());
  sideA = parseInt($("input#sideB").val());
  sideA = parseInt($("input#sideC").val());

};

function isTriangle(sideA, sideB, sideC) {

  if ( (sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA) )
    return true;
  else
    return false;
};

function whichTrinangle(sideA, sideB, sideC) {

  if (sideA === sideB && sideA ===sideC && sideB === sideC)
    return "Equilateral";

  else if (sideA != sideB && sideA !=sideC && sideB != sideC)
    return "Scalene";

  else if (sideA === sideB || sideA === sideC || sideB === sideC);
    return "Isoceles"
};
