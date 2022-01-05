import React from 'react';
import { connect } from 'react-redux'

const Search = () => {
  return(
    <div>
      <input type='text'></input>
      <button>submit</button>
    </div>
  )
}


export default connect(null)(Search);