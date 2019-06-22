function initiate_algorithm() {
    let input = document.getElementById('input_number').value;

    const fibonacci = (element, cache = []) => {
        if (cache[element]) return cache[element];
        else {
            if (element < 3) return 1;
            else cache[element] =
                fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
        }
        return cache[element];
    };

    const _memoize = fn => {
      const cache = {};
      return (...args) => {
          if (cache[args]) return cache[args];

          const output = fn.apply(this, args);
          cache[args] = output;
          return output;
      };
    };

    const _fibonacci = element =>
        element < 2
            ? element
            : _memoized_fibonacci(element - 1) + _memoized_fibonacci(element - 2);

    const _memoized_fibonacci = _memoize(_fibonacci);

    let html = '<b>' + fibonacci(input) + '<b>';
    let html2 = '<b>' + _memoized_fibonacci(input) + '<b>';

    document.getElementById('result').innerHTML = html;
    document.getElementById('result2').innerHTML = html2;
}
