/**
 * Created by wuxianzhi on 2024/07/30.
 */

import { Page } from "./models/page";
import Main from "./views/main";

const About = () => (
  <Page.Provider>
    <Main />
  </Page.Provider>
);

export default About;
