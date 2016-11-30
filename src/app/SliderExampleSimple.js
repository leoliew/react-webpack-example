/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import Slider from 'material-ui/Slider';
import ShowCaseCard from './ShowCaseCard';

/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
export default class SliderExampleSimple extends React.Component {

  render() {
    var showCase =
        <div>
          <Slider />
          <Slider defaultValue={0.5}/>
          <Slider defaultValue={1}/>
        </div>
      ;
    return (
      <ShowCaseCard
        title="Simple examples"
        subtitle="The defaultValue property sets the initial position of the slider. The slider appearance changes when not at the starting position."
        text={showCase}
      />
    )
  }
}

