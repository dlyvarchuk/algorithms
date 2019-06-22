function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const reverse = string =>
        string
            .split("")
            .reverse()
            .join("");

    const _reverse = string => {
        let result = "";
        for (let character of string)
            result = character + result;
        return result;
    };

    const __reverse = string =>
        string
            .split("")
            .reduce(
                (result, character) => character + result
            );

    let html = '<b>' + reverse(input) + '</b>';
    let html2 = '<b>' + _reverse(input) + '</b>';
    let html3 = '<b>' + __reverse(input) + '</b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
    document.getElementById('result3').innerHTML = html3;
}
