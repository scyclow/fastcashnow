import React from 'react';
import styles from './Thing.css';

class Thing extends React.Component {
  render() {
    return (
      <div className={styles.thing}>
        <span className={styles.crap}>+++</span>
        {this.props.content}
      </div>
    );

  }
}

export default Thing;
