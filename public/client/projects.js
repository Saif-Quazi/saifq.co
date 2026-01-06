const projectHolder = document.getElementById("projectHolder");
let projects = [
  {
    image: "https://placehold.co/1920x1080",
    name: "Saifq.co | Personal Portfolio Site",
    description:
      "A personal portfolio site built using HTML, CSS, and JavaScript.",
    githubRepo: "https://github.com/Saif-Quazi/saifq.co/",
    demoLink: "https://saifq.co/",
    isDemo: false,
  },
  {
    image: "https://placehold.co/250x150",
    name: "Slcuts.co | Editing Agency",
    description:
      "An Editing and thumbnail design agency focussing on content creators on YouTube.",
    githubRepo: "https://github.com/Saif-Quazi/slcuts/",
    demoLink: "https://slcuts.co/",
    isDemo: false,
  },
  {
    image: "https://placehold.co/250x150",
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://example.com",
    isDemo: true,
  },
  {
    image: "https://placehold.co/250x150",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://example.com",
    isDemo: true,
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
        <div class="infoTag" style="background-color: ${project.isDemo ? "hsl(250, 80%, 50%)" : project.name !== "Saifq.co | Personal Portfolio Site" ? "hsl(170, 85%, 35%)" : "hsl(135, 20%, 50%)"}">
          <span>${project.isDemo ? "Personal" : project.name !== "Saifq.co | Personal Portfolio Site" ? "Real Client" : "This Site!"}</span>
        </div>
        <img class="projImg" src="${project.image}" alt="${project.name}" />
        <div class="projInfo">
          <h3 class="projName">${project.name}</h3>
          <p class="projDesc">${project.description.length > 65 ? project.description.slice(0, 65) + "..." : project.description}</p>
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
    <div id="mImgHolder">
      <img id="mProjImg" src="${project.image}" alt="${project.name}" />
    </div>
    <div id="mProjInfo">
      <h3 class="mProjName">${project.name}</h3>
      <p class="mProjDesc">${project.description}</p>
      <div id="mLinks">
        <a class="mProjLink" href="${project.githubRepo}" rel="noopener noreferrer" target="_blank">
          <span>GitHub</span>
          <i class="fa-solid fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
        </a>
        <a class="mProjLink" href="${project.demoLink}" rel="noopener noreferrer" target="_blank">
          <span>${project.isDemo ? "Demo" : "Site"}</span>
          <i class="fa-solid fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
        </a>
      </div>
    </div>
    `;

  modal.style.display = "flex";
  modalOverlay.style.display = "block";

  void modalOverlay.offsetWidth;

  modalOverlay.classList.add("active");
  modal.classList.add("active");
}

async function closeModal() {
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");

  modalOverlay.classList.remove("active");
  modal.classList.remove("active");

  await sleep(0.3);

  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

document.getElementById("modalOverlay").addEventListener("click", closeModal);

async function sleep(seconds) {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
