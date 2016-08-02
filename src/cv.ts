import { Card } from "./card";
import { CardList } from "./card-list";
import { Portfolio } from "./portfolio";
import { Contact } from "./contact";

declare var require: any;

export class Cv {
    title: string = "Programmer Per";

    // TODO: Markdown plugin
    about: string = `
    `;

    profile: string = require("../static/per.jpg");

    work: CardList = [
        {
            image: require("../static/betsson_logo.png"),
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
            image: require("../static/betsson_logo.png"),
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
            image: require("../static/ericsson.png"),
            title: "Ericsson",
            subtitle: "2014",
            textlist: [
                "Thesis: Web Surveys",
                "Work Enviroment Web Poll App"
            ],
            link: ""
        },
        {
            image: require("../static/liu_logo.png"),
            title: "Linkoping Uni",
            subtitle: "2013/14",
            textlist: [
                "Programming Tutor",
                "Web Course Provider"
            ],
            link: ""
        },
        {
            image: require("../static/coderowl.png"),
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
            image: require("../static/vote_1.png"),
            title: "Innovative Programming",
            subtitle: "120 hp",
            textlist: ["Linkoping University BSc"],
            link: ""
        },
        {
            image: require("../static/c_logo.png"),
            title: "Information Retrieval",
            subtitle: "15 hp",
            textlist: ["Linkoping University"],
            link: ""
        },
        {
            image: require("../static/mupp.gif"),
            title: "Music Producer Programme",
            subtitle: "150 hp",
            textlist: ["Linkoping University BSc"],
            link: ""
        },
        {
            image: require("../static/liu_logo.png"),
            title: "Linguistic Science",
            subtitle: "30 hp",
            textlist: ["Linkoping University"],
            link: ""
        },
        {
            image: require("../static/liu_logo.png"),
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
                image: require("../static/qr-pp-aurelia.png"),
                link: "https://github.com/perjo927/ProgrammerPer-Aurelia"
            },
            {
                title: "CSS Guidelines",
                subtitle: "",
                textlist: ["My CSS architecture philosophy"],
                image: require("../static/qr-css.png"),
                link: "https://programmerper.wordpress.com/2016/05/21/approaching-css/"
            },
            {
                title: "CasinoMetropolMobile",
                subtitle: "",
                textlist: ["Casino site co-produced @Betsson"],
                image: require("../static/qr-cmet.png"),
                link: "https://casino.casinometropolmobile.com/tr/#/"
            },
            {
                title: "<3",
                subtitle: "",
                textlist: ["My own programmming language"],
                image: require("../static/qr-three.png"),
                link: "https://github.com/perjo927/LessThanThree"
            },
            {
                title: "Ericsson Web Poll",
                subtitle: "",
                textlist: ["Web survey admin for Ericsson"],
                image: require("../static/qr-eson-rec.png"),
                link: ".../static/ericsson-rec.jpg"
            },
            {
                title: "Angular2 & ASP.NET",
                subtitle: "",
                textlist: ["Research on Angular2/ASP.NET RC"],
                image: require("../static/qr-ng2-aspnet.png"),
                link: "https://github.com/perjo927/angular2-preybird"
            },
            {
                title: "Yellow D. Brewery",
                subtitle: "",
                textlist: ["Web site made for NKPG brewery"],
                image: require("../static/qr-ydb.png"),
                link: "https://ydb.herokuapp.com/"
            },
            {
                title: "hWorld",
                subtitle: "",
                textlist: ["Edu game improved for LiU"],
                image: require("../static/qr-hworld.png"),
                link: "https://github.com/perjo927/hWorld"
            },
            {
                title: "East Sweden Hack",
                subtitle: "",
                textlist: ["Educational Quiz Hack"],
                image: require("../static/qr-east-hack.png"),
                link: "http://eastswedenhack.se/"
            },
            {
                title: "PREYBIRD.com",
                subtitle: "",
                textlist: ["My own music"],
                image: require("../static/qr-preybird.png"),
                link: "http://preybird.com/"
            }
        ],

        competitions: [
            {
                image: require("../static/money-conf-2016.png"),
                subtitle: "",
                textlist: ["Winner: Open Source Contribution competition"],
                title: "Moneyconf 2016",
                link: "https://moneyconf.com/"
            },
            {
                image: require("../static/web_summit_logo.jpg"),
                subtitle: "",
                textlist: ["Winner: Open Source Contribution competition"],
                title: "Web Summit 2016",
                link: "https://websummit.net/"
            },
            {
                image: require("../static/east_hack.jpg"),
                subtitle: "",
                textlist: ["Finalist: of"],
                title: "East Sweden Hack 2014",
                link: "http://eastswedenhack.se/"
            },
            {
                image: require("../static/icpc_logo.png"),
                subtitle: "",
                textlist: ["Participant: of"],
                title: "Nordic Collegiate Programming Contest 2013&14",
                link: "https://ncpc.idi.ntnu.no/"
            }
        ]
    };

    contact: Contact = {
        address: {
            mail: "djpjgj [at] gmail.com",
            phone: "0046 ASK-ME",
            web: "http://www.programmerper.com"
        },
        presence: [
            {
                title: "perjo927",
                subtitle: "",
                image: require("../static/github_logo.gif"),
                link: "https://github.com/perjo927",
                textlist: ["GitHub: "]
            },
            {
                title: "djpjgj",
                subtitle: "",
                image: require("../static/linkedin.png"),
                link: "https://www.linkedin.com/in/djpjgj",
                textlist: ["LinkedIn: "]
            },
            {
                title: "programmerper",
                subtitle: "",
                image: require("../static/wordpress.png"),
                link: "https://programmerper.wordpress.com/",
                textlist: ["WordPress: "]
            },
            {
                title: "programmerper",
                subtitle: "",
                image: require("../static/twitter.png"),
                link: "https://twitter.com/ProgrammerPer",
                textlist: ["Twitter: "]
            },
            {
                title: "djpjgj",
                subtitle: "",
                image: require("../static/soundcloud-logo.png"),
                link: "https://soundcloud.com/djpjgj",
                textlist: ["SoundCloud: "]
            },
            {
                title: "programmerper.com",
                subtitle: "",
                image: require("../static/p-logo.png"),
                link: "http://programmerper.com/",
                textlist: ["Per's Web: "]
            }
        ]
    };

    skills: any = {
        images: [
            require("../static/ghost_1.gif"),
            require("../static/ghost_2.gif"),
            require("../static/ghost_3.gif"),
            require("../static/ghost_4.gif"),
            require("../static/ghost_5.gif")
        ],
        lists : [
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
            title: "Linkoping Uni: Hannah B",
            text: "Per is one of the most driven, hard-working and sharp person I have worked with."
        },
        {
            title: "CoderDojo: Marcus N",
            text: " I love Per's drive! ... He has a great approach to problem solving, finds creative solutions ... and is positive and fun to be with. "
        }
    ];

    myName: string;
    myElement: any;

    activate(params, routeConfig) {
        this.myName = routeConfig.name;
    }

    // TODO: Use custom attribute and/or Aurelia DOM Element injection
    attached() {
        this.myElement = document.querySelectorAll(this.myName)[0];
        this.myElement.scrollIntoView();
    }
}