class NavMenu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <aside>
            <nav>
                <p id="menuTitle">MENU</p>
                <div id="navBtnsHolder">
                    <button class="navBtns" onclick="window.location.href='/'">Home</button>
                    <button class="navBtns" onclick="window.location.href='/projects.html'">Projects</button>
                    <button class="navBtns" onclick="window.location.href='/contact.html'">Contact</button>
                </div>
                <p id="socialText">Find me on</p>
                <div id="socials">
                    <a class="socialBtn" href="https://github.com/Saif-Quazi" target="_blank">
                        <i class="fab fa-github socialIcon"></i>
                    </a>
                    <a class="socialBtn" href="https://www.instagram.com/saifquazi0/" target="_blank">
                        <i class="fab fa-instagram socialIcon"></i>
                    </a>
                    <a class="socialBtn" href="/contact" target="_blank">
                        <i class="fas fa-envelope socialIcon"></i>
                    </a>
                </div>
            </nav>
        </aside>
        `;
    }
}

customElements.define('nav-menu', NavMenu);

class MenuBtn extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div id="menuBtnHolder">
            <div class="line" id="top"></div>
            <div class="line" id="middle"></div>
            <div class="line" id="bottom"></div>
        </div>
        `;
        let isAnimating = false;

        document.getElementById('menuBtnHolder').addEventListener('click', () => {
            if (isAnimating) return;
            
            isAnimating = true;
            document.getElementById('menuBtnHolder').classList.toggle('active');
            document.querySelector('aside').classList.toggle('active');
            
            setTimeout(() => {
                isAnimating = false;
            }, 300);
        });
    }
}

customElements.define('menu-btn', MenuBtn);