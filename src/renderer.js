const isNumeric = n => !isNaN(n);

window.addEventListener('DOMContentLoaded', () => {
    let first = document.getElementById("firstElement");

    let firstSelectOfValues = document.getElementById("firstSelect")
    let keyForValuesList = firstSelectOfValues.options[firstSelectOfValues.selectedIndex].text;
    let secondSelectOfValues = document.getElementById("secondSelect");

    let answer = document.getElementById("answer");
    let button = document.getElementById("button");

    loadListMeasurement(keyForValuesList, valueListForLength)

    firstSelectOfValues.addEventListener("change", () => {
        keyForValuesList = firstSelectOfValues.options[firstSelectOfValues.selectedIndex].text;
        loadListMeasurement(keyForValuesList,valueListForLength);
    });

    button.addEventListener("click", () => {
        let keyForValuesOfValues = secondSelectOfValues.options[secondSelectOfValues.selectedIndex].text;
        if (!isNumeric(first.value)) {
            answer.textContent = "Указать можно только числа!";
        }

        else if (first.value) {
            let values = getValueList();
            answer.textContent = Number(first.value) * values[keyForValuesList][keyForValuesOfValues].multiple + values[keyForValuesList][keyForValuesOfValues].CI;
        }
 
    })

  })