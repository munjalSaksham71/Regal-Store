import axios from "axios";

const token = localStorage.getItem("user_info")

export const getWishlistProducts = async () => {
  const userInfo = token.slice(1,-1)
  try {
    const { data } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: userInfo,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addToWishlist = async (product) => {
  const userInfo = token.slice(1,-1)
    try {
      const response  = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: userInfo,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const removeFromwishlist = async (id) => {
  const userInfo = token.slice(1,-1)
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: userInfo,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
