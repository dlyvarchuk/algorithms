function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const isPalindrome = string => {
        const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
        const stringCharacters = string
            .toLowerCase()
            .split("")
            .reduce(
                (characters, character) =>
                    validCharacters.indexOf(character) > -1
                        ? characters.concat(character)
                        : characters,
                []
            );
        return stringCharacters.join("") === stringCharacters.reverse().join("")
    };

    const _isPalindrome = string =>
        string
            .split("")
            .every((character, index) => character === string[string.length - 1 - index]);


    const __isPalindrome = string => {
        const cleaned = string.replace(/\W/g, "").toLowerCase();

        return (
            cleaned ===
            cleaned
                .split("")
                .reverse()
                .join("")
        );
    };
    let html = '<b>' + isPalindrome(input) + '</b>';
    let html2 = '<b>' + _isPalindrome(input) + '</b>';
    let html3 = '<b>' + __isPalindrome(input) + '</b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
    document.getElementById('result3').innerHTML = html3;
}
