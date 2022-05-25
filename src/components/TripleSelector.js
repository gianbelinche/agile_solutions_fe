import React from "react";
import Selector from "./Selector";
import Grid from "@material-ui/core/Grid";

export default function TripleSelector(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Selector
        title={props.title1}
        store={props.store1}
        onChange={props.onChange1}
        elements={props.elements1}
      />
      <Selector
        title={props.title2}
        store={props.store2}
        onChange={props.onChange2}
        elements={props.elements2}
      />
      <Selector
        title={props.title3}
        store={props.store3}
        onChange={props.onChange3}
        elements={props.elements3}
      />
    </Grid>
  );
}
