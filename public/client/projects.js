const projectHolder = document.getElementById("projectHolder");
let projects = [
  {
    image: "https://placehold.co/300x150",
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com"
  },
  {
    image: "https://placehold.co/300x150",
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com"
  },
  {
    image: "https://placehold.co/300x150",
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com"
  
  },
  {
    image: "https://placehold.co/300x150",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    githubRepo: "https://github.com/Saif-Quazi",
    demoLink: "https://demo.com"
  },
];

function generateProjects() {
  projectHolder.innerHTML = "";
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <img class="projImg" src="${project.image}" alt="${project.name}" />
        <div class="projInfo">
          <h3 class="projName">${project.name}</h3>
          <p class="projDesc">${project.description}</p>
          <a class="projLink" href="${project.githubRepo}" rel="noopener noreferrer" target="_blank">
            <span>Visit GitHub</span>
            <i class="fa-solid fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
          </a>
        </div>
        `;
    projectHolder.appendChild(projectDiv);
  });
}

generateProjects();
