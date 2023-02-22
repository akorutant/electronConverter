const loadListData = function (selectOfValues, valueList) {
    let keyForValuesList = selectOfValues.options[selectOfValues.selectedIndex].text;
    let secondSelectOfValues = document.querySelector("#secondSelect");

    selectOfValues.addEventListener("change", () => {
        let i, L = secondSelectOfValues.options.length - 1;
        for(i = L; i >= 0; i--) {
            secondSelectOfValues.remove(i);
        }

        keyForValuesList = selectOfValues.options[selectOfValues.selectedIndex].text;

        for (const i in valueList[keyForValuesList]) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            secondSelectOfValues.appendChild(opt);
        }
    });
};


const getValueList = function (type) {
    if (type === "length") {
        return valueListForLength;
    }

    else if (type === "square") {
        return valueListForSquare;
    }

    else if (type === "volume") {
        return valueListForVolume;
    }
};
