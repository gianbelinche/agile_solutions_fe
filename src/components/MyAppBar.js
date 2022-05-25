import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ width: "200px" }}>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
        </div>
        <Avatar className={classes.red}>{""}</Avatar>
        <Typography variant="h6" className={classes.title}>
          User Name
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Sales Report
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
