function initiate_algorithm() {
    let inputMagazine = document.getElementById('input_magazine').value;
    let inputNote = document.getElementById('input_note').value;

    const ransomNote = (note, magazine) => {
        const magazineWords = magazine.split(" ");
        const magazineHash = {};

        magazineWords.forEach( word => {
           if (!magazineHash[word]) magazineHash[word] = 0;
           magazineHash[word]++;
        });

        const noteWords = note.split(" ");
        let possible = true;

        noteWords.forEach(word => {
            if (magazineHash[word]) {
                magazineHash[word]--;
                if (magazineHash[word] < 0) possible = false;
            } else possible = false;
        });

        return possible;
    };

    let html = '<b>' + ransomNote(inputNote, inputMagazine) + '<b>';

    document.getElementById('result').innerHTML = html;
}
