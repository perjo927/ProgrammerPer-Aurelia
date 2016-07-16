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
        name: "about",
        moduleId: "./cv",
        nav: true,
        title: "Per",
      },
      {
        route: ["work"],
        name: "work",
        moduleId: "./cv",
        nav: true,
        title: "Work",
      },
      {
        route: ["skills"],
        name: "skills",
        moduleId: "./cv",
        nav: true,
        title: "Skills",
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
        name: "contact",
        moduleId: "./cv",
        nav: true,
        title: "Social",
      },
      {
        route: ["blog"],
        name: "blog",
        moduleId: "./blog",
        nav: true,
        title: "Blog",
      },
      {
        route: ["cv"],
        name: "cv",
        moduleId: "./cv-paper",
        nav: true,
        title: "Cv",
      },
    ]);

    this.router = router;
  }

  // TODO: Use custom attribute and/or Aurelia DOM Element injection
  scroll(row) {
    let name = row.config.name;

    this.router.navigateToRoute(name);

    let element = document.querySelectorAll(name)[0];
    if (!!element) {
      element.scrollIntoView();
      // {
      //   behavior: "smooth"
      // });
    }
  }
}