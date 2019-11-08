
//scripts.js, Eddie Raskin, 11/8/2019

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
    return "Isoceles";
};

$(document).ready(function() {

  getSides();

  if (isTriangle())
  {
    $("#output").text(whichTrinangle());
    $("#output").toggle();
  }
  else
    $("#output").text("The dimensions entered do not add up to a triangle");

});
