const isNumeric = n => !isNaN(n);

window.addEventListener('DOMContentLoaded', () => {
    let first = document.getElementById("firstElement");
    let firstSelectOfValues = document.getElementById("firstSelect")
    let keyForValuesList = firstSelectOfValues.options[firstSelectOfValues.selectedIndex].text;
    let secondSelectOfValues = document.getElementById("secondSelect");
    let answer = document.getElementById("answer");
    let button = document.getElementById("button");

    firstSelectOfValues.addEventListener("change", () => {
        let i, L = secondSelectOfValues.options.length - 1;
        for(i = L; i >= 0; i--) {
            secondSelectOfValues.remove(i);
        }

        keyForValuesList = firstSelectOfValues.options[firstSelectOfValues.selectedIndex].text;

        for (const i in valueListForLength[keyForValuesList]) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            secondSelectOfValues.appendChild(opt);
        }
    });

    button.addEventListener("click", () => {
        let keyForValuesOfValues = secondSelectOfValues.options[secondSelectOfValues.selectedIndex].text;
        if (!isNumeric(first.value)) {
            answer.textContent = "Указать можно только числа!";
        }

        else if (first.value) {
            answer.textContent = Number(first.value) * valueListForLength[keyForValuesList][keyForValuesOfValues].multiple + valueListForLength[keyForValuesList][keyForValuesOfValues].CI;
        }
 
    })

  })