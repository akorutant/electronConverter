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
