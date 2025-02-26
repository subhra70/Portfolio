const text1 = "Passionate Java Developer";
const text2 = "Problem Solver";
let counter = 0;
let flag = 0;

function type() {
  let professionText = document.getElementById("profession-text");

  if (flag == 0 && counter == text1.length) {
    flag = 1;
    counter = 0;
    setTimeout(() => {
      professionText.innerHTML = "A ";
      type();
    }, 1000); // Delay before switching text
    return;
  } else if (flag == 1 && counter == text2.length) {
    flag = 0;
    counter = 0;
    setTimeout(() => {
      professionText.innerHTML = "A ";
      type();
    }, 1000);
    return;
  }

  professionText.innerHTML += flag == 0 ? text1[counter] : text2[counter];
  counter++;

  setTimeout(type, 100);
}

document.getElementById("profession-text").innerHTML = "A ";
type();
