import { Card } from "./card";
import { CardList } from "./card-list";
import { Portfolio } from "./portfolio";
import { Contact } from "./contact";

import {autoinject} from "aurelia-framework";

@autoinject
export class Cv {
    title: string = "Programmer Per";

    // TODO: Markdown plugin
    about: string = `
    `;

    profile: string = "per.jpg";

    work: CardList = [
        {
            image: "betsson_logo.png",
            title: "Web Developer",
            subtitle: "2015/16",
            textlist: [
                "Sportsbook",
                "3 Mobile Web Sites",
                "3 Desktop Web Sites"
            ],
            link: ""

        },
        {
            image: "betsson_logo.png",
            title: "Trainee",
            subtitle: "2014",
            textlist: [
                "Scrum Dashboard",
                "Live Casino Lobby Prototype",
                "Game Management Tool"
            ],
            link: ""
        },
        {
            image: "ericsson.png",
            title: "Ericsson",
            subtitle: "2014",
            textlist: [
                "Thesis: Web Surveys",
                "Work Enviroment Web Poll App"
            ],
            link: ""
        },
        {
            image: "liu_logo.png",
            title: "Linkoping Uni",
            subtitle: "2013/14",
            textlist: [
                "Programming Tutor",
                "Web Course Provider"
            ],
            link: ""
        },
        {
            image: "coderowl.png",
            title: "Coach",
            subtitle: "2013/14",
            textlist: [
                "CoderDojo NKPG",
                "Programming Tutoring"
            ],
            link: ""
        },
    ];

    education: CardList = [
        {
            image: "vote_1.png",
            title: "Innovative Programming",
            subtitle: "120 hp",
            textlist: ["Linkoping University BSc"],
            link: ""
        },
        {
            image: "c_logo.png",
            title: "Information Retrieval",
            subtitle: "15 hp",
            textlist: ["Linkoping University"],
            link: ""
        },
        {
            image: "mupp.gif",
            title: "Music Producer Programme",
            subtitle: "150 hp",
            textlist: ["Linkoping University BSc"],
            link: ""
        },
        {
            image: "liu_logo.png",
            title: "Linguistic Science",
            subtitle: "30 hp",
            textlist: ["Linkoping University"],
            link: ""
        },
        {
            image: "liu_logo.png",
            title: "Media & Communication",
            subtitle: "30hp",
            textlist: ["Linkoping University"],
            link: ""
        }
    ];

    portfolio: Portfolio = {
        projects: [
            {
                title: "This CV",
                subtitle: "",
                textlist: ["This app, made with Aurelia"],
                image: "qr-pp-aurelia.png",
                link: ""
            },
            {
                title: "CSS Guidelines",
                subtitle: "",
                textlist: ["My CSS architecture philosophy"],
                image: "qr-css.png",
                link: ""
            },
            {
                title: "CasinoMetropolMobile",
                subtitle: "",
                textlist: ["Casino site co-produced @Betsson"],
                image: "qr-cmet.png",
                link: "https://casino.casinometropolmobile.com/tr/#/"
            },
            {
                title: "<3",
                subtitle: "",
                textlist: ["My own programmming language"],
                image: "qr-three.png",
                link: ""
            },
            {
                title: "Ericsson Web Poll",
                subtitle: "",
                textlist: ["Web survey admin for Ericsson"],
                image: "qr-eson-rec.png",
                link: "../static/ericsson-rec.jpg"
            },
            {
                title: "Angular2 & ASP.NET",
                subtitle: "",
                textlist: ["Research on Angular2/ASP.NET RC"],
                image: "qr-ng2-aspnet.png",
                link: ""
            },
            {
                title: "Yellow D. Brewery",
                subtitle: "",
                textlist: ["Web site made for NKPG brewery"],
                image: "qr-ydb.png",
                link: ""
            },
            {
                title: "hWorld",
                subtitle: "",
                textlist: ["Edu game improved for LiU"],
                image: "qr-hworld.png",
                link: ""
            },
            {
                title: "East Sweden Hack",
                subtitle: "",
                textlist: ["Educational Quiz Hack"],
                image: "qr-east-hack.png",
                link: ""
            },
            {
                title: "PREYBIRD.com",
                subtitle: "",
                textlist: ["My own music"],
                image: "qr-preybird.png",
                link: ""
            },
        ],

        competitions: [
            {
                image: "money-conf-2016.png",
                subtitle: "",
                textlist: ["Winner: Open Source Contribution competition"],
                title: "Moneyconf 2016",
                link: ""
            },
            {
                image: "web_summit_logo.jpeg",
                subtitle: "",
                textlist: ["Winner: Open Source Contribution competition"],
                title: "Web Summit 2016",
                link: ""
            },
            {
                image: "east_hack.jpg",
                subtitle: "",
                textlist: ["Finalist: of"],
                title: "East Sweden Hack 2014",
                link: ""
            },
            {
                image: "icpc_logo.png",
                subtitle: "",
                textlist: ["Participant: of"],
                title: "Nordic Collegiate Programming Contest 2013&14",
                link: ""
            }
        ]
    };

    contact: Contact = {
        address: {
            mail: "djpjgj [at] gmail.com",
            phone: "SE 76 180 55 94",
            web: "http://programmerper.com"
        },
        presence: [
            {
                title: "GitHub",
                subtitle: "perjo927",
                image: "github_logo.gif",
                link: "",
                textlist: []
            },
            {
                title: "LinkedIn",
                subtitle: "djpjgj",
                image: "linkedin.png",
                link: "",
                textlist: []
            },
            {
                title: "WordPress",
                subtitle: "programmerper",
                image: "wordpress.png",
                link: "",
                textlist: []
            },
            {
                title: "Twitter",
                subtitle: "programmerper",
                image: "twitter.png",
                link: "",
                textlist: []
            },
            {
                title: "SoundCloud",
                subtitle: "djpjgj",
                image: "soundcloud-logo.png",
                link: "",
                textlist: []
            },
            {
                title: "Per's Web",
                subtitle: "programmerper.com",
                image: "p-logo.png",
                link: "",
                textlist: []
            },
        ]
    };

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
            title: "Linkoping Uni: Hannah B",
            text: "Per is one of the most driven, hard-working and sharp person I have worked with."
        },
        {
            title: "CoderDojo: Marcus N",
            text: " I love Per's drive! ... He has a great approach to problem solving, finds creative solutions ... and is positive and fun to be with. "
        }
    ];

    // TODO : scroll into view
    constructor(private element: HTMLDivElement) {
        console.log("CV", this.element);
        // this.element.style.backgroundColor = 'red';
        // this.element.scrollIntoView(false);
    }

}