import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import ShowCaseCard from './ShowCaseCard';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    var showCase =
        <div>
          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label="Add to my calendar"
          />
          <Snackbar
            open={this.state.open}
            message="Event added to your calendar"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      ;
    return (
      <ShowCaseCard
        title="Simple example"
        subtitle="Snackbar is a controlled component, and is displayed when open is true. Click away from the Snackbar to close it, or wait for autoHideDuration to expire."
        text={showCase}
      />
    );
  }
}
