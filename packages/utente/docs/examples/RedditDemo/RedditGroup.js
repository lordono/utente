import React from "react";
import { Card, Menu, MenuItem, Text } from "../../../lib/utente";

export const RedditGroup = () => {
  return (
    <Card variant="shadow" style={{ width: 200 }}>
      <Menu variant="simple">
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
    </Card>
  );
};
