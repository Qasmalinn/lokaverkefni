function calculateNumbers(){
    let dayTracker = document.getElementById("dayTracker").value;
    //console.log(dayTracker);
    const dayPrice = 40;
    const dayResult = dayPrice * dayTracker;
    console.log(dayResult)
    document.getElementById("daysFee").innerHTML= "$" + dayResult;


    let startDistance = document.getElementById("startDistance").value;
    //console.log(startDistance);
    let endDistance = document.getElementById("endDistance").value;
    //console.log(endDistance);
    let diffrence = endDistance - startDistance;
    //console.log(diffrence);
    document.getElementById("milesDriven").innerHTML = diffrence;

    
    const milesPrice = 0.25;
    const milesResult = diffrence * milesPrice;
    document.getElementById("milesFee").innerHTML = "$" + milesResult;

    const amount = dayResult + milesResult
    document.getElementById("amountDue").innerHTML = "$" + amount;
}
function clearNumbers(){
    document.getElementById("dayTracker").value ="";
    document.getElementById("startDistance").value ="";
    document.getElementById("endDistance").value ="";
    document.getElementById("milesDriven").innerHTML ="0";
    document.getElementById("milesFee").innerHTML ="$0";
    document.getElementById("daysFee").innerHTML ="$0";
    document.getElementById("amountDue").innerHTML ="$0";
    }