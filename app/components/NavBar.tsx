import Link from "next/link";
import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/createQuest">
          Create Quest
        </Button>
        <Button color="inherit" component={Link} href="/Quests">
          Quests
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
