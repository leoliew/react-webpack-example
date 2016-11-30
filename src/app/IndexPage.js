/**
 * Created by leoliew on 2016/11/30.
 */

import React from 'react';
import ReadMe from '../../README.md';
import ReactMarkdown  from 'react-markdown';

const styles = {
  markdownBody: {
    boxSizing: 'border-box',
    minWidth: '200px',
    maxWidth: '980px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '2em'
  }
};

export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={styles.markdownBody}>
        <ReactMarkdown source={ReadMe}/>
      </div>
    )
  }
}
