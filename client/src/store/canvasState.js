import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;
  undoList = [];
  redoList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }

  pushToUndoList(element) {
    this.undoList.push(element);
  }

  pushToRedoList(element) {
    this.redoList.push(element);
  }

  undo(){
    let ctx = this.canvas.getContext('2d');
    if(this.undoList.length>0){
      let data = this.undoList.pop();
      this.redoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = data;
      img.onload = () =>{
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      }
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      throw new Error('noting to undo')
    }

  }

  redo(){
    let ctx = this.canvas.getContext('2d');
    if(this.redoList.length>0){
      let data = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      let img = new Image();
      img.src = data;
      img.onload = () =>{
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      }
    } else {
      throw new Error('noting to redo')
    }
  }

}

export default new CanvasState();
