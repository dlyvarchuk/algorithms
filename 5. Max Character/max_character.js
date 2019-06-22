function initiate_algorithm() {
    let input = this.document.getElementById('input_string').value;

    const max = string => {
        const characters = {};
        for (let character of string)
            characters[character] = characters[character] + 1 || 1;
        let maxCount = 0;
        let maxCharacter = null;
        for (let character in characters) {
            if (characters[character] > maxCount) {
                maxCount = characters[character];
                maxCharacter = character;
            }
        }
        return maxCharacter;
    };

    let html = '<b>' + max(input) + '<b>';

    document.getElementById('result').innerHTML = html;
}
