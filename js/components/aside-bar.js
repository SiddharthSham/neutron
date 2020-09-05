import H from '../router/main';

class AsideBar extends HTMLElement {

    constructor() {
        super();


        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = `
        <style>
        aside {
            display: grid;
            place-items: center stretch;
            position: fixed;
            width: 12.5vw;
            background: #eee;
            height: 100vh;
            padding: 1rem 0 0 0.8rem;
            transition: transform 0.4s ease-out;
        }

        a {
            text-decoration: none;
            color: black;
        }

        aside.closed {
            transform: translateX(-100%);
        }
    
        section {
            margin: 0 0 2rem;
        }
    
        ul {
            list-style: none;
            padding: 0;
        }
    
        li {
            cursor: pointer;
            padding: 0.125rem 0 0.125rem 0.5rem;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    
        li:hover {
            background: #ddd;
        }

        span {
            position: absolute;
            right: 1rem;
            top:1rem;
            cursor: pointer;
            border-radius: 50%;
            background: #ddd;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
        }
    </style>
    
    <div>
    <aside id="aside-container">
    <span id="toggle-switch">
        <strong>x</strong>
    </span>
    <div>
    <section>
        <strong>Routes</strong>
            <ul>
                <li><a href="/index.html">Index</a></li>
                <li><a href="/dashboard.html">Dashboard</a></li>
            </ul>
        </section>
        <section>
            <strong>Auth</strong>
            <ul>
                <li><a href="/auth/login.html">Login</a></li>
                <li><a href="/auth/register.html">Register</a></li>
            </ul>
        </section>
        <section>
            <strong>Prep</strong>
            <ul>
                <li><a href="/prep/quiz.html">Quiz</a></li>
                <li><a href="/prep/faq.html">FAQ</a></li>
                <li><a href="/prep/resume-generator.html">Resume Generator</a></li>
                <li><a href="/prep/chatbot.html">Chatbot</a></li>
            </ul>
        </section>
        <section>
            <strong>Scheduler</strong>
            <ul>
                <li><a href="/schedule.html">Timetable</a></li>
            </ul>
        </section>
        <section>
            <strong>Blog</strong>
            <ul>
                <li>Latest articles</li>
                <li>My articles</li>
            </ul>
        </section>
        <div>
    </aside>
    </div>
`;


        this.shadowRoot.querySelector('#toggle-switch')
            .addEventListener('click', e => {
                this.toggleDrawer();
            });

        this.aside = this.shadowRoot.querySelector('#aside-container');

        H.attach(this.shadowRoot.querySelectorAll('a'))

    }

    toggleDrawer() {
        console.log('toggled')
        this.aside.classList.toggle('closed')
    }
}

customElements.define('aside-bar', AsideBar);