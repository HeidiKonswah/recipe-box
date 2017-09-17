import React, { Component } from 'react';
import Modal from './modalBox.js';

class Card extends Component {
  constructor(props){
    super();

    this.state = {
      editMode: false,
      i: props.i
    };

  }
  remove(){
    var i = this.state.i;
    this.props.remove(i);
  }

  handleChange(){
    var headVal = this.refs.inputName.value;
    var ingVal = this.refs.inputIng.value.split(',');
    var instVal = this.refs.inputInst.value;
    this.props.edit(this.state.i,headVal,ingVal,instVal);
  }
  handleMode(){
    this.setState({editMode: !this.state.editMode});
  }



  renderForm(){

    return (
      <div className="card-div">
        <span>Title</span><br />
        <input ref="inputName" onChange={() => this.handleChange()} value={this.props.re.name} />
        <br />
        <span>Ingredients <span className="commaNote"> *seperated with a comma</span></span>
        <textarea ref="inputIng" onChange={() => this.handleChange()} value={this.props.re.ing} />
        <br />
        <span>Instructions</span> <br/>
        <textarea ref="inputInst" onChange={() => this.handleChange()} value={this.props.re.inst} />
        <br />
        <i className="material-icons" onClick={() => this.handleMode()}>&#xE877;</i>

      </div>

    );


  }

  renderDef() {
    return (
      <div className="card-div">
        <h3>{this.props.re.name}</h3>
        <h4>Ingredients</h4>
        <ul>
          {this.props.re.ing.map(function(item,index){
            return <li key={index}>{item}</li>
          })}
        </ul>
        <h4>{this.props.re.inst===''? ' ':'Instructions'}</h4>
        <p>{this.props.re.inst}</p>

          <i className="material-icons" onClick={(i) => this.remove(i)}>&#xE14C;</i>
          <i className="material-icons" onClick={() => this.handleMode()}>&#xE254;</i>
        

      </div>

    );
  }

  render(){
    if(this.state.editMode){
      return this.renderForm();
    }else{
      return this.renderDef();
    }
  }


}

export default Card;
