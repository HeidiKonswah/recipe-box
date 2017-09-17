import React, { Component } from 'react';

class Modal extends Component {

  save(){
    var title = this.refs.titleTxt.value;
    var ing = this.refs.ingTxt.value.split(',');
    var inst = this.refs.instTxt.value;
    this.props.close();
    this.props.saveItem(title,ing,inst);
    this.refs.titleTxt.value= '';
    this.refs.ingTxt.value= '';
    this.refs.instTxt.value= '';
  }

  render() {
    return (
      <form className="modalForm" id="modal">

        <div className="modalHead">
          <h3>Add New Recipe</h3>
        </div>

        <div className="modalContent">
          <span>Title</span><br />
          <input ref="titleTxt" /><br />
          <span>Ingredients <span className="commaNote"> *seperated with a comma</span></span>
          <br />
          <textarea ref="ingTxt" /> <br />
          <span>Instructions</span> <br/>
          <textarea ref="instTxt" /> <br />
        </div>

        <div className="modalFoot">
          <i className="material-icons" onClick={() => this.save()}>&#xE877;</i>
          <i className="material-icons" onClick={() => this.props.close()}>&#xE14C;</i>

        </div>

      </form>

    );
  }
}

export default Modal;
