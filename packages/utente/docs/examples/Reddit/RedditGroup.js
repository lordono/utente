import React from "react";
import { Card } from "@lieinapril/utente-card";
import { Menu, MenuItem } from "@lieinapril/utente-menu";
import { Space } from "@lieinapril/utente-space";

export const RedditGroup = () => {
  return (
    <Card
      variant="shadow"
      style={{ height: 49, width: 550 }}
      contentStyle={{ height: "100%", width: "100%" }}
      padded={false}
    >
      <Space full justify="center">
        <Menu variant="simple" direction="horizontal">
          <MenuItem key="hot" icon={<i className="fas fa-fire" />}>
            Hot
          </MenuItem>
          <MenuItem key="new" icon={<i className="fas fa-plus-square" />}>
            New
          </MenuItem>
          <MenuItem key="rising" icon={<i className="fas fa-asterisk" />}>
            Rising
          </MenuItem>
          <MenuItem key="top" icon={<i className="fas fa-trophy" />}>
            Top
          </MenuItem>
          <MenuItem key="favourite" icon={<i className="fas fa-heart" />}>
            Favourites
          </MenuItem>
        </Menu>
      </Space>
    </Card>
  );
};
