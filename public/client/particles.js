const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

const config = {
  particleCount: 40,
  size: 1,
  minSpeed: 0.5,
  maxSpeed: 1,
  directionAngle: -90,
  directionSpread: 30,
  directionStrength: 0.6,
};

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = config.size;

    const angleInRadians = (config.directionAngle * Math.PI) / 180;
    const spreadInRadians = (config.directionSpread * Math.PI) / 180;
    const randomSpread = (Math.random() - 0.5) * spreadInRadians;
    const finalAngle = angleInRadians + randomSpread;

    const speed =
      config.minSpeed + Math.random() * (config.maxSpeed - config.minSpeed);

    const directionalX =
      Math.cos(finalAngle) * speed * config.directionStrength;
    const directionalY =
      Math.sin(finalAngle) * speed * config.directionStrength;

    const driftX =
      (Math.random() - 0.5) * speed * (1 - config.directionStrength);
    const driftY =
      (Math.random() - 0.5) * speed * (1 - config.directionStrength);

    this.speedX = directionalX + driftX;
    this.speedY = directionalY + driftY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;

    this.speedX += (Math.random() - 0.5) * 0.01;
    this.speedY += (Math.random() - 0.5) * 0.01;
    this.speedX = Math.max(
      Math.min(this.speedX, config.maxSpeed),
      -config.maxSpeed,
    );
    this.speedY = Math.max(
      Math.min(this.speedY, config.maxSpeed),
      -config.maxSpeed,
    );
  }

  draw() {
    ctx.fillStyle = "#ccc";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < config.particleCount; i++) {
    particlesArray.push(new Particle());
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "1";
  canvas.style.pointerEvents = "none";
  canvas.style.transform = "";
  canvas.style.transformOrigin = "";
  initParticles();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
animate();
