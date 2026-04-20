const projectHolder = document.getElementById("projectHolder");
let projects = [
  {
    image: "assets/projects/saifq.co.png",
    name: "Saifq.co | Personal Portfolio Site",
    description:
      "A personal portfolio site built using HTML, CSS, and JavaScript.",
    githubRepo: "https://github.com/Saif-Quazi/saifq.co/",
    demoLink: "https://saifq.co/",
    isDemo: false,
  },
  {
    image: "assets/projects/slcuts.co.png",
    name: "SLCuts.co | Editing Agency",
    description:
      "YouTube growth and management services",
    githubRepo: "https://github.com/Saif-Quazi/slcuts/",
    demoLink: "https://slcuts.co/",
    isDemo: false,
  },
  {
    image: "assets/projects/svgloaders.png",
    name: "SVG Loaders API",
    description:
      "A minimal SVG loader API similar to placehold.co that serves animated SVG loaders via edge functions.",
    githubRepo: "https://github.com/Saif-Quazi/SVGLoaders",
    demoLink: "https://svgloader.netlify.app/",
    isDemo: true,
  },
  {
    image: "assets/projects/systemmonitor.png",
    name: "System Monitor | Widget",
    description:
      "A lightweight and minimal Python desktop widget that displays real-time CPU, RAM, and GPU usage." < br > "(windows only!)",
    githubRepo: "https://github.com/Saif-Quazi/SystemMonitor",
    demoLink: "https://github.com/Saif-Quazi/SystemMonitor/releases/tag/v1.0.0",
    isDemo: true,
  },
  {
    image: "assets/projects/timezones.png",
    name: "TimeZones | Widget",
    description:
      "A simple timezone widget made with python." < br > "Display up to 9 cities at once with auto-grid system!" < br > "Customize which cities and what order from settings window",
    githubRepo: "https://github.com/Saif-Quazi/TimeZones",
    demoLink: "https://github.com/Saif-Quazi/TimeZones/releases/tag/v1.1.1",
    isDemo: true,
  },
  // Example Project Template:
  // {
  //   image: "https://placehold.co/250x150",
  //   name: "Project --",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   githubRepo: "https://github.com/Saif-Quazi",
  //   demoLink: "https://saifq.co",
  //   isDemo: true,
  // }
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
