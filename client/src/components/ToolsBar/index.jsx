import React from 'react';
import styles from './toolsbar.module.scss'

const ToolsBar = () => {
  return (
    <div className={styles.toolsbar}>
      <button className={styles.brush} title="brush"/>
      <button className={styles.eraser} title="eraser"/>
      <button className={styles.line} title="line"/>
      <button className={styles.circle} title="circle"/>
      <button className={styles.rect} title="rectangle"/>
      <input type="color" className={styles.palitra} title="color"/>
      <button className={styles.undo} title="undo"/>
      <button className={styles.redo} title="redo"/>
      <button className={styles.save} title="save"/>
    </div>
  );
}

export default ToolsBar;

