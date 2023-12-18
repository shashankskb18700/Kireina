const data = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/wishlist`,
      name
    );