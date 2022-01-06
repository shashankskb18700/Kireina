import React from 'react';
import { connect } from 'react-redux';
import { fetc } from '../../action/index';

const Search = props => {
  console.log(props.wholest);
  console.log(fetc);
  return (
    <div>
     
      <input type="text"></input>
      <button onClick={() => props.fetc()}>submit</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {wholest:state}
}

export default connect(mapStateToProps,{fetc})(Search);