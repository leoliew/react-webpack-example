/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ShowCaseCard from './ShowCaseCard';

const iconStyles = {
  marginRight: 24,
};

export default class FontIconExampleSimple extends React.Component {

  render() {
    var showCase =
        <div>
          <HomeIcon
            style={iconStyles}
          />

          <HomeIcon
            style={iconStyles}
            color={blue500}
          />

          <HomeIcon
            style={iconStyles}
            color={red500}
            hoverColor={greenA200}
          />
        </div>
      ;
    return(
      <ShowCaseCard
        title="Custom icon font"
        subtitle="This example uses a custom font (not part of Material-UI). The className defines the specific icon. The third example has a hoverColor defined."
        text={showCase}
      />
    )
  }




}
