import React, { useEffect, useState } from "react";
import NavHeader from "../Header-Footer/NavHeader/NavHeader";

import { connect } from "react-redux";
import { dbService } from "../../firebase/fbase";
import { authService } from "../../firebase/fbase";
import { orderBy, queryEqual } from "firebase/firestore";

import { Wish } from "../../redux/action/wishlistActionCreator";

import "./Wishlist.css";

const Wishlist = (props) => {
  const [idAnime, setIdAnime] = useState("");
  const [arrayId, setArrayId] = useState([]);

  let userName = authService.getAuth().currentUser.email;
  console.log(props.wishlistItem);
  let anime = [];
  let animeDetail = [];

  if (Object.values(props.wishlistItem)[0]) {
    console.log(Object.values(props.wishlistItem));

    const wishlist = Object.values(props.wishlistItem)[0].ann;
    console.log(wishlist);
    wishlist.anime.map((data) => (
      <div>
        {console.log(data)}
        {console.log("")}
        {Object.keys(data.info[0])[1] === "img" &&
        data.$.type !== "manga" &&
        data.credit !== undefined
          ? data.info[0].img.length > 1
            ? anime.push(Object.values(data.info[0].img[1])[0].src) &&
              animeDetail.push(data)
            : anime.push(Object.values(data.info[0].img[0])[0].src) &&
              animeDetail.push(data)
          : ""}
      </div>
    ));
  }
  let animId = props.wishlistItem;
  console.log(anime);
  console.log(animeDetail);

  // if (arrayId.indexOf(userName) >= 0) {

  // console.log(arrayId);
  // if (arrayId.indexOf(userName) >= 0) {
  //   //delete element form firebase database
  //   console.log("delete it form the array");
  // } else {
  //   setId(props.wishlistItem);
  //   const { addDoc, collection } = dbService;
  //   console.log("sending data");

  //   addDoc(collection(dbService.getFirestore(), userName), {
  //     value: id,
  //     createdAt: Date.now(),
  //     id: Date.now(),
  //   });
  // }

  const { collection, onSnapshot } = dbService;
  useEffect(async () => {
    await query();
    if (idAnime.length > 0) {
      props.Wish(idAnime);
    }
  }, [idAnime]);

  const query = async () => {
    const wishlistQuery = dbService.query(
      collection(dbService.getFirestore(), userName),
      orderBy("id", "asc")
    );

    await onSnapshot(wishlistQuery, (snapshot) => {
      const arr = snapshot.docs.map((docs) => docs.data().value);
      console.log(arr);
      // const arra = [...arrayId];
      // arra
      //arrayId is getting completly changed ;
      let wishlistIds = arr.toString();
      wishlistIds = wishlistIds.replaceAll(",", "/");

      setIdAnime(wishlistIds);
      // if (idAnime.length > 0) {
      //   props.Wish(idAnime);
      // }
      // setArrayId([...arr]);
    });
    // there will be delay in fetching data thats why some why it is not working
  };

  // console.log(arrayId);
  console.log(idAnime);

  const unWishlistItem = async (id) => {
    const { deleteDoc, doc } = dbService;
    let email = authService.getAuth().currentUser.email;
    await deleteDoc(doc(dbService.getFirestore(), email, id)).then(() => {
      console.log("deleted");
    });
    query();
  };

  console.log(idAnime);
  return (
    <div>
      <NavHeader />
      <div>
        {anime.map((imgUrl) => (
          <div className="wishlistItem">
            <div className="wishlistImage">
              <img src={imgUrl} key={imgUrl}></img>
            </div>
            <div className="WishlistTitleName">
              <div>{animeDetail[anime.indexOf(imgUrl)].$.name}</div>
              <button
                onClick={() =>
                  unWishlistItem(animeDetail[anime.indexOf(imgUrl)].$.id)
                }
                className="unWishlist"
              >
                Remove{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button>wish</button>
      <button onClick={() => props.Wish("5232/2333")}> action creator</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { wishlistItem: state.wishlistData };
};

export default connect(mapStateToProps, { Wish })(Wishlist);
