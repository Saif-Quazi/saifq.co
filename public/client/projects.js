const projectHolder = document.getElementById("projectHolder");
let projects = [
  {
    image: "https://placehold.co/250x150",
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com",
    gallery: [
      "https://placehold.co/250x150?text=1",
      "https://placehold.co/250x150?text=2",
      "https://placehold.co/250x150?text=3",
    ],
  },
  {
    image: "https://placehold.co/250x150",
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com",
    gallery: [
      "https://placehold.co/250x150?text=1",
      "https://placehold.co/250x150?text=2",
      "https://placehold.co/250x150?text=3",
    ],
  },
  {
    image: "https://placehold.co/250x150",
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com",
    gallery: [
      "https://placehold.co/250x150?text=1",
      "https://placehold.co/250x150?text=2",
      "https://placehold.co/250x150?text=3",
    ],
  },
  {
    image: "https://placehold.co/250x150",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com",
    gallery: [
      "https://placehold.co/250x150?text=1",
      "https://placehold.co/250x150?text=2",
      "https://placehold.co/250x150?text=3",
    ],
  },
];

function generateProjects() {
  projectHolder.innerHTML = "";
  projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.dataset.projectId = index;
    projectDiv.id = `project-${index}`;
    projectDiv.onclick = () => {
      openModal(index);
    };
    projectDiv.innerHTML = `
        <img class="projImg" src="${project.image}" alt="${project.name}" />
        <div class="projInfo">
          <h3 class="projName">${project.name}</h3>
          <p class="projDesc">${project.description}</p>
        </div>
        `;
    projectHolder.appendChild(projectDiv);
  });
}

generateProjects();

async function openModal(projectID) {
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");

  let project = projects[projectID];

  modal.innerHTML = `
    <div class="closeBtn" onclick="closeModal()">
      <i class="fa-solid fa-xmark"></i>
    </div>
    <div id="projImgSlider">
      <img class="mProjImg" src="${project.gallery[0]}" alt="${project.name}" />
      <img class="mProjImg" src="${project.gallery[1]}" alt="${project.name}" />
      <img class="mProjImg" src="${project.gallery[2]}" alt="${project.name}" />
    </div>
    <div id="mProjInfo">
      <h3 class="mProjName">${project.name}</h3>
      <p class="mProjDesc">${project.description}</p>
      <a class="mProjLink" href="${project.githubRepo}" rel="noopener noreferrer" target="_blank">
        <span>Visit GitHub</span>
        <i class="fa-solid fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
      </a>
    </div>
    `;

  // Show modal and overlay
  modal.style.display = "flex";
  modalOverlay.style.display = "block";

  // Force reflow before adding active class
  void modalOverlay.offsetWidth;

  modalOverlay.classList.add("active");
  modal.classList.add("active");

  const slider = document.getElementById("projImgSlider");
  slider.addEventListener("wheel", (e) => {
    e.preventDefault();
  });
}

async function closeModal() {
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");

  modalOverlay.classList.remove("active");
  modal.classList.remove("active");

  // Wait for transition to complete
  await sleep(0.3);

  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

// Add click listener to overlay to close modal
document.getElementById("modalOverlay").addEventListener("click", closeModal);

async function sleep(seconds) {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
