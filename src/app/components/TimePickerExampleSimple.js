import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import ShowCaseCard from './ShowCaseCard';

export default class TimePickerExampleSimple extends React.Component {
  
  render() {
    var showCase =
        <div>
          <TimePicker
            hintText="12hr Format"
          />
          <TimePicker
            hintText="12hr Format with auto ok"
            autoOk={true}
          />
          <TimePicker
            format="24hr"
            hintText="24hr Format"
          />
          <TimePicker
            disabled={true}
            format="24hr"
            hintText="Disabled TimePicker"
          />
        </div>
      ;
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="Time Picker supports 12 hour and 24 hour formats. In 12 hour format the AM and PM indicators toggle the selected time period. You can also disable the Dialog passing true to the disabled property."
        text={showCase}
      />
    )
  }
}
