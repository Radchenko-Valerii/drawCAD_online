import Brush from "./Brush";

export default class Eraser extends Brush {
  constructor(canvas, socket, id){
    super(canvas, socket, id);
    this.listen()
  }

  mouseMoveHandler(event){
    if(this.mouseDown){
      // this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop)

      this.socket.send(JSON.stringify({
        method: "draw",
        id: this.id,
        figure: {
          type: "eraser",
          x: event.pageX - event.target.offsetLeft,
          y: event.pageY - event.target.offsetTop
        }
      }))
    }
  }

}