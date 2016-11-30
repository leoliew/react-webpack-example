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
  },
  childDiv: {
    margin: '1%'
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
              {this.props.route.childRoutes.map((route,i) => (
                <MenuItem
                  key={i}
                  onTouchTap={this.handleClose}
                  containerElement={<Link to={route.path}/>}
                ><span style={styles.menuItem}>{route.name}</span>
                </MenuItem>
              ))}
            </div>
          </Drawer>
          <div style={styles.childDiv}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
