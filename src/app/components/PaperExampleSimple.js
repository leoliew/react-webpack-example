/**
 * Created by leoliew on 2016/11/28.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import ShowCaseCard from './ShowCaseCard';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class PaperExampleSimple extends React.Component {

  render() {
    var showCase =
        <div>
          <Paper style={style} zDepth={1}/>
          <Paper style={style} zDepth={2}/>
          <Paper style={style} zDepth={3}/>
          <Paper style={style} zDepth={4}/>
          <Paper style={style} zDepth={5}/>
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
