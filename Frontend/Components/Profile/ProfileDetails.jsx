import React from "react";

function ProfileDetails(props) {
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <h3>{props.place.name}</h3>
          <p>Address : {props.place.address}</p>
          <p>Working Time  : {props.place.workingAt}</p>
          <p>Delivery Time  : {props.place.deliveryAt}</p>
          <p>
            Delivery Fee :{" "}
            {props.place.deliveryFee === 0
              ? "Free"
              : props.place.deliveryFee + " $"}{" "}
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
