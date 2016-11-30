/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ShowCaseCard from './ShowCaseCard';

export default class ProgressExampleSimple extends React.Component {

  render() {
    var showCase =
        <div>
          <CircularProgress />
          <CircularProgress size={60}/>
          <CircularProgress size={80}/>
        </div>
      ;
    return (
      <ShowCaseCard
        title="Indeterminate progress"
        subtitle="By default, the indicator animates continuously."
        text={showCase}
      />
    )
  }
}
