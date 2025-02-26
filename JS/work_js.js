const left_card = [
  {
    img_link:
      '<img src="images/project1.png" alt="project-img" height="200" width="300">',
    proj_title: "Document Management System",
    description: `
      <p>The system is called "D A S - S T A T", a web-based platform. It has three types of login, each with limited accessibility.

<b>Individual Panel:</b> This panel is for all faculty members of the institute, allowing them to upload their personal details, course information, certificates, achievements, and more. This ensures that the office staff can access the necessary documents when required.

<b>Departmental Panel:</b> This panel is accessible by the Head of the Department (H.O.D.). It includes details such as the number of students along with their caste categories, student results, departmental schedules, and other relevant information. This ensures that all necessary departmental records are readily available.

<b>Admin Panel:</b> This panel is for the Principal of the institute. It provides access to details about individual faculty members and departmental information. The Principal also has the authority to add new faculty members to the system and deactivate accounts, restricting access if needed.

This project was developed to address the urgent challenges faced by the institution and to streamline academic and administrative management efficiently.</p>`,
    buttons: `
      <a href="https://repository.singurgovtcollege.org/">
        <button>Site Link</button>
      </a>
      <a href="">
        <button>Check More</button>
      </a>`,
  },
];

// Set default values on page load
document.addEventListener("DOMContentLoaded", function () {
  displayLeft(0);
});

function displayLeft(val) {
  // Select the elements
  const imgBox = document.querySelector(
    ".main-content .container .left-part .img-box"
  );
  const projName = document.querySelector(
    ".main-content .container .left-part .proj-name"
  );
  const description = document.querySelector(
    ".main-content .container .left-part .description"
  );
  const buttons = document.querySelector(
    ".main-content .container .left-part .buttons"
  );

  // Update the content dynamically
  if (imgBox) imgBox.innerHTML = left_card[val].img_link;
  if (projName) projName.innerHTML = `<p>${left_card[val].proj_title}</p>`;
  if (description) description.innerHTML = left_card[val].description;
  if (buttons) buttons.innerHTML = left_card[val].buttons;
}
