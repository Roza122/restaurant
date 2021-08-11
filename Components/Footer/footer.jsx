import React from "react";
import classes from "./footer.css";

const footer = () => {
  return (
    <>
      <section className={classes.footer + " section"}>
        <div className={classes.footerUp}>
          <img src="/images/logoBlack.png" alt="" />

          <div className={classes.footerUpRight}>
            <p>Phone Number : 937426294</p>
            <p>email : hello@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className={classes.footerDown}>CopyRight For Roza</div>
      </section>
    </>
  );
};

export default footer;
