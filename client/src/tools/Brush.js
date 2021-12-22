import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas){
    super(canvas);
    this.listen()
  }

  listen(){
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(event){
    this.mouseDown = false;
  }

  mouseDownHandler(event){
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)
  }

  mouseMoveHandler(event){
    if(this.mouseDown){
      this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)
    }
  }

  draw(x, y){
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    console.log('paint')
  }

}