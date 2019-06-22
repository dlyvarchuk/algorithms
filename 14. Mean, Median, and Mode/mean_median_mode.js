function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const mean = (array) =>
       array.reduce((sum, value) => sum + value, 0) / array.length;

    const median = (array) => {
        const arraySorted = array.sort();

        return arraySorted.length % 2 === 0
            ? (arraySorted[arraySorted.length / 2 - 1] +
                arraySorted[arraySorted.length / 2]) / 2
            : arraySorted[Math.floor(arraySorted.length / 2) - 1];
    };

    const mode = (array) => {
        const table = {};

        array.forEach(value => (
            table[value] = table[value] + 1 || 1
        ));

        let modes = [];
        let max = 0;

        for (const key in table) {
            const value = parseFloat(key);
            const count = table[key];

            if (count > max) {
                modes = [value];
                max = count;
            } else if (count === max)
                modes.push(value);
        }

        if (modes.length === Object.keys(table).length)
            modes = [];

        return modes;
    };

    let html = '<b>' + mean(input) + '<b>';
    let html2 = '<b>' + median(input) + '<b>';
    let html3 = '<b>' + mode(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
    document.getElementById('result3').innerHTML = html3;
}
