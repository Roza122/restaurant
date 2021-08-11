import React, { Component } from "react";
import Navbar from "../Components/Navbar/navbar";
import Footer from "../Components/Footer/footer";
import ProfileDetails from "../Components/Profile/ProfileDetails";
import axios from "axios";
import Spinner from "../Components/Spinner/spinner";

import BookingTable from "../Components/Profile/BookingTable";

class PlaceProfile extends Component {
  state = {
    place: null,
    error: null,
    loading: true,
  };
  componentDidMount() {
    axios
      .get(`/get-profile/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ place: res.data, error: null, loading: false });
      })
      .catch((err) => {
        this.setState({
          place: null,
          error: err.response.data,
          loading: false,
        });
      });
  }

  render() {
    let renderedPlace = <Spinner />;
    if (!this.state.loading) {
      renderedPlace = (
        <>
          <ProfileDetails place={this.state.place} />
          <BookingTable placeId={this.props.match.params.id} />
        </>
      );
    }
    return (
      <>
        <Navbar blackLogo relative />
        <div className="container">{renderedPlace}</div>
        <Footer />
      </>
    );
  }
}

export default PlaceProfile;
