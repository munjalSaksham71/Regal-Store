import axios from "axios";

const token = localStorage.getItem("user_info");

export const getCartProducts = async () => {
  const userInfo = token.slice(1,-1)
  try {
    const { data } = await axios.get("/api/user/cart", {
      headers: {
        authorization: userInfo,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = async (product) => {
  const userInfo = token.slice(1,-1)
    try {
      const response  = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: userInfo,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error.response);
    }
  };

export const removeFromCart = async (id) => {
  const userInfo = token.slice(1,-1)
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: userInfo,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
