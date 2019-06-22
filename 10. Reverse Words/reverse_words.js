function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const reverseWords = string => {
        const wordsReversed = [];

        string.split(" ").forEach(word => {
            let wordReversed = "";
            for (let i = word.length - 1; i >= 0; i--)
                wordReversed += word[i];
            wordsReversed.push(wordReversed);
        });

        return wordsReversed.join(" ");
    };

    const _reverseWords = string =>
        string
            .split(" ")
            .map(word =>
                word
                    .split("")
                    .reverse()
                    .join("")
            )
            .join(" ");

    let html = '<b>' + reverseWords(input) + '<b>';
    let html2 = '<b>' + _reverseWords(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
