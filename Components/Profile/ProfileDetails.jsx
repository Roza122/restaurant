import React from "react";

function ProfileDetails(props) {
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <h3>{props.place.name}</h3>
          <p>ناونیشان : {props.place.address}</p>
          <p>کاتی کارکردن : {props.place.workingAt}</p>
          <p>کاتی گەیاندن : {props.place.deliveryAt}</p>
          <p>
            نرخی گەیاندن :{" "}
            {props.place.deliveryFee === 0
              ? "بـێ بـەرامـبـەر"
              : props.place.deliveryFee + " دینار"}{" "}
          </p>
        </div>
        <div className="col s12 m5 right">
          <img
            src={"/" + props.place.profile}
            alt={props.place.name}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
