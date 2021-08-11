import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./PlacesProfile.css";

function PlacesProfile(props) {
  const [places, setPlaces] = useState();

  useEffect(() => {
    setPlaces(props.places);
  }, [props]);

  // if(places && places.length > 0) {

  // }

  return (
    <React.Fragment>
      {places && places.length > 0 ? (
        <>
          <div className="center">
            <h1>ئەو شوێنانەی تایبەتمەندی مێزگرتنیان هەیە</h1>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            {places.map((place) => {
              return (
                <div key={place._id} className="col s12 m3">
                  <Link to={`/profile/${place._id}`}>
                    <h5 className="center black-text">{place.name}</h5>
                    <img
                      src={place.profile}
                      className={classes.placeProfile}
                      style={{ width: "100%", height: "180px" }}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </React.Fragment>
  );
}

export default PlacesProfile;
