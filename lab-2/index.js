document.addEventListener("DOMContentLoaded", () => {

    const optionSpan = document.querySelector(".version");
    let listNumner = 7;
    let version = listNumner % 6 + 1;

    optionSpan.textContent = version;

    const button = document.querySelector("#button");
    const answerBlock = document.querySelector("#answer"); 

    button.addEventListener("click", function () {

        const katet1 = document.querySelector("#katet1").value;
        const katet2 = document.querySelector("#katet2").value;

        if (katet1 < 0 || katet2 < 0) {
            answerBlock.style.color = "rgb(253, 71, 71)";
            answerBlock.innerHTML = "Довжина катету не може бути меншою за нуль!";
        } else if (katet1 == 0 || katet2 == 0) {
            answerBlock.style.color = "rgb(253, 71, 71)";
            answerBlock.innerHTML = "Довжина катету не може дорівнювати нулю!";
        } else {
            let answer = Math.sqrt((katet1 ** 2) + (katet2 ** 2));
            answerBlock.style.color = "blue";
            answerBlock.innerHTML = "Довжина гіпотенузи дорівнює " + answer;
            document.querySelector("form").reset();
        }
    });

});
