/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ShowCaseCard from './ShowCaseCard';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

export default class MenuExampleSimple extends React.Component {

  render() {
    var showCase =
        <div>
          <Paper style={style}>
            <Menu>
              <MenuItem primaryText="Maps"/>
              <MenuItem primaryText="Books"/>
              <MenuItem primaryText="Flights"/>
              <MenuItem primaryText="Apps"/>
            </Menu>
          </Paper>
          <Paper style={style}>
            <Menu>
              <MenuItem primaryText="Refresh"/>
              <MenuItem primaryText="Help &amp; feedback"/>
              <MenuItem primaryText="Settings"/>
              <MenuItem primaryText="Sign out"/>
            </Menu>
          </Paper>
        </div>
      ;
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="Two simple examples. The menu widths adjusts to accommodate the content in keyline increments."
        text={showCase}
      />
    )
  }
}
