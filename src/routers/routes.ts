export enum PartRoutes {
  Crawler = "/crawler",
  CleaningList = "/cleaning-list",
}

export enum Routes {
  NotFound = "*",
  Home = "/home",
  About = "/about",
  CrawlerCleaningList = PartRoutes.Crawler + PartRoutes.CleaningList,
}
