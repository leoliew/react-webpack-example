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
import ThemeFactory from '../res/styles/ThemeFactory';
import GitHubForkRibbon from 'react-github-fork-ribbon';



const styles = {
  menuItem: {
    paddingLeft: '6px',
    lineHeight: "43px",
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
      title: 'Material-UI',
      appBarBackgroundColor: ThemeFactory.Default
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    var appBarTitle = this.state.title;
    var appBarBackgroundColor = this.state.appBarBackgroundColor;
    var currentRoute = this.props.routes[this.props.routes.length - 1];
    if (currentRoute && currentRoute.name) {
      appBarTitle = currentRoute.name;
      console.log(currentRoute.name);
      appBarBackgroundColor = ThemeFactory[currentRoute.name];
      // this.setState({appBarBackgroundColor:ThemeFactory[currentRoute.name]});
    }
    return (
      <MuiThemeProvider>
        <div>
          <GitHubForkRibbon href="https://github.com/leoliew/react-webpack-example"
                            target="_blank"
                            position="right">
            Fork me on GitHub
          </GitHubForkRibbon>
          <AppBar
            onLeftIconButtonTouchTap={this.handleToggle}
            title={appBarTitle}
            style={{backgroundColor: appBarBackgroundColor}}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Drawer
            docked={false}
            width={240}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <Link style={{ textDecoration: 'none' }} to="/">
              <Subheader style={styles.subHeader} onTouchTap={this.handleClose}>Google</Subheader>
            </Link>
            <Divider />
            <div style={styles.menuItemDiv}>
              {this.props.route.childRoutes.map((route, i) => (
                <MenuItem
                  key={i}
                  onTouchTap={this.handleClose}
                  containerElement={<Link to={route.path}/>}
                  primaryText={route.name}
                  style={styles.menuItem}
                />
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
