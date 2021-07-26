import React from "react";
// We want to always get from source
import { Tab, TabPane } from "../lib/utente-tab";

export default {
  title: "Display/Tab",
  component: Tab,
  subcomponents: { TabPane },
  parameters: {
    componentSubtitle: "Tabs make it easy to switch between different views."
  },
  argTypes: {
    theme: {
      control: { type: "select", options: ["light", "dark"] }
    },
    className: {
      control: false
    }
  }
};

export const Primary = args => (
  <div
    style={{
      width: "calc(100% - 6rem)",
      maxWidth: 800,
      height: "calc(100% - 6rem)",
      padding: "3rem",
      backgroundColor: args.theme === "dark" ? "#2c2f33" : "#eeeeee"
    }}
  >
    <Tab {...args}>
      <TabPane
        theme={args.theme}
        key="content1"
        tab={
          <span>
            <i className="fab fa-twitch" />
            &nbsp;Tab 1
          </span>
        }
      >
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
        leo est. Proin in tellus posuere, aliquet magna at, bibendum tortor.
        Fusce scelerisque hendrerit erat, non sodales leo pretium non. Nunc id
        aliquet nunc, vel vestibulum urna. Nulla placerat blandit nunc, vel
        elementum tortor feugiat vitae. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Fusce auctor malesuada
        posuere. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nam laoreet consequat tortor, ac pellentesque turpis
        congue nec. Quisque bibendum metus quis rhoncus semper. Fusce dignissim
        laoreet ligula eu dictum. Nunc rhoncus ultricies ultrices. Suspendisse
        eget dui pulvinar, tincidunt nisi at, auctor odio.
      </TabPane>
      <TabPane theme={args.theme} key="content2" tab="Tab 2">
        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
        leo est. Proin in tellus posuere, aliquet magna at, bibendum tortor.
        Fusce scelerisque hendrerit erat, non sodales leo pretium non. Nunc id
        aliquet nunc, vel vestibulum urna. Nulla placerat blandit nunc, vel
        elementum tortor feugiat vitae. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Fusce auctor malesuada
        posuere. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nam laoreet consequat tortor, ac pellentesque turpis
        congue nec. Quisque bibendum metus quis rhoncus semper. Fusce dignissim
        laoreet ligula eu dictum. Nunc rhoncus ultricies ultrices. Suspendisse
        eget dui pulvinar, tincidunt nisi at, auctor odio.
      </TabPane>
      <TabPane theme={args.theme} key="content3" tab="Tab 3">
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
        leo est. Proin in tellus posuere, aliquet magna at, bibendum tortor.
        Fusce scelerisque hendrerit erat, non sodales leo pretium non. Nunc id
        aliquet nunc, vel vestibulum urna. Nulla placerat blandit nunc, vel
        elementum tortor feugiat vitae. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Fusce auctor malesuada
        posuere. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nam laoreet consequat tortor, ac pellentesque turpis
        congue nec. Quisque bibendum metus quis rhoncus semper. Fusce dignissim
        laoreet ligula eu dictum. Nunc rhoncus ultricies ultrices. Suspendisse
        eget dui pulvinar, tincidunt nisi at, auctor odio.
      </TabPane>
    </Tab>
  </div>
);

Primary.args = {
  theme: "light",
  borderless: false
};
