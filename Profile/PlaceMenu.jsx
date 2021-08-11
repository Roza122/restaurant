import React from "react";

function PlaceMenu(props) {
  console.log(props);
  return (
    <div style={{ margin: "50px 0" }}>
      <h3 className="center">هەندێک لە خواردنەکان</h3>
      <div className="row" style={{ direction: "rtl" }}>
        <div className="col s12 m4">
          {props.posts && props.posts.food.length > 0 ? (
            <>
              <h5
                className="center"
                style={{
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px",
                }}
              >
                خواردنەکان
              </h5>
              <ol className="center">
                {props.posts.food.map((post, index) => {
                  return index < 5 ? (
                    <li key={post._id}> {post.Name} </li>
                  ) : null;
                })}
              </ol>
            </>
          ) : null}
        </div>
        <div className="col s12 m4">
          {props.posts && props.posts.fastFood.length > 0 ? (
            <>
              <h5
                className="center"
                style={{
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px",
                }}
              >
                خواردنی خێرا
              </h5>
              <ol className="center">
                {props.posts.fastFood.map((post, index) => {
                  return index < 5 ? (
                    <li key={post._id}> {post.name} </li>
                  ) : null;
                })}
              </ol>
            </>
          ) : null}
        </div>
        <div className="col s12 m4">
          {props.posts && props.posts.sweet.length > 0 ? (
            <>
              <h5
                className="center"
                style={{
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px",
                }}
              >
                شـیـریـنـیـەکـان
              </h5>
              <ol className="center">
                {props.posts.sweet.map((post, index) => {
                  return index < 5 ? (
                    <li key={post._id}> {post.name} </li>
                  ) : null;
                })}
              </ol>
            </>
          ) : null}
        </div>
        <div className="col s12 m4">
          {props.posts && props.posts.seaFood.length > 0 ? (
            <>
              <h5
                className="center"
                style={{
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px",
                }}
              >
                خواردنە دەریاییەکان
              </h5>
              <ol className="center">
                {props.posts.seaFood.map((post, index) => {
                  return index < 5 ? (
                    <li key={post._id}> {post.name} </li>
                  ) : null;
                })}
              </ol>
            </>
          ) : null}
        </div>
        <div className="col s12 m4">
          {props.posts && props.posts.drink.length > 0 ? (
            <>
              <h5
                className="center"
                style={{
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px",
                }}
              >
                خواردنەوەکان
              </h5>
              <ol className="center">
                {props.posts.drink.map((post, index) => {
                  return index < 5 ? (
                    <li key={post._id}> {post.name} </li>
                  ) : null;
                })}
              </ol>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PlaceMenu;
