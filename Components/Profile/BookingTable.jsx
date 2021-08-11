import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bookingTable } from "../../store/actions/index";
import classes from "./profile.css";

function ProfileDetails(props) {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [personsNumber, setPersonsNumber] = useState();
  const [note, setNote] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `  $(document).ready(function(){
            $('.datepicker').datepicker({
              minDate : new Date()
            });
            $('.timepicker').timepicker({
              twelveHour : false
            });
          });
        `;
    document.body.append(script);
  }, [props]);

  const submitHandler = () => {
    const bookingInfo = {
      name,
      date,
      time,
      note,
      personsNumber,
      placeId: props.placeId,
    };

    dispatch(bookingTable(bookingInfo));
  };

  const onChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "time") setTime(e.target.value);
    if (e.target.name === "date") setDate(e.target.value);
    if (e.target.name === "note") setNote(e.target.value);
    if (e.target.name === "personsNumber") setPersonsNumber(e.target.value);
    console.log(name, date, time, personsNumber, note);
  };
  return (
    <>
      <div className="row center">
        <h3 className="center">Booking Table</h3>
        <div className="col s12 center">
          <div className={classes.inputField}>
            <label htmlFor="name">Name</label>
            <input
              onChange={onChange}
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className={classes.inputField}>
            <label htmlFor="date">Date</label>
            <input
              onChange={onChange}
              onFocus={onChange}
              name="date"
              type="text"
              id="date"
              className="datepicker"
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="time">Time</label>
            <input
              onFocus={onChange}
              onChange={onChange}
              name="time"
              type="text"
              id="time"
              className="timepicker"
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="number">num Of Persons</label>
            <input
              onChange={onChange}
              type="number"
              name="personsNumber"
              id="number"
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="note">Note</label>
            <textarea
              onChange={onChange}
              name="note"
              className="materialize-textarea"
              id="note"
            />
          </div>
            <button onClick={submitHandler} className="btn btn-success">
              Submit
            </button>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
