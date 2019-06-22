function initiate_algorithm() {
    let input = document.getElementById('input_integer').value;

    const reverse = integer =>
        parseInt(
            integer
                .toString()
                .split("")
                .reverse()
                .join("")
        ) * Math.sign(integer);

    let html = '<b>' + reverse(input) + '</b>';

    document.getElementById('result').innerHTML = html;
}
