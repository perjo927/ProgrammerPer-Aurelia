export class Cv {
    title: string = 'Programmer Per';

    // TODO: Markdown plugin
    about: string = `
    > Hello world, I am Per: a programmer.

    Avant-garde is my motto; Literally it means being in the forefront, metaphorically front-end developer.

    The web is my love; be it UX, test automation, server programming or APIs - Per is there, striving for Perfection. I believe in working with a web that doesnâ€™t break, following conventions and standards.

    My markup is semantic, with de-coupled styles, my scripts follow SOLID principles. The code is tested and modular, as I promote Web Components and Continuous Integration. Using TDD from a behaviour-driven perspective, the clients get what they expect. Java-/TypeScript and .NET is my foundation, but not afraid of using other domains. Read more in my blog.

    With a Bachelor degree in Programming (and Music Production) from Linköping university where I also served as a programming tutor, and a thesis work at Ericsson, my career started at Betsson as a trainee, providing the company with some cool tools.

    Now working in a B2B site team at Betsson where we improved our mobile web sites and the desktop sites as well as the sportsbook product.
  `;

    work: any = [
        {
            image: "betsson_logo.png",
            title: "Web Developer",
            year: "2015/16",
            achievements: [
                "Sportsbook",
                "3 Mobile Web Sites",
                "3 Desktop Web Sites"
            ]
        },
        {
            image: "betsson_logo.png",            
            title: "Trainee",
            year: "2014",
            achievements: [
                "Scrum Dashboard",
                "Live Casino Lobby Prototype",
                "Game Management Tool"
            ]
        },
        {
            image: "ericsson.png",
            title: "Ericsson",
            year: "2014",
            achievements: [
                "Thesis: Web Surveys",
                "Work Enviroment Web Poll App"
            ]
        },
        {
            image: "liu_logo.png",
            title: "Linkoping Uni",
            year: "2013/14",
            achievements: [
                "Programming Tutor",
                "Web Course Provider"
            ]
        },
        {
            image: "coderowl.png",
            title: "Coach",
            year: "2014",
            achievements: [
                "CoderDojo NKPG",
                "Programming Tutoring"
            ]
        },
    ];

    skills: any = [
        {
            skill: "",
            level: ""
        }
    ];

    projects: any = [
        {
            title: "",
            description: "",
            image: ""
        }
    ];

    competitions: any = [
        {
            image: "",
            description: ""
        }
    ]

    education: any = [
        {
            img: "",
            title: "",
            points: "",
            description: ""
        }
    ];

    contact: any = [
        {
            mail: "",
            phone: ""
        }
    ];

    presence: any = [
        {
            title: "",
            handle: "",
            image: ""
        }
    ];

    recommendations: any = [
        {
            title: "",
            text: ""
        }
    ];
}
