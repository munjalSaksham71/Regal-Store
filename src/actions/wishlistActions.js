import axios from "axios";

const token = localStorage.getItem("user_info").slice(1, -1);

export const getWishlistProducts = async () => {
  try {
    const { data } = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addToWishlist = async (product) => {
    try {
      const response  = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

export const removeFromwishlist = async (id) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
