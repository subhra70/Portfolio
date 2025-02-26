const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");
const text1 = "Educational Learning";
const text2 = "Online Learning";

let counter1 = 0,
  counter2 = 0;

function type() {
  if (counter1 < text1.length) {
    heading1.innerHTML += text1[counter1];
    counter1++;
  }
  if (counter2 < text2.length) {
    heading2.innerHTML += text2[counter2];
    counter2++;
  }
  if (counter1 < text1.length || counter2 < text2.length) {
    setTimeout(type, 150); // Adjust typing speed here (in milliseconds)
  }
}

type();
