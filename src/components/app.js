import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './card.js';
import Header from './header.js';
import Modal from './modalBox.js';

export default class App extends Component {
  constructor(props){
    super();


    this.state = {
      re: []
  };

  }

  handleChange(i, headVal, ingVal,instVal){
    var arr = this.state.re;
    var currentObj = arr[i];
    currentObj.name = headVal;
    currentObj.ing = ingVal;
    currentObj.inst = instVal;
    this.setState({re:arr});
  }
  remove(i){
    var arr = this.state.re;
    arr.splice(i,1);
    this.setState({re:arr});
    console.log(i);
    console.log(this.state.re);
  }

  closeModal(){
    var modal = document.getElementById('modal');
    var mask = document.getElementById('mask');
    ReactDOM.findDOMNode(modal).style.display = 'none';
    ReactDOM.findDOMNode(mask).style.display = 'none';
  }

  openModal(){
    var modal = document.getElementById('modal');
    var mask = document.getElementById('mask');
    ReactDOM.findDOMNode(modal).style.display = 'block';
    ReactDOM.findDOMNode(mask).style.display = 'block';
  }

  addNew(title, ing, inst){
    if(title != ''){
      var arr = this.state.re;
      arr.push({name:title,ing:ing,inst:inst});
      this.setState({re:arr});

    }

  }

  render() {

    if(this.state.re.length == 0){
      return (
        <div>
          <Header add={this.openModal.bind(this)}/>
          <div className="empty">
            <h1 className="emptyHeading">You do not have any recipes :(</h1>
          </div>
          <div id="mask" className="pageMask"></div>
          <Modal saveItem={this.addNew.bind(this)} close={this.closeModal.bind(this)}/>
        </div>
      );
    }else{
      return (<div>
        <Header add={this.openModal.bind(this)}/>
        <div className="gridContainer">

          {this.state.re.map(function(re,index){
            return(
              <Card edit={this.handleChange.bind(this)} remove={this.remove.bind(this,index)} i={index} re={re} key={index} />
            );
          },this)}

        </div>
        <div id="mask" className="pageMask"></div>
        <Modal saveItem={this.addNew.bind(this)} close={this.closeModal.bind(this)}/>
      </div>
      );
    }



  }
}
