
exports.min = function min (array) {
    return (array && array.length > 0) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
    return (array && array.length > 0) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
    if ( !array || array.length === 0 ) {
        return 0;
    }

    var sum = 0;
    for (n in array) {
        sum += parseInt(array[n]);
    }

    return parseFloat(sum / array.length);
}
