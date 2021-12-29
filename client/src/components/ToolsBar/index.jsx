import React from 'react';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import Brush from '../../tools/Brush';
import Circle from '../../tools/Circle';
import Eraser from '../../tools/Eraser';
import Line from '../../tools/Line';
import Rect from '../../tools/Rect';
import styles from './toolsbar.module.scss'

const ToolsBar = () => {

  const changeColor = (e) => {
    // toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value)
  }

  return (
    <div className={styles.toolsbar}>
      <button className={styles.brush} title="brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}/>
      <button className={styles.eraser} title="eraser" onClick={()=> toolState.setTool(new Eraser(canvasState.canvas))}/>
      <button className={styles.line} title="line" onClick={()=> toolState.setTool(new Line(canvasState.canvas))}/>
      <button className={styles.circle} title="circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}/>
      <button className={styles.rect} title="rectangle" onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}/>
      <input onChange={e=>changeColor(e)} type="color" className={styles.palitra} title="Fill color"/>
      <button className={styles.undo} title="undo"/>
      <button className={styles.redo} title="redo"/>
      <button className={styles.save} title="save"/>
    </div>
  );
}

export default ToolsBar;

