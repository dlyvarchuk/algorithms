function initiate_algorithm() {
    let input = document.getElementById('input_string').value;

    const capitalize = phrase => {
        const words = [];
        for (let word of phrase.split(" "))
            words.push(word[0].toUpperCase() + word.slice(1));
        return words.join(" ");
    };

    const _capitalize = phrase => {
        let title = phrase[0].toUpperCase();
        for (let i = 1; i < phrase.length; i ++)
            title += phrase[i - 1] === " " ? phrase[i].toUpperCase() : phrase[i];
        return title;
    };
    let html = '<b>' + capitalize(input) + '<b>';
    let html2 = '<b>' + _capitalize(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
