import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addPoke, removePoke, resetPoke} from '../actions/index';

/*export function BookMark(numeroPokemon) {
  console.log("BookMarkComposant ")
  return ( 
    <div> 
    <h1> Counter ${numeroPokemon}</h1>
    <h1> {mapStateToProps().props.count} </h1>
    <button onClick={mapDispatchToProps().props.addPoke}> ajouter </button>
    <button onClick={mapDispatchToProps().props.removePoke}> supprimer </button>
    <button onClick={mapDispatchToProps().props.resetPoke}> Reset </button>
  </div>

  )}*/

class BookMark extends PureComponent {
  render() {
    return (
      <div> 
        <h1> Counter </h1>
        <h1> {this.props.count} </h1>
        <button onClick={this.props.addPoke}> ajouter </button>
        <button onClick={this.props.removePoke}> supprimer </button>
        <button onClick={this.props.resetPoke}> Reset </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.bookMark.count,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPoke: addPoke,
    removePoke: removePoke,
    resetPoke: resetPoke,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookMark);