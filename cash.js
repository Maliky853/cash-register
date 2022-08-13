let billAmount = document.querySelector("#bill-amount")
let cashGiven = document.querySelector("#cash-given")
let checkButton = document.querySelector("#check-button")
let message = document.querySelector("#error-message")
let noOfNotes = document.querySelectorAll(".no-of-notes")

let availableNotes = [2000,500,200,100,50,20,10,1]

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display = "none"
    if(billAmount.value > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            let amountToBeReturned = cashGiven.value - billAmount.value
            calculateChanged(amountToBeReturned);
        }else{
            showMessage("The Cash Provided Should Atleast Be Equal To Bill Amount");
        }
    }else{
        showMessage("Invalid Bill Amount")
    }

}
);


function calculateChanged(amountToBeReturned){
for (let i = 0; i < availableNotes.length ; i++) {
    let numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
    amountToBeReturned %= availableNotes[i]
    noOfNotes[i].innerText = numberOfNotes ;
}
}

function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg
}

