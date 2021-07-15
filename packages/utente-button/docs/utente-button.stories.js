import React from "react";
// We want to always get from source
import { Button } from "../lib/utente-button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    componentSubtitle:
      "Displays a graphical control element that provides the user a simple way to trigger an event"
  }
};

export const Primary = () => <Button>Hello Button</Button>;
