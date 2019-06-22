function initiate_algorithm() {
    let inputA = document.getElementById('input_string_a').value;
    let inputB = document.getElementById('input_string_b').value;

    const charCount = string => {
        const table = {};

        for (let char of string.replace(/\W/g, "").toLowerCase())
            table[char] = table[char] + 1 || 1;
        return table;
    };

    const anagrams = (stringA, stringB) => {
        const charCountA = charCount(stringA);
        const charCountB = charCount(stringB);

        if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
            return false;
        for (let char in charCountA)
            if (charCountA[char] !== charCountB[char])
                return false;
        return true;
    };

    const _sort = string =>
        string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
    const _anagrams = (stringA, stringB) =>
        _sort(stringA) === _sort(stringB);

    let html = '<b>' + anagrams(inputA, inputB) + '<b>';
    let html2 = '<b>' + _anagrams(inputA, inputB) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;

}
