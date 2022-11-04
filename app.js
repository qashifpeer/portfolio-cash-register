const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#msg");
const availableNotes =[2000,500,100, 50, 10, 5, 1];

const noteNumber = document.querySelectorAll(".note-number");
// cashGiven.disabled=true
checkBtn.addEventListener("click", () =>{
    
//    console.log(billAmount.value)
    if(billAmount.value > 0){
        // cashGiven.disabled=false
        hideMessage();
        if(cashGiven.value >= billAmount.value){
            const cashToReturn = cashGiven.value - billAmount.value;
            calculateChange(cashToReturn);

        } else{
            showMessage(msg);
            errorMessage("Do You wanna clean table?")
        }

      


       

    }else
    {
        showMessage(msg);
        
        errorMessage("Bill Can Not Be Null ");

    }
})

function errorMessage(msg){
    message.innerText = msg;
}

function hideMessage(){
    message.style.visibility = "hidden";
}
function showMessage(msg){
    message.style.visibility="visible";
}

function calculateChange(cashToReturn){
    for(let i=0; i < availableNotes.length; i++){
        let numberOfNotes = Math.trunc( cashToReturn / availableNotes[i]);
        
        cashToReturn = cashToReturn % availableNotes[i]

       noteNumber[i].innerText = numberOfNotes;

    }

}


