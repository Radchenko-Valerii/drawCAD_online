import React from 'react';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import Brush from '../../tools/Brush';
import Circle from '../../tools/Circle';
import Rect from '../../tools/Rect';
import styles from './toolsbar.module.scss'

const ToolsBar = () => {
  return (
    <div className={styles.toolsbar}>
      <button className={styles.brush} title="brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}/>
      <button className={styles.eraser} title="eraser"/>
      <button className={styles.line} title="line"/>
      <button className={styles.circle} title="circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}/>
      <button className={styles.rect} title="rectangle" onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}/>
      <input type="color" className={styles.palitra} title="color"/>
      <button className={styles.undo} title="undo"/>
      <button className={styles.redo} title="redo"/>
      <button className={styles.save} title="save"/>
    </div>
  );
}

export default ToolsBar;

