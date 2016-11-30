/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ShowCaseCard from './ShowCaseCard';

const style = {
  marginLeft: 20,
};

export default class DividerExampleForm extends React.Component {

  render() {
    var showCase =
        <Paper zDepth={2}>
          <TextField hintText="First name" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="Middle name" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="Last name" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="Email address" style={style} underlineShow={false} />
          <Divider />
        </Paper>
      ;
    return(
      <ShowCaseCard
        title="Form divider"
        subtitle="Here, Divider is used to separate TextField components. It defaults to 'full-bleed' (full width)."
        text={showCase}
      />
    )
  }
}
