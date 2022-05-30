import React, { useEffect } from "react";
import NavHeader from "../Header-Footer/NavHeader/NavHeader";

import { connect } from "react-redux";
import { dbService } from "../../firebase/fbase";
import { authService } from "../../firebase/fbase";
import { orderBy } from "firebase/firestore";

import { Wish } from "../../redux/action/wishlistActionCreator";

const Wishlist = (props) => {
  console.log(props);

  let userName = authService.getAuth().currentUser.email;
  const { collection, onSnapshot } = dbService;
  useEffect(async () => {
    const wishlistQuery = dbService.query(
      collection(dbService.getFirestore(), userName),
      orderBy("id", "asc")
    );

    await onSnapshot(wishlistQuery, (snapshot) => {
      const arr = snapshot.docs.map((docs) => ({
        // id: docs.id,
        ...docs.data(),
      }));

      console.log(arr);
    });
    // console.log(onSanpshot);
  }, []);

  return (
    <div>
      <NavHeader />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { wishlistItem: state };
};

export default connect(mapStateToProps)(Wishlist);
