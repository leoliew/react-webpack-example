/**
 * Created by leoliew on 2016/11/25.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router'
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const styles = {
  menuItem: {
    paddingTop: '18px',
    paddingBottom: '17px',
    paddingLeft: '6px',
    fontSize: '13px',
    fontWeight: 'bold'
  },
  subHeader: {
    height: '56px',
    fontSize: '22px',
    padding: '12px 0 11px 24px',
    lineHeight: '35px',
    fontWeight: 'bold'
  },
  menuItemDiv: {
    paddingTop: '12px'
  }
};

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: 'Material-UI'
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    var appBarTitle = this.state.title;
    var currentRoute = this.props.routes[this.props.routes.length-1];
    if(currentRoute && currentRoute.name){
      appBarTitle = currentRoute.name
    }
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            onLeftIconButtonTouchTap={this.handleToggle}
            title={appBarTitle}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Drawer
            docked={false}
            width={240}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <Subheader style={styles.subHeader}>Google</Subheader>
            <Divider />

            <div style={styles.menuItemDiv}>
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<Link to="/auto_complete"/>}
              ><span style={styles.menuItem}>Auto Complete</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/avatar"/>}
              ><span style={styles.menuItem}>Avatar</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/badge"/>}
              ><span style={styles.menuItem}>Badge</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/bottom_navigation"/>}
              ><span style={styles.menuItem}>Bottom Navigation</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/buttons"/>}
              ><span style={styles.menuItem}>Buttons</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/card"/>}
              ><span style={styles.menuItem}>Card</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/chip"/>}
              ><span style={styles.menuItem}>Chip</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/date_picker"/>}
              ><span style={styles.menuItem}>DatePicker</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/dialog"/>}
              ><span style={styles.menuItem}>Dialog</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/divider"/>}
              ><span style={styles.menuItem}>Divider</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/gird_list"/>}
              ><span style={styles.menuItem}>Grid List</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/icons"/>}
              ><span style={styles.menuItem}>Icons</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/list"/>}
              ><span style={styles.menuItem}>List</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/menu"/>}
              ><span style={styles.menuItem}>Menu</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/paper"/>}
              ><span style={styles.menuItem}>Paper</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/popover"/>}
              ><span style={styles.menuItem}>Popover</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/progress"/>}
              ><span style={styles.menuItem}>Progress</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/select_field"/>}
              ><span style={styles.menuItem}>Select Field</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/slider"/>}
              ><span style={styles.menuItem}>Slider</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/switches"/>}
              ><span style={styles.menuItem}>Switches</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/snack_bar"/>}
              ><span style={styles.menuItem}>Snack Bar</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/stepper"/>}
              ><span style={styles.menuItem}>Stepper</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/sub_header"/>}
              ><span style={styles.menuItem}>Sub Header</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/table"/>}
              ><span style={styles.menuItem}>Table</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/tabs"/>}
              ><span style={styles.menuItem}>Tabs</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/text_field"/>}
              ><span style={styles.menuItem}>Text Field</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/time_picker"/>}
              ><span style={styles.menuItem}>Time Picker</span></MenuItem>
              <MenuItem onTouchTap={this.handleClose}
                        containerElement={<Link to="/tool_bar"/>}
              ><span style={styles.menuItem}>Toolbar</span></MenuItem>
            </div>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
