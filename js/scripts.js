
//scripts.js, Eddie Raskin, 11/8/2019

var sideA = 1;
var sideB = 2;
var sideC = 3;

function getSides() {

  console.log("original values");
  console.log(sideA);
  console.log(sideB);
  console.log(sideC);

  sideA = parseInt($("input#sideA").val());
  sideB = parseInt($("input#sideB").val());
  sideC = parseInt($("input#sideC").val());

  console.log("updated values");
  console.log(sideA);
  console.log(sideB);
  console.log(sideC);

};

function isTriangle() {

  console.log("here");

  if ( (sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA) ) {
    console.log("is triangle");
    return true;
  }
  else {
    console.log("is not triangle");
    return false;
  }
};

function whichTrinangle() {

  if (sideA === sideB && sideA ===sideC && sideB === sideC)
    return "Equilateral";

  else if (sideA != sideB && sideA !=sideC && sideB != sideC)
    return "Scalene";

  else if (sideA === sideB || sideA === sideC || sideB === sideC);
    return "Isoceles";
};

$(document).ready(function() {

  $("form#triangle").submit(function(event) {

    event.preventDefault();

    getSides();

    if (isTriangle()) {
      $("#output").text(whichTrinangle());
      $("#output").removeClass("hidden");
    }
    else
      $("#output").removeClass("hidden").text("The dimensions entered do not add up to a triangle");

  });

});
