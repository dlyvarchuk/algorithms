function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const reverseArray = array => {
        for (let i = 0; i < array.length / 2; i++) {
            const temp = array[i];

            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
        return array;
    };

    const _reverseArray = array => {
        for (let i = 0; i < array.length / 2; i++) {
            [array[i], array[array.length - 1 - i]] =
            [array[array.length - 1 - i], array[i]];
        }
        return array;
    };

    let html = '<b>' + reverseArray(input) + '<b>';
    let html2 = '<b>' + _reverseArray(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
