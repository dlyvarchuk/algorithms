function initiate_algorithm() {
    let inputString = document.getElementById('input_string').value;
    let inputNumber = document.getElementById('input_number').value;

    const caesarCipher = (string, number) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        const input = string.toLowerCase();
        let output = "";

        for (let i = 0; i < input.length; i++) {
           const letter = input[i];

           if (alphabet.indexOf(letter) === -1) {
               output += letter;
               continue;
           }

           let index = alphabet.indexOf(letter) + number % 26;
           if (index > 25) index -= 26;
           if (index < 0) index +=26;

           output +=
               string[i] === string[i].toUpperCase()
                ? alphabet[index].toUpperCase()
                : alphabet[index];
        }

        return output;
    };

    function _caesarCipher (str, n) {
        let result = Array(str.length);

        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            let lower = "a".charCodeAt(0);

            if (code >= lower && code < lower + 26)
                code = (code - lower + n) % 26 + lower;

            let upper = "A".charCodeAt(0);
            if (code >= upper && code < upper + 26)
                code = (code - upper + n) % 26 + upper;
            result[i] = String.fromCharCode(code);
        }
        return result.join("");
    };

    let html = '<b>' + caesarCipher(inputString, inputNumber) + '<b>';
    let html2 = '<b>' + _caesarCipher(inputString, inputNumber) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
