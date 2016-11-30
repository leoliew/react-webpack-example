import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ShowCaseCard from './ShowCaseCard';

class FlatButtonExampleSimple extends React.Component {

  render() {
    var showCase =
      <div>
      <FlatButton label="Default"/>
      <FlatButton label="Primary" primary={true}/>
      <FlatButton label="Secondary" secondary={true}/>
      <FlatButton label="Disabled" disabled={true}/>
    </div>;
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="FlatButton with default color, primary, secondary and disabled props applied."
        text={showCase}
      />
    )
  }

}

export default FlatButtonExampleSimple;
