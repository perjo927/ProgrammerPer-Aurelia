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

    profile: string = "per.jpg";

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
            year: "2013/14",
            achievements: [
                "CoderDojo NKPG",
                "Programming Tutoring"
            ]
        },
    ];

    skills: any = [
        {
            list: [
                {
                    skill: "JavaScript",
                    level: 5
                },
                {
                    skill: "TypeScript",
                    level: 4
                },
                {
                    skill: "TDD",
                    level: 3
                },
                {
                    skill: "MongoDB",
                    level: 2
                },
                {
                    skill: "SVN",
                    level: 1
                }
            ]
        },
        {
            list: [
                {
                    skill: "HTML/CSS",
                    level: 5
                },
                {
                    skill: "Git / GitFlow",
                    level: 4
                },
                {
                    skill: "Continous Integration",
                    level: 3
                },
                {
                    skill: "Python",
                    level: 2
                },
                {
                    skill: "IIS",
                    level: 1
                }
            ]
        },
        {
            list: [
                {
                    skill: "Angular",
                    level: 5
                },
                {
                    skill: ".NET",
                    level: 4
                },
                {
                    skill: "Node.js",
                    level: 3
                },
                {
                    skill: "Ruby",
                    level: 2
                },
                {
                    skill: "Hardware",
                    level: 1
                }
            ]
        },
        {
            list: [
                {
                    skill: "Meteor",
                    level: 5
                },
                {
                    skill: "C#",
                    level: 4
                },
                {
                    skill: "Selenium",
                    level: 3
                },
                {
                    skill: "C++",
                    level: 2
                },
                {
                    skill: "SQL",
                    level: 1
                }
            ]
        }
    ];

    projects: any = [
        {
            title: "This CV",
            description: "This app, made with Aurelia",
            image: "qr-pp-aurelia.png",
            link: ""
        },
        {
            title: "CSS Guidelines",
            description: "My CSS architecture philosophy",
            image: "qr-css.png",
            link: ""
        },
        {
            title: "CasinoMetropolMobile",
            description: "Casino site co-produced @Betsson",
            image: "qr-cmet.png",
            link: "https://casino.casinometropolmobile.com/tr/#/"
        },
        {
            title: "<3",
            description: "My own programmming language",
            image: "qr-three.png",
            link: ""
        },
        {
            title: "Ericsson Web Poll",
            description: "Web survey admin for Ericsson",
            image: "qr-eson-rec.png",
            link: "../static/ericsson-rec.jpg"
        },
        {
            title: "Angular2 & ASP.NET",
            description: "Research on Angular2/ASP.NET RC",
            image: "qr-ng2-aspnet.png",
            link: ""
        },
        {
            title: "Yellow D. Brewery",
            description: "Web site made for NKPG brewery",
            image: "qr-ydb.png",
            link: ""
        },
        {
            title: "hWorld",
            description: "Edu game improved for LiU",
            image: "qr-hworld.png",
            link: ""
        },
        {
            title: "East Sweden Hack",
            description: "Educational Quiz Hack",
            image: "qr-east-hack.png",
            link: ""
        },
        {
            title: "PREYBIRD.com",
            description: "My own music",
            image: "qr-preybird.png",
            link: ""
        },
    ];

    competitions: any = [
        {
            image: "money-conf-2016.png",
            description: "Winner: Open Source Contribution competition",
            emphasis: "Moneyconf 2016"
        },
        {
            image: "web_summit_logo.jpeg",
            description: "Winner: Open Source Contribution competition",
            emphasis: "Web Summit 2016"
        },
        {
            image: "east_hack.jpg",
            description: "Finalist: of",
            emphasis: "East Sweden Hack 2014"
        },
        {
            image: "icpc_logo.png",
            description: "Participant: of",
            emphasis: "Nordic Collegiate Programming Contest 2013&14"
        }
    ]

    education: any = [
        {
            image: "vote_1.png",
            title: "Innovative Programming",
            points: "120 hp",
            description: "Linkoping University BSc"
        },
        {
            image: "c_logo.png",
            title: "Information Retrieval",
            points: "15 hp",
            description: "Linkoping University"
        },
        {
            image: "mupp.gif",
            title: "Music Producer Programme",
            points: "150 hp",
            description: "Linkoping University BSc"
        },
        {
            image: "liu_logo.png",
            title: "Linguistic Science",
            points: "30 hp",
            description: "Linkoping University"
        },
        {
            image: "liu_logo.png",
            title: "Media & Communication",
            points: "30hp",
            description: "Linkoping University"
        }
    ];

    contact: any = [
        {
            mail: "djpjgj [at] gmail.com",
            phone: "SE 76 180 55 94",
            web: "http://programmerper.com"
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
