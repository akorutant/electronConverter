const loadListMeasurement = function (keyForValuesList, valueList) {
    let secondSelectOfValues = document.getElementById("secondSelect");

    let i, L = secondSelectOfValues.options.length - 1;
    for(i = L; i >= 0; i--) {
        secondSelectOfValues.remove(i);
    }

    for (const i in valueList[keyForValuesList]) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        secondSelectOfValues.appendChild(opt);
    }
};


const getValueList = function () {
    if (document.getElementById("radioButtonLength").checked) {
        return valueListForLength;
    }

    else if (document.getElementById("radioButtonSquare").checked) {
        return valueListForSquare;
    }

    else if (document.getElementById("radioButtonVolume").checked) {
        return valueListForVolume;
    }
};
