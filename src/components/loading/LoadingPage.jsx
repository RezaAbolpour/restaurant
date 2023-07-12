import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import style from "../../App.module.css";
import styleloading from "./loadin.module.css";
import LeftCart from "../left-cart/LeftCart";
import RigthCart from "../rigth-cart/RigthCart";
import axios from "axios";
const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const sendReqest = async () => {
    setLoading(true);
    try {
      const response = await axios.get("");
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    //sendReqest();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //   const loadingStyle = css`
  //     margin-left: 50%;
  //   `
  //   const loadingContainerStyle = css`
  //     background-color:green;
  //   `
  return (
    <div>
      {loading ? (
        <div className={styleloading.loadingContainerStyle}>
          <ClipLoader
            // css={loadingStyle}
            size={500}
            color={"#123abc"}
            loading={loading}
          />
        </div>
      ) : (
        <div className={style.main}>
          <RigthCart />
          <LeftCart />ّ
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
