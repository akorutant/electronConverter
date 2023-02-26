const isNumber = n => !isNaN(n);
let currentCI = "length";

window.addEventListener('DOMContentLoaded', () => {
    const resultLabel = document.querySelector("#label-result");
    setCurrentCI(currentCI);

    const fromList = document.querySelector("#from");
    fromList.addEventListener("change", (e) => {
        const toList = document.querySelector("#to");
        const ciLabel = document.querySelector("#label-ci");

        ciLabel.innerText = e.target.value;
        toList.innerHTML = "<option></option>";
        Object.keys(valueList[currentCI][fromList.value]).forEach(e => toList.innerHTML += `<option>${e}</option>`);
    })

    const btnCalculate = document.querySelector("#btn-calculate");
    btnCalculate.addEventListener("click", (e) => {
        const fromValue = document.querySelector("#from").value;
        const toValue = document.querySelector("#to").value;
        const numValue = document.querySelector("#number").value;
        if (isNumber(numValue)) {
            resultLabel.innerText = `= ${numValue * valueList[currentCI][fromValue][toValue]["multiple"]} ${toValue}`;
        }
        
        else {
            resultLabel.innerText = " = Нужно ввести число!";
        }
    });
})

function setCurrentCI(CI) {
    const fromList = document.querySelector("#from");
    const toList = document.querySelector("#to");

    currentCI = CI;

    toList.innerHTML = "<option></option>";

    fromList.innerHTML = "<option></option>";
    Object.keys(valueList[currentCI]).forEach(e => fromList.innerHTML += `<option>${e}</option>`);
}