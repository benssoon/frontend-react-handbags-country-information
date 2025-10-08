function arrayToString(array) {
    let formatted = '';
    if (array.length === 1) {
        return array[0];
    } else {
        for (const key in array) {
            if (Number(key) === array.length - 1) {
                formatted += 'and ' + array[key]
            } else {
                formatted += array[key] + ', ';
            }
        }
        return formatted;
    }
}
export default arrayToString;