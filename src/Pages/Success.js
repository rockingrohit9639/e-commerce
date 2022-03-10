import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userRequest } from "../axios/instance";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // const createOrder = async () => {
    //   try {
    //     const res = await userRequest.post("/orders", {
    //       userId: currentUser._id,
    //       products: cart.products.map((item) => ({
    //         productId: item._id,
    //         quantity: item._quantity,
    //       })),
    //       amount: cart.total,
    //       address: data.billing_details.address,
    //     });
    //     setOrderId(res.data._id);
    //   } catch {}
    // };
    // data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Success
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
