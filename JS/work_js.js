let imgElement = document.querySelector(".left-part .img-box");
let projName = document.querySelector(".left-part .proj-name");
let description = document.querySelector(".left-part .description");
let buttons = document.querySelector(".left-part .buttons");
const leftPart = [
  {
    img: [
      `<img
              src="images/project1_img1.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
      `<img
              src="images/project1_img2.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
      `<img
              src="images/project1_img3.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
      `<img
              src="images/project1_img4.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
      `<img
              src="images/project1_img5.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
    ],
    heading: "<p>Document Management System</p>",
    description: `<p>
              The system is called "D A S - S T A T", a web-based platform. It
              has three types of login, each with limited accessibility.

              <b>Individual Panel:</b> This panel is for all faculty members of
              the institute, allowing them to upload their personal details,
              course information, certificates, achievements, and more. This
              ensures that the office staff can access the necessary documents
              when required.

              <b>Departmental Panel:</b> This panel is accessible by the Head of
              the Department (H.O.D.). It includes details such as the number of
              students along with their caste categories, student results,
              departmental schedules, and other relevant information. This
              ensures that all necessary departmental records are readily
              available.

              <b>Admin Panel:</b> This panel is for the Principal of the
              institute. It provides access to details about individual faculty
              members and departmental information. The Principal also has the
              authority to add new faculty members to the system and deactivate
              accounts, restricting access if needed. This project was developed
              to address the urgent challenges faced by the institution and to
              streamline academic and administrative management efficiently.
            </p>`,
    buttons: [
      `<a href="https://repository.singurgovtcollege.org/">
              <button>Site Link</button>
            </a>`,
      `<a href="document_management_system.pdf">
              <button>Check More</button>
            </a>`,
    ],
  },
  {
    img: [
      `<img
              src="images/project2_img1.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
      `<img
              src="images/project2_img2.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
    ],
    heading: "<p>Tic Tac Toe Game</p>",
    description: `<p>
              This is a Tic Tac Toe Game. The game starts when one chooses its
              difficulty mode and click on the start button. There are three
              difficulty mode-

              <br><b>Easy Mode:</b> There are no time limit in playing one's move to
              play.

              <br><b>Medium Mode:</b> In medium mode one gets 7 second to play his
              move. If the one failed to play his move within 7 second then
              opponent gets his turn to play.

              <br><b>Hard Mode:</b> In hard mode one gets 5 second to play his move.
              If the one failed to play his move within 5 second then opponent
              gets his turn to play.
            </p>`,
    buttons: [
      `<a href="https://subhra70.github.io/TicTacToe/">
              <button>Play</button>
            </a>`,
      ``,
    ],
  },
  {
    img: [
      `<img
              src="images/project3_img1.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
      `<img
              src="images/project3_img2.png"
              alt="project-img"
              height="200"
              width="400"
            />`,
    ],
    heading: "<p>Captive Tiger Game</p>",
    description: `<p>
              The Captive Tiger Game played between two players one having two tigers and the other one having twenty dears. 
              Each tiger and dear can move one place from its current position according to the board path. Initially dears are placed in 4 specific positions as a group of five.
              Considering player1 playing with dear and player2 with tigers. Once player1 breaks the group of dear, it can't be came together in a single position.
              Player1 wins when he captured both two tiger such that tigers can not move in any direction. Player2 wins when he kills all the dears.
              When a tiger is considered to be captured and how a tiger can kill a dear already specified in the game rules section.
            </p>`,
    buttons: [
      `<a href="https://subhra70.github.io/Captive-Tiger/">
              <button>Play</button>
            </a>`,
      ``,
    ],
  },
];

/* Default scenario of left part */
let idx = 0;
let objNo = 0;
imgElement.innerHTML = leftPart[0].img[idx];
projName.innerHTML = leftPart[0].heading;
description.innerHTML = leftPart[0].description;
buttons.innerHTML = leftPart[0].buttons[0] + leftPart[0].buttons[1];

document.querySelector(".arrow .leftArrow").addEventListener("click", () => {
  idx++;
  if (idx === leftPart[objNo].img.length) {
    idx = 0;
  }
  imgElement.innerHTML = leftPart[objNo].img[idx];
});
document.querySelector(".arrow .rightArrow").addEventListener("click", () => {
  idx--;
  if (idx === -1) {
    idx = leftPart[objNo].img.length - 1;
  }
  imgElement.innerHTML = leftPart[objNo].img[idx];
});

function leftDisplay(val) {
  objNo = Number(val);
  imgElement.innerHTML = leftPart[objNo].img[idx];
  projName.innerHTML = leftPart[objNo].heading;
  description.innerHTML = leftPart[objNo].description;
  buttons.innerHTML = leftPart[objNo].buttons[0] + leftPart[objNo].buttons[1];
}
