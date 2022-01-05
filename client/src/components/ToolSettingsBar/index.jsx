import React from "react";
import toolState from "../../store/toolState";
import styles from "./toolsettingsbar.module.scss";

const ToolSettingsBar = () => {
  return (
    <div className={styles.toolsettingsbar}>
      <label style={{ marginLeft: "10px" }} htmlFor="line-width">
        Stroke line width
      </label>
      <input
        onChange={(e) => {
          toolState.setLineWidth(e.target.value);
        }}
        style={{ margin: "0 10px" }}
        id="line-width"
        type="number"
        min={1}
        max={50}
        defaultValue={1}
      />
      <label style={{ marginLeft: "10px" }} htmlFor="stroke-color">
        Stroke color
      </label>
      <input
        style={{ margin: "0 10px", cursor: "pointer" }}
        onChange={(e) => {
          toolState.setStrokeColor(e.target.value);
        }}
        type="color"
        id="stroke-color"
      />
    </div>
  );
};

export default ToolSettingsBar;
