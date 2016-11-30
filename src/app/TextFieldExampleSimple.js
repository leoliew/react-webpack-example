import React from 'react';
import TextField from 'material-ui/TextField';
import ShowCaseCard from './ShowCaseCard';

export default class TextFieldExampleSimple extends React.Component {


  render() {
    var showCase =
        <div>
          <TextField
            hintText="Hint Text"
          /><br />
          <br />
          <TextField
            hintText="The hint text can be as long as you want, it will wrap."
          /><br />
          <TextField
            id="text-field-default"
            defaultValue="Default Value"
          /><br />
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          /><br />
          <TextField
            defaultValue="Default Value"
            floatingLabelText="Floating Label Text"
          /><br />
          <TextField
            hintText="Hint Text"
            floatingLabelText="Fixed Floating Label Text"
            floatingLabelFixed={true}
          /><br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          /><br />
          <TextField
            hintText="MultiLine with rows: 2 and rowsMax: 4"
            multiLine={true}
            rows={2}
            rowsMax={4}
          /><br />
          <TextField
            hintText="Message Field"
            floatingLabelText="MultiLine and FloatingLabel"
            multiLine={true}
            rows={2}
          /><br />
          <TextField
            hintText="Full width"
            fullWidth={true}
          />
        </div>
      ;
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="Examples demonstrating key Text Field features."
        text={showCase}
      />
    )
  }
}


