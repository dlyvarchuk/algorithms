function initiate_algorithm() {
    let inputString = document.getElementById('input_string').value;
    let inputNumber = document.getElementById('input_number').value;

    const twoSum = (array, sum) => {
        const pairs = [];
        const store = [];

        for (let part1 of array) {
            const part2 = sum - part1;

            if (store.indexOf(part2) !==  1)
                pairs.push([part1, part2]);

            store.push(part1);
        }

        return pairs;
    };

    let html = '<b>' + twoSum(inputString, inputNumber) + '<b>';

    document.getElementById('result').innerHTML = html;
}
