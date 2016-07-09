import {Aurelia} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Programmer Per";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: "./home",
        nav: true,
        title: "Home",
      },
      {
        route: ["per"],
        name: "per",
        moduleId: "./per",
        nav: true,
        title: "Per",
      },
      {
        route: ["portfolio"],
        name: "portfolio",
        moduleId: "./portfolio",
        nav: true,
        title: "Portfolio",

      },
      {
        route: ["social"],
        name: "social",
        moduleId: "./social",
        nav: true,
        title: "Social",
      },
      {
        route: ["skills"],
        name: "skills",
        moduleId: "./skills",
        nav: true,
        title: "Skills",
      },
      {
        route: ["cv"],
        name: "CV",
        moduleId: "./cv",
        nav: true,
        title: "Cv",
      },
      {
        route: ["blog"],
        name: "blog",
        moduleId: "./blog",
        nav: true,
        title: "Blog",
      }
    ]);

    this.router = router;
  }
}