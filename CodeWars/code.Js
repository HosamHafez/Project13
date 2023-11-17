function arrayDiff(a, b) {
    // Use filter to keep elements in 'a' that are not in 'b'
    return a.filter(elementA => !b.includes(elementA));
}
