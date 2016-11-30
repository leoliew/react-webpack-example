import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import RecentsIcon from 'material-ui/svg-icons/action/restore';
import FavoritesIcon from 'material-ui/svg-icons/action/favorite';
import ShowCaseCard from './ShowCaseCard';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    var showCase = <Paper zDepth={1}>
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label="Recents"
          icon={<RecentsIcon/>}
          onTouchTap={() => this.select(0)}
        />
        <BottomNavigationItem
          label="Favorites"
          icon={<FavoritesIcon/>}
          onTouchTap={() => this.select(1)}
        />
        <BottomNavigationItem
          label="Nearby"
          icon={<IconLocationOn/>}
          onTouchTap={() => this.select(2)}
        />
      </BottomNavigation>
    </Paper>;
    return (
      <ShowCaseCard
        title="Simple example"
        subtitle="A simple example of BottomNavigation, with three labels and icons provided. The selected BottomNavigationItem is determined by application state (for instance, by the URL)."
        text={showCase}
      />
    );
  }
}

export default BottomNavigationExampleSimple;
