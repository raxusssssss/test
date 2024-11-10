const words = ["Galaxy", "the Best Website Ever", "the Haven for Unblocked Games"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let delay = 150; // Initial typing speed

const type = () => {
    const dynamicText = document.getElementById("dynamic-text");

    if (!isDeleting) {
        currentWord = words[i].substring(0, j + 1);
        dynamicText.innerHTML = currentWord;
        j++;

        if (j === words[i].length) {
            isDeleting = true;
            delay = 2000; // Delay before starting to delete
        } else {
            delay = 150; // Typing speed
        }
    } else {
        currentWord = words[i].substring(0, j - 1);
        dynamicText.innerHTML = currentWord;
        j--;

        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
            delay = 500; // Delay before typing next word
        } else {
            delay = 100; // Deleting speed
        }
    }

    setTimeout(type, delay);
};

document.addEventListener("DOMContentLoaded", () => {
    type();
});
