export class Cv {
    title: string = "Programmer Per";

    // TODO: Markdown plugin
    about: string = `
    `;

    profile: string = "per.jpg";

    // TODO: data interfaces
    work: any = [
        {
            image: "betsson_logo.png",
            title: "Web Developer",
            subtitle: "2015/16",
            textlist: [
                "Sportsbook",
                "3 Mobile Web Sites",
                "3 Desktop Web Sites"
            ]
        },
        {
            image: "betsson_logo.png",
            title: "Trainee",
            subtitle: "2014",
            textlist: [
                "Scrum Dashboard",
                "Live Casino Lobby Prototype",
                "Game Management Tool"
            ]
        },
        {
            image: "ericsson.png",
            title: "Ericsson",
            subtitle: "2014",
            textlist: [
                "Thesis: Web Surveys",
                "Work Enviroment Web Poll App"
            ]
        },
        {
            image: "liu_logo.png",
            title: "Linkoping Uni",
            subtitle: "2013/14",
            textlist: [
                "Programming Tutor",
                "Web Course Provider"
            ]
        },
        {
            image: "coderowl.png",
            title: "Coach",
            subtitle: "2013/14",
            textlist: [
                "CoderDojo NKPG",
                "Programming Tutoring"
            ]
        },
    ];

    education: any = [
        {
            image: "vote_1.png",
            title: "Innovative Programming",
            subtitle: "120 hp",
            textlist: ["Linkoping University BSc"]
        },
        {
            image: "c_logo.png",
            title: "Information Retrieval",
            subtitle: "15 hp",
            textlist: ["Linkoping University"]
        },
        {
            image: "mupp.gif",
            title: "Music Producer Programme",
            subtitle: "150 hp",
            textlist: ["Linkoping University BSc"]
        },
        {
            image: "liu_logo.png",
            title: "Linguistic Science",
            subtitle: "30 hp",
            textlist: ["Linkoping University"]
        },
        {
            image: "liu_logo.png",
            title: "Media & Communication",
            subtitle: "30hp",
            textlist: ["Linkoping University"]
        }
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

    portfolio: any = {
        projects: [
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
        ],

        competitions: [
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
    };

    contact: any = {
        addresses: {
            mail: "djpjgj [at] gmail.com",
            phone: "SE 76 180 55 94",
            web: "http://programmerper.com"
        },
        presence: [
            {
                title: "GitHub",
                handle: "perjo927",
                image: "github_logo.gif"
            },
            {
                title: "LinkedIn",
                handle: "djpjgj",
                image: "linkedin.png"
            },
            {
                title: "WordPress",
                handle: "programmerper",
                image: "wordpress.png"
            },
            {
                title: "Twitter",
                handle: "programmerper",
                image: "twitter.png"
            },
            {
                title: "SoundCloud",
                handle: "djpjgj",
                image: "soundcloud-logo.png"
            },
            {
                title: "Per's Web",
                handle: "programmerper.com",
                image: "p-logo.png"
            },
        ]
    };

    recommendations: any = [
        {
            title: "Betsson: Bjorg E",
            text: "Always on point, trustworthy and a talented coder, a good team player and easy to work with ... Per rocks! "
        },
        {
            title: "Ericsson: Svante S",
            text: "With his constructive way, Per has helped us to streamline the way we carry out follow-up work ... we give him excellent recommendations"
        },
        {
            title: "Linkoping: Hannah B",
            text: "Per is one of the most driven, hard-working and sharp person I have worked with."
        },
        {
            title: "CoderDojo: Marcus N",
            text: " I love Per's drive! ... He has a great approach to problem solving, finds creative solutions ... and is positive and fun to be with. "
        }
    ];
}