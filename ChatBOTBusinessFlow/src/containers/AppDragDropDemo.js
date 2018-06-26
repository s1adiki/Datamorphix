import React from "react";
import {Component} from "react";
import {connect} from "react-redux";


// class AppDragDropDemo extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {tasks: [
//           {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
//           {name:"React", category:"wip", bgcolor:"pink"},
//           {name:"Vue", category:"complete", bgcolor:"skyblue"}
//         ], setData:''}
//         this.onDragOver = this.onDragOver.bind(this);
//         this.onDragStart = this.onDragStart.bind(this);
//         this.onDrop = this.onDrop.bind(this);
//   };
//
//   componentDidMount(){
//     //this.state ={setData:''}
//   };
//
//     onDragStart(id, ev) {
//         console.log('dragstart:',id);
//         this.setState({setData:id});
//     }
//
//     onDragOver(ev) {
//         ev.preventDefault();
//     }
//
//     onDrop(cat, ev){
//        let id = this.state.setData;
//
//        let tasks = this.state.tasks.filter((task) => {
//            if (task.name == id) {
//                task.category = cat;
//            }
//            return task;
//        });
//
//        //this.setState({...this.state,tasks:tasks});
//     }
//
//     render() {
//       if (this.props.authenticated) {
//         var tasks = {
//             wip: [],
//             complete: []
//         }
//
//         this.state.tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div key={t.name}
//                     onDragStart = {(e) => this.onDragStart(t.name,e)}
//                     draggable
//                     className="draggable"
//                     style = {{backgroundColor: t.bgcolor}}
//                 >
//                     {t.name}
//                 </div>
//             );
//         });
//
//         return (
//
//             <div className="container-drag">
//                 <h2 className="header">Designing Flow</h2>
//                 <div className="wip"
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
//                     <span className="task-header">Modules</span>
//                     {tasks.wip}
//                 </div>
//                 <div className="droppable"
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>this.onDrop(e, "complete")}>
//                      <span className="task-header">COMPLETED</span>
//                      {tasks.complete}
//                 </div>
//
//
//             </div>
//         );
//     }  else {
//         return(null);
//       }}
//
// }
//
// const mapStateToProps = (state) => {
//     return {
//       authenticated: state.status.authenticated
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AppDragDropDemo);


var Draggable = window.ReactDraggable;

var App = React.createClass({
  getInitialState() {
    return {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  },

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  },

  onStart() {
    this.setState({activeDrags: ++this.state.activeDrags});
  },

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  },

  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  },

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  },

  onControlledDrag(e, position) {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  },

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  },

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
      <div>
        <h1>React Draggable</h1>
        <p>Active DragHandlers: {this.state.activeDrags}</p>
        <p>
          <a href="https://github.com/mzabriskie/react-draggable/blob/master/example/index.html">Demo Source</a>
        </p>
        <Draggable {...dragHandlers}>
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
        <Draggable axis="x" {...dragHandlers}>
          <div className="box cursor-x">I can only be dragged horizonally (x axis)</div>
        </Draggable>
        <Draggable axis="y" {...dragHandlers}>
          <div className="box cursor-y">I can only be dragged vertically (y axis)</div>
        </Draggable>
        <Draggable onStart={() => false}>
          <div className="box">I dont want to be dragged</div>
        </Draggable>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="box">
            <div>I track my deltas</div>
            <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
          </div>
        </Draggable>
        <Draggable handle="strong" {...dragHandlers}>
          <div className="box no-cursor">
            <strong className="cursor"><div>Drag here</div></strong>
            <div>You must click my handle to drag me</div>
          </div>
        </Draggable>
        <Draggable cancel="strong" {...dragHandlers}>
          <div className="box">
            <strong className="no-cursor">Cant drag here</strong>
            <div>Dragging here works</div>
          </div>
        </Draggable>
        <Draggable grid={[25, 25]} {...dragHandlers}>
          <div className="box">I snap to a 25 x 25 grid</div>
        </Draggable>
        <Draggable grid={[50, 50]} {...dragHandlers}>
          <div className="box">I snap to a 50 x 50 grid</div>
        </Draggable>
        <Draggable bounds={{top: -100, left: -100, right: 100, bottom: 100}} {...dragHandlers}>
          <div className="box">I can only be moved 100px in any direction.</div>
        </Draggable>
        <div className="box" style={{height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0'}}>
          <div style={{height: '1000px', width: '1000px', padding: '10px'}}>
            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box">
                I can only be moved within my offsetParent.<br /><br />
                Both parent padding and child margin work properly.
              </div>
            </Draggable>
            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box">
                I also can only be moved within my offsetParent.<br /><br />
                Both parent padding and child margin work properly.
              </div>
            </Draggable>
          </div>
        </div>
        <Draggable bounds="body" {...dragHandlers}>
          <div className="box">
            I can only be moved within the confines of the body element.
          </div>
        </Draggable>
        <Draggable>
          <div className="box" style={{position: 'absolute', bottom: '100px', right: '100px'}} {...dragHandlers}>
            I already have an absolute position.
          </div>
        </Draggable>
        <Draggable defaultPosition={{x: 25, y: 25}} {...dragHandlers}>
          <div className="box">
            {"I have a default position of {x: 25, y: 25}, so I'm slightly offset."}
          </div>
        </Draggable>
        <Draggable position={controlledPosition} {...dragHandlers} onDrag={this.onControlledDrag}>
          <div className="box">
            My position can be changed programmatically. <br />
            I have a drag handler to sync state.
            <p>
              <a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
            </p>
            <p>
              <a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
            </p>
          </div>
        </Draggable>
        <Draggable position={controlledPosition} {...dragHandlers} onStop={this.onControlledDragStop}>
          <div className="box">
            My position can be changed programmatically. <br />
            I have a dragStop handler to sync state.
            <p>
              <a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
            </p>
            <p>
              <a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
            </p>
          </div>
        </Draggable>

      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
