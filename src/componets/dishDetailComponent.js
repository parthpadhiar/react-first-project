import React, { Component } from "react";
import { CardText, CardBody, CardTitle } from "reactstrap";

class Details extends Component {
  renderDishComment(dish) {
    if (dish != null) {
      const comment = dish.comments.map((details) => {
        return (
          <CardBody>
            <CardText>{details.comment}</CardText>
            <CardText>
              -- {details.author}, {details.date}
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
      <div className="row">{this.renderDishComment(this.props.details)}</div>
    );
  }
}
export default Details;
