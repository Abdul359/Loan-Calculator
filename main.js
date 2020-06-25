const principal = document.querySelector("#deposit");
const interestRate = document.querySelector("#interest");
const years = document.querySelector("#years");
const submit = document.querySelector(".submit");
const option = document.querySelector("#select");
const val=document.querySelector(".compoundSection");
const intervalSelect=document.querySelector("#compoundSelect");



//selecting the option and displaying the intervals 
option.addEventListener("click",selected);
function selected(){
    if(option.value === "simpleInterest"){
        val.classList.add("remove")
    } else{
        val.classList.remove("remove");
    }

}

//calculating function
submit.addEventListener("click",calculate);
function calculate(e){
    if (option.value ==="simpleInterest"){
        const principalValue = principal.value;
        const interestValue = interestRate.value;
        const yearsValue = years.value;
        // for calculating the simple interest the formula is i=p*r*t;
        let simpleInterest = 0;
        let p = Number(principalValue);
        let r = (Number(interestValue)/100);
        let t = Number(yearsValue);
        simpleInterest += Math.round((p*r*t));
        let total = simpleInterest+p;
        document.querySelector(".main").style.marginTop ="-70px";
        const endResult = document.createElement("div");
        endResult.className="endResult";
        const header=document.createElement("h1");
        header.className="newHeader";
        header.appendChild(document.createTextNode("Simple Interest"));
        endResult.appendChild(header);
        const interestResult=document.createElement("h2");
        interestResult.innerHTML=`<h2>Interest: ${simpleInterest}</h2>
                                <h2>Total: ${total}</h2>`;
        endResult.appendChild(interestResult);
        const mainContainer=document.querySelector(".container")
        mainContainer.appendChild(endResult);
    }else if(option.value ==="CompoundInterest"){
        const principalValue = principal.value;
        const interestValue = interestRate.value;
        const yearsValue = years.value;
        // for calculating the simple interest the formula is i=p*r*t;
        let compoundInterest = 0;
        let p = Number(principalValue);
        let r = (Number(interestValue)/100);
        let t = Number(yearsValue);
        let inter;
        if (intervalSelect.value === "Annual"){
            inter=1;
        }else if(intervalSelect.value === "Quarterly"){
            inter=4;
        }else if(intervalSelect.value === "Monthly"){
            inter=12;
        }else if(intervalSelect.value === "Weekly"){
            inter=52;
        }else if(intervalSelect.value === "Daily"){
            inter=365;
        }

        let middle = 1+(r/inter);
        let power = inter*t;
        let Middle = Math.pow(middle, power);
        compoundInterest += Math.round((p*Middle)-p);
       
        let total = compoundInterest+p;
     
        document.querySelector(".main").style.marginTop ="-90px";
        const endResult = document.createElement("div");
        endResult.className="endResult";
        const header=document.createElement("h1");
        header.className="newHeader";
        header.appendChild(document.createTextNode("Compound Interest"));
        endResult.appendChild(header);
        const interestResult=document.createElement("h2");
        interestResult.innerHTML=`<h2>Interest: ${compoundInterest}</h2>
                                <h2>Total: ${total}</h2>`;
        endResult.appendChild(interestResult);
        const mainContainer=document.querySelector(".container")
        mainContainer.appendChild(endResult);
    }
e.preventDefault();
}

