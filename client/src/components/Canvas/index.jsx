import React from 'react';
import styles from "./canvas.module.scss"


const Canvas = () => {
  return (
    <div className={styles.canvas}>
      <canvas width={840} height={594}/>
    </div>
  );
}

export default Canvas;

