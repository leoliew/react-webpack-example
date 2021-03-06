import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ShowCaseCard from './ShowCaseCard';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    var showCase =
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="All Broadcasts"/>
              <MenuItem value={2} primaryText="All Voice"/>
              <MenuItem value={3} primaryText="All Text"/>
              <MenuItem value={4} primaryText="Complete Voice"/>
              <MenuItem value={5} primaryText="Complete Text"/>
              <MenuItem value={6} primaryText="Active Voice"/>
              <MenuItem value={7} primaryText="Active Text"/>
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options"/>
            <FontIcon className="muidocs-icon-custom-sort"/>
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true}/>
            <IconMenu
              iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
            >
              <MenuItem primaryText="Download"/>
              <MenuItem primaryText="More Info"/>
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      ;
    return (
      <ShowCaseCard
        title="Example"
        subtitle="An example Toolbar demonstrating the use of the available sub-components, and including a number of other Material-UI components, such as Drop Down Menu, Font Icon, Icon Menu and Raised Button ."
        text={showCase}
      />
    );
  }
}
