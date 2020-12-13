import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetails extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 mt-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle tag="h3">{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDishComment(dish) {
    if (dish != null) {
      const comment = dish.comments.map((details) => {
        return (
          <CardBody>
            <CardText>{details.comment}</CardText>
            <CardText>
              -- {details.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(details.date)))}
            </CardText>
          </CardBody>
        );
      });
      return (
        <div className="col-12 col-md-5 mt-1">
          <CardTitle tag="h3">Comments</CardTitle>
          {comment}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.details)}
          {this.renderDishComment(this.props.details)}
        </div>
      </div>
    );
  }
}
export default DishDetails;
