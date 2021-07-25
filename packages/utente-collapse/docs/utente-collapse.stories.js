import React from "react";
// We want to always get from source
import { Collapse, Panel } from "../lib/utente-collapse";

export default {
  title: "Display/Collapse",
  component: Collapse,
  parameters: {
    componentSubtitle: "A content area which can be collapsed and expanded."
  },
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: { type: "select" }
    },
    className: { control: false },
    defaultActiveKey: { control: false }
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
    <Collapse {...args}>
      <Panel theme={args.theme} key="content1" header="This is panel header 1">
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
      </Panel>
      <Panel theme={args.theme} key="content2" header="This is panel header 2">
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
      </Panel>
      <Panel theme={args.theme} key="content3" header="This is panel header 1">
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
      </Panel>
    </Collapse>
  </div>
);

Primary.args = {
  theme: "light",
  accordion: false,
  defaultActiveKey: []
};
