document.getElementById("totalTip").style.display = "none";
document.getElementById("billSplit").style.display = "none";
document.getElementById("grandTotal").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();
};

function calculateTip() {
  var billAmt = document.getElementById("amtbill").value;
  var numPeople = document.getElementById("numpeople").value;
  var tip = document.getElementById("tip1").value;

  if(isNaN(document.getElementById("amtbill").value) || isNaN(document.getElementById("numpeople").value)){
    alert("Please enter numbers only");
    location.reload();
   }else{ }


  if (billAmt === "" ) {
    alert("Please enter values");
    return;
  }
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
    document.getElementById("each2").style.display = "none";
    document.getElementById("each3").style.display = "none";
    document.getElementById("billSplit").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
    document.getElementById("each2").style.display = "block";
    document.getElementById("each3").style.display = "block";
  }

  var billTotal = billAmt / numPeople;

  var total = (billAmt * tip1) / numPeople;

  var grandTotal = billTotal + total;

  total = Math.round(total * 100) / 100;
  billTotal = Math.round(billTotal * 100) / 100;
  grandTotal = Math.round(grandTotal * 100) / 100;

  //allows us to have two digits after decimal point
  total = total.toFixed(2);
  billTotal = billTotal.toFixed(2);
  grandTotal = grandTotal.toFixed(2);

//Display the split total
//if there is only 1 hide this area
if (numPeople === "" || numPeople <= 1) {
  numPeople = 1;
  document.getElementById("billSplit").style.display = "hidden";
  document.getElementById("split").innerHTML = billTotal;
} else {
    document.getElementById("billSplit").style.display = "block";
    document.getElementById("split").innerHTML = billTotal;
}
//Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

//Display the Grand Totals
    document.getElementById("grandTotal").style.display = "block";
    document.getElementById("grand").innerHTML = grandTotal;
}