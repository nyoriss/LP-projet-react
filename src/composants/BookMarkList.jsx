import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookMarkList extends Component {
  render() {    
    return ( 
      <div> 
        <h1> Equipe </h1>
        <ul>
          {this.props.history.map((item, index) => (<li key={index}> {item} </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    history: state.bookMark.history,
  }
}

export default connect(mapStateToProps)(BookMarkList);