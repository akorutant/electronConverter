const isNumeric = n => !isNaN(n);

window.addEventListener('DOMContentLoaded', () => {
    let first = document.querySelector("#firstElement");
    let answer = document.querySelector("#answer");

    let radioButtons = document.querySelectorAll("input[type='radio']")
    radioButtons.forEach((rbn) => {
        rbn.addEventListener("click", (e) => {
            let topSelect = document.querySelectorAll(".top-select")
            let bottomSelect = document.querySelectorAll(".bottom-select")
            topSelect.forEach((select) => {select.classList.remove("show")})
            bottomSelect.forEach((bottom) => {bottom.classList.remove("show")})
            if (e.target.value === 'volume') {
                topSelect[2].classList.add("show");
                bottomSelect[2].classList.add("show");
            }
            if (e.target.value === 'square') {
                console.log(topSelect[2]);
                topSelect[1].classList.add("show");
                bottomSelect[1].classList.add("show");
            }
            if (e.target.value === 'length') {
                topSelect[0].classList.add("show");
                bottomSelect[0].classList.add("show");
            }

            if (e.target.value === "mass") {
                topSelect[3].classList.add("show");
                bottomSelect[3].classList.add("show");
            }
        })
    })

    let button = document.querySelector("#button")
    button.addEventListener("click", (e) => {
        let top = document.querySelector(".top-select.show")
        let bottom = document.querySelector(".bottom-select.show")
        let values = getValueList(top.dataset.type);
        
        if (!isNumeric(first.value)) {
            answer.textContent = "Указать можно только числа!";
        }

        else if (first.value) {
            answer.textContent = Number(first.value) * values[top.value][bottom.value].multiple + values[top.value][bottom.value].CI;
        }
 
    })
})