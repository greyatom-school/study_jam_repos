function add()
{

    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input3").value;
    let total = parseFloat(num1)+parseFloat(num2);
    

    console.log(typeof(total))

    let num3 = document.getElementById("input2").value;
    let total2=total/num3;
    console.log(total2)

    document.getElementById("demo").innerHTML = total2;




}