import React from "react";

import { Timeline, TimelineItem } from "../lib/utente-timeline";
import { Theme } from "@lieinapril/utente-theme";
import { Space } from "@lieinapril/utente-space";

export default {
  title: "Display/Timeline",
  component: Timeline,
  subcomponents: { TimelineItem },
  parameters: {
    componentSubtitle: "A versatile menu for navigation."
  },
  argTypes: {
    variant: {
      options: ["fill", "shadow", "border"],
      control: { type: "select" }
    },
    className: {
      control: false
    },
    direction: {
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
      backgroundColor: "#eeeeee"
    }}
  >
    <Space colored style={{ padding: 20 }}>
      <Timeline {...args}>
        <TimelineItem>Create a services site 2015-09-01</TimelineItem>
        <TimelineItem
          color="danger"
          icon={<i className="fas fa-calendar-minus" />}
        >
          Solve initial network problems 2015-09-01
        </TimelineItem>
        <TimelineItem color="warning">
          <Space
            direction="vertical"
            align={args.mode === "right" ? "end" : "start"}
          >
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo
              voluptatem recusandae officiis consequuntur mollitia quidem eos
              ipsa sapiente facilis nemo laboriosam, cupiditate vitae
              voluptatibus aspernatur provident est error id?
            </span>
            <img
              style={{ width: 200, objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="food"
            />
          </Space>
        </TimelineItem>
        <TimelineItem color="muted">
          Network problems being solved 2015-09-01
        </TimelineItem>
      </Timeline>
    </Space>
    <Theme color="#2c2f33" intensity={0.3}>
      <Space colored style={{ padding: 20 }}>
        <Timeline {...args}>
          <TimelineItem>Create a services site 2015-09-01</TimelineItem>
          <TimelineItem
            color="danger"
            icon={<i className="fas fa-calendar-minus" />}
          >
            Solve initial network problems 2015-09-01
          </TimelineItem>
          <TimelineItem color="warning">
            <Space
              direction="vertical"
              align={args.mode === "right" ? "end" : "start"}
            >
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quo voluptatem recusandae officiis consequuntur mollitia quidem
                eos ipsa sapiente facilis nemo laboriosam, cupiditate vitae
                voluptatibus aspernatur provident est error id?
              </span>
              <img
                style={{ width: 200, objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="food"
              />
            </Space>
          </TimelineItem>
          <TimelineItem color="muted">
            Network problems being solved 2015-09-01
          </TimelineItem>
        </Timeline>
      </Space>
    </Theme>
  </div>
);

Primary.args = {
  variant: "shadow",
  size: 14,
  mode: "right"
};
