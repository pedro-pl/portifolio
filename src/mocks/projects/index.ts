import Portfolio from '../../assets/portfolio.png';
import TimerPomodoro from '../../assets/timer-pomodoro.png';
import IgniteFeed from '../../assets/ignite-feed.png';
import ToDoList from '../../assets/to-do-list.png';

export const projects = [
    {
        id: 0,
        name: "PORTFOLIO",
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "Styled Components",
            "CSS"
        ],
        img: Portfolio,
        descriptionPt: "Desenvolvi este projeto do zero, utilizando os conhecimentos que adquiri até o momento. Ele poderia ter sido feito de uma maneira bem simples, mas escolhi aplicar tudo o que aprendi para torná-lo mais organizado e legível. Através deste projeto, quero demonstrar minhas habilidades e evolução como desenvolvedor.",
        descriptionEn: "I developed this project from scratch, using all the knowledge I've acquired so far. It could have been done in a much simpler way, but I chose to apply everything I've learned to make it more organized and readable. Through this project, I want to showcase my skills and growth as a developer.",
        linkGit: "https://github.com/pedro-pl/portfolio.git",
        linkWeb: "https://portfolio-eight-flame-68.vercel.app/"
    },
    {
        id: 1,
        name: "TIMER POMODORO",
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "Styled Components",
            "CSS"
        ],
        img: TimerPomodoro,
        descriptionPt: "Cronômetro para gerenciar tarefas através do método pomodor. Projeto criado através do curso sobre React da Rocketseat.",
        descriptionEn: "Timer to manage tasks using the Pomodoro technique. Project created through Rocketseat's React course.",
        linkGit: "https://github.com/pedro-pl/timer-pomodoro.git",
        linkWeb: "https://timer-pomodoro-omega.vercel.app/"
    },
    {
        id: 2,
        name: "TO DO LIST",
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "CSS"
        ],
        img: ToDoList,
        descriptionPt: "Este projeto é uma aplicação de lista de tarefas desenvolvida em React. Permite ao usuário criar, excluir e marcar tarefas como concluídas. Também utiliza gerenciamento de estado com React Hooks.",
        descriptionEn: "This project is a To-do List application developed using React. It allows users to create, delete, and mark tasks as completed. It also includes state management with React Hooks.",
        linkGit: "https://github.com/pedro-pl/to-do-list.git",
        linkWeb: "https://to-do-list-iota-beige.vercel.app/"
    },
    {
        id: 3,
        name: "IGNITE FEED",
        skills: [
            "React",
            "HTML",
            "JavaScript",
            "CSS"
        ],
        img: IgniteFeed,
        descriptionPt: "Projeto feito através do curso de introdução ao React pela Rocketseat. Projeto criado com o intuito de por em prática conhecimentos fundamentais para o desenvolvimento utilizando React.",
        descriptionEn: "Project built through Rocketseat's introductory React course. Created with the goal of putting into practice fundamental knowledge for development using React.",
        linkGit: "https://github.com/pedro-pl/IgniteFeed.git",
        linkWeb: "https://ignite-feed-silk-omega.vercel.app/"
    }
]