/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import ShowCaseCard from './ShowCaseCard';


/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
export default class ChipExampleSimple extends React.Component {
  render() {
    var showCase =
        <div>
          <DatePicker hintText="Portrait Dialog"/>
          <DatePicker hintText="Landscape Dialog" mode="landscape"/>
          <DatePicker hintText="Dialog Disabled" disabled={true}/>
        </div>
      ;
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="The Date Picker defaults to a portrait dialog. The mode property can be set to landscape. You can also disable the Dialog passing true to the disabled property."
        text={showCase}
      />
    )
  }
}

