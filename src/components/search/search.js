import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { connect } from "react-redux";
import { fetc } from "../../action/index";
import { authService } from "../../firebase/fbase";
import { Redirect } from "react-router-dom";

import "./search.css";
import searchIcon from "../.././Assets/icons/zoom-front-premium.png";

// import { XMLParser } from "fast-xml-parser";
// import XMLParse from "react-xml-parser";
// import parser from 'xml2json';

// var parse = new DOMParser();

const Search = (props) => {
  const [title, setTitle] = useState(" ");

  console.log(props.wholest.srchRedu);

  // var xmlDoc = parse.parseFromString(props.wholest.srchRedu, "text/xml");
  // console.log(typeof xmlDoc);

  //   const b = xmlDoc.map((item) => {
  //   return <span>{item.FirstName}</span>;
  // });
  //xml-js parser

  // var result1 = convert.xml2json(props.wholest.srchRedu, {
  //   compact: true,
  //   spaces: 4,
  // });
  // console.log(result1);

  // all these parser will not work because whene you dont have data have ing  if else is must

  // react-xml-parser
  // let xml = new XMLParse().parseFromString(props.wholest.srchRedu);
  // console.log(xml);

  // fast-xml-parser
  // const parser = new XMLParser();
  // let jObj = parser.parse(props.wholest.srchRedu);
  // console.log(jObj);

  // const jj = jObj.ann.anime.map(a => {
  //   return (
  //     <div>{a.info[1]}</div>
  //   )
  // })

  return (
    <div>
      <div>
        <input
          className="inp"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button className="sub-but" onClick={() => props.fetc(title)}>
          <img src={searchIcon} className="submit-png" />
        </button>

        {/* <div>{b}</div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { wholest: state };
};

export default connect(mapStateToProps, { fetc })(Search);
