import React from "react";
// We want to always get from source
import { Text } from "../lib/utente-text";

export default {
  title: "Basic/Text",
  argTypes: {
    variant: {
      control: { type: "select", options: ["Body", "Hero", "Heading"] }
    }
  }
};

export const Body = args => <Text {...args}>Body Text</Text>;

Body.args = {
  variant: "Body"
};

export const Hero = () => <Text variant="Hero">Hero Text</Text>;
export const Heading = () => <Text variant="Heading">Heading Text</Text>;
