function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const vowels = string => {
        let count = 0;
        const choices = "aeiou"; //or ['a', 'e', 'i', 'o', 'u']

        for (let character of string.toLowerCase())
            if (choices.includes(character)) count++;

        return count;
    };

    const _vowels = string => {
        let matches = string.match(/[aeiou]/gi);
        return matches ? matches.length : 0;
    };

    let html = '<b>' +  vowels(input) + '<b>';
    let html2 = '<b>' + _vowels(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
