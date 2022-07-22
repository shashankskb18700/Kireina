import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { connect } from "react-redux";
import { authService } from "../../firebase/fbase";
import { Redirect, Link } from "react-router-dom";

import { fetc } from "../../redux/action/index";
import { backend } from "../../redux/action/backend";

import "./search.css";
import searchIcon from "../.././Assets/icons/zoom-front-premium.png";

// import { XMLParser } from "fast-xml-parser";
// import XMLParse from "react-xml-parser";
// import parser from 'xml2json';

// var parse = new DOMParser();

const Search = (props) => {
  const [title, setTitle] = useState("");

  console.log(props.wholest);

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
  // console.log(backend);
  // console.log(props.wholest);

  return (
    <div>
      <input
        className="inp"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      {/* //this call will fetch xml data , it to frontend */}

      {/* <button className="sub-but" onClick={() => props.fetc(title)}>
          <img src={searchIcon} className="submit-png" />
        </button> */}

      {/* // this call will fetch json dadta it to backend */}
      {/* {console.log(window.location.href)} */}

      {window.location.href === `http://localhost:3000/` ||
      `https://kireinanime.web.app/` ? (
        <Link to="/animeD">
          <button className="sub-but" onClick={() => props.backend(title)}>
            <img src={searchIcon} className="submit-png" />
          </button>
        </Link>
      ) : (
        <button className="sub-but" onClick={() => props.backend(title)}>
          <img src={searchIcon} className="submit-png" />
        </button>
      )}

      {/*  */}

      {/* <div>{b}</div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { wholest: state };
};

export default connect(mapStateToProps, { fetc, backend })(Search);
