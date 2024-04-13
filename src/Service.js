import React from "react";
import Card from "./Card";

const Service = () => {
  return (
    <React.Fragment>
      <div className="container">
      <h1>our service page</h1>
        <div className="cards">
          <Card src="https://picsum.photos/id/237/200/150" />
          <Card src="https://picsum.photos/id/231/200/150" />
          <Card src="https://picsum.photos/id/232/200/150" />
          <Card src="https://picsum.photos/id/233/200/150" />
        </div>
        <div className="cards">
          <Card src="https://picsum.photos/id/234/200/150" />
          <Card src="https://picsum.photos/id/235/200/150" />
          <Card src="https://picsum.photos/id/236/200/150" />
          <Card src="https://picsum.photos/id/238/200/150" />
        </div>
        <div className="cards">
          <Card src="https://picsum.photos/id/239/200/150" />
          <Card src="https://picsum.photos/id/240/200/150" />
          <Card src="https://picsum.photos/id/241/200/150" />
          <Card src="https://picsum.photos/id/242/200/150" />
        </div>
        <div className="cards">
          <Card src="https://picsum.photos/id/243/200/150" />
          <Card src="https://picsum.photos/id/244/200/150" />
          <Card src="https://picsum.photos/id/228/200/150" />
          <Card src="https://picsum.photos/id/229/200/150" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Service;
