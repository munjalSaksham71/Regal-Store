import axios from "axios";

const token = localStorage.getItem("user_info").slice(1, -1);

export const getCartProducts = async () => {
  try {
    const { data } = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addToCart = async (product) => {
    try {
      const response  = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error.response);
    }
  };

export const removeFromCart = async (id) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
