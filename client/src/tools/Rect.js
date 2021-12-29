import Tool from "./Tool";

export default class Rect extends Tool {
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
    this.startX = event.pageX - event.target.offsetLeft;
    this.startY = event.pageY - event.target.offsetTop;
    this.savedCanvas = this.canvas.toDataURL();
  }

  mouseMoveHandler(event){
    if(this.mouseDown){
      let currentX = event.pageX - event.target.offsetLeft;
      let currentY = event.pageY - event.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height)
    }
  }

  draw(x, y, width, height){
    const img = new Image();
    img.src = this.savedCanvas;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath()
      this.ctx.rect(x, y, width, height);
      this.ctx.fill();
      this.ctx.stroke();
    } 
    
  }

}