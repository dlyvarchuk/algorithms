function initiate_algorithm() {
    let inputArray = document.getElementById('input_string[]').value;
    let inputSize = document.getElementById('input_number').value;

    const chunk = (array, size) => {
        const chunks = [];
        for (let item in array) {
            const lastChunk = chunks[chunks.length - 1];

            if (!lastChunk || lastChunk.length === size)
                chunks.push([item])
            else
                lastChunk.push(item);
        }

        return chunks;
    };

    const _chunk = (array, size) => {
        const chunks = [];
        let index = 0;

        while (index < array.length) {
            chunks.push(array.slice(index, index + size));
            index += size;
        }

        return chunks;
    };

    const __chunk = (array, size) => {
        const chunks = [];

        for (let i = 0; i < array.length; i += size)
            chunks.push(array.slice(i, i + size));

        return chunks;
    };

    let html = '<b>' + chunk(inputArray, inputSize) + '<b>';
    let html2 = '<b>' + _chunk(inputArray, inputSize) + '<b>';
    let html3 = '<b>' + __chunk(inputArray, inputSize) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
    document.getElementById('result3').innerHTML = html3;
}
