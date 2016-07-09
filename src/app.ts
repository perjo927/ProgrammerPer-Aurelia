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
        moduleId: "./cv",
        nav: true,
        title: "Per",
      },
      {
        route: ["portfolio"],
        name: "portfolio",
        moduleId: "./cv",
        nav: true,
        title: "Portfolio",
      },
      {
        route: ["social"],
        name: "social",
        moduleId: "./cv",
        nav: true,
        title: "Social",
      },
      {
        route: ["skills"],
        name: "skills",
        moduleId: "./cv",
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