import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Selector(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          style={{ marginRight: "10px" }}
        >
          {props.title + ": "}
        </Typography>
        <Select value={props.store} onChange={props.onChange} displayEmpty>
          <MenuItem value="" disabled>
            {"Elegir " + props.title}
          </MenuItem>
          {props.elements.map((variant) => (
            <MenuItem value={variant}>{variant}</MenuItem>
          ))}
        </Select>
      </Grid>
    </FormControl>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
