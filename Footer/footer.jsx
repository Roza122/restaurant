import React from "react";
import classes from "./footer.css";

const footer = () => {
  return (
    <>
      <section className={classes.footer + " section"}>
        <div className={classes.footerUp}>
          <img src="/images/logoBlack.png" alt="" />

          <div className={classes.footerUpRight}>
            <p>ژمارە : 07725194590</p>
            <p>ئیمەیڵ : RawandRebwar2010@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className={classes.footerDown}>CopyRight For Code Land</div>
      </section>
    </>
  );
};

export default footer;
