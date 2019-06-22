function initiate_algorithm() {
    let input = document.getElementById('input_number').value;

    const steps = number => {
        let stairs = "";

        for (let row = 0; row < number; row++) {
            let stair = "";

            for (let column = 0; column < number; column++)
                stair += column <= row ? "#" : " ";

            stairs += stair + "\n";
        }

        return stairs;
    };

    const _steps = (number, row = 0, stair = "", stairs = "") => {
        if (row === number) return stairs;

        if (stair.length === number)
            return _steps(number, row + 1, "", stairs + stair + "\n");

        return _steps(number, row, stair + (stair.length <= row ? "#" : " "), stairs);
    };

    let html = '<b>' + steps(input) + '<b>';
    let html2 = '<b>' + _steps(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
