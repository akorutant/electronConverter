const isNumeric = n => !isNaN(n);

window.addEventListener('DOMContentLoaded', () => {
    let first = document.querySelector("#firstElement");
    let answer = document.querySelector("#answer");
    let selectOfValues = document.querySelector("#firstSelectLength");

    let radioButtons = document.querySelectorAll("input[type='radio']")
    radioButtons.forEach((rbn) => {
        rbn.addEventListener("click", (e) => {
            let topSelect = document.querySelectorAll(".top-select")
            topSelect.forEach((select) => {select.classList.remove("show")})
            if (e.target.value === 'volume') {
                selectOfValues = document.querySelector("#firstSelectVolume");
                topSelect[2].classList.add("show");
                loadListData(selectOfValues, valueListForVolume);
            }
            if (e.target.value === 'square') {
                selectOfValues = document.querySelector("#firstSelectSquare");
                topSelect[1].classList.add("show")
                loadListData(selectOfValues, valueListForSquare);
            }
            if (e.target.value === 'length') {
                selectOfValues = document.querySelector("#firstSelectLength");
                topSelect[0].classList.add("show");
                loadListData(selectOfValues, valueListForLength);
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