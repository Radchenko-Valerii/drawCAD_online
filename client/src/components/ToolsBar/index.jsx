import React from 'react';
import styles from './toolsbar.module.scss'

const ToolsBar = () => {
  return (
    <div className={styles.toolsbar}>
      <button className={styles.brush}/>
    </div>
  );
}

export default ToolsBar;

