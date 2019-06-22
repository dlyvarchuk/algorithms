function initiate_algorithm() {
    let input = document.getElementById('input_number').value;

    const fibonacci = element => {
        if (element < 0) throw new Error ("Index cannot be negative");
        return element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);
    };

    const _fibonacci = element => {
        if (element < 0) throw new Error ("Index cannot be negative");
        const series = [1, 1];

        for (let i = 2; i < element; i++) {
            const a = series[i - 1];
            const b = series[i - 2];
            series.push(a + b);
        }

        return series[element - 1];
    };
    let html = '<b>' + fibonacci(input) + '<b>';
    let html2 = '<b>' + _fibonacci(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
