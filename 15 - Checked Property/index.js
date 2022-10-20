document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){
        console.log("You are subscribed")
    }
    else{
        console.log("You are NOT subscribed!")
    }

    if(visaBtn.checked){
        console.log("You are paying with a Visa!");
    }
    else if (mastercardBtn.checked){
        console.log("You are paying with Mastercard!");
    }
    else if (paypalBtn.checked){
        console.log("You are paying with Paypal!")
    }    
    else{
        console.log("You must select a payment type!")
    }
}