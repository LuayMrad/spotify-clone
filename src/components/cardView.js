import { React, useState, useEffect } from "react";
import Review from "./review";
import "../styles/cardViewStyle.css";
import { Card, Container, Row } from "react-bootstrap";

const CardView = (props) => {
  useEffect(() => {
    console.log(props.artist);
  }, []);

  return (
    <div className="column">
      <Container>
        <Row>
          <Card>
            <Card.Img
              className="card-image"
              src={
                props.artist.images.length === 0
                  ? "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"
                  : props.artist.images[1].url
              }
            />
            <Card.Body>
              <Card.Title className="card-title">
                {props.artist.name}
              </Card.Title>
              <Card.Text className="card-text">
                Followers {props.artist.followers.total}
              </Card.Text>
              <Card.Link href={`album/${props.artist.id}`}>
                View Albums
              </Card.Link>
              <Review popularity={props.artist.popularity} />
            </Card.Body>
          </Card>
        </Row>
      </Container>

      {/* <div className="column ">
        <a href="https://google.com/" style={{ cursor: "pointer" }}>
          <div>
            <img
              src={
                props.artist.images.length === 0
                  ? "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"
                  : props.artist.images[1].url
              }
              alt="image"
            />
          </div>
          <div className="m1-3">{props.artist.name}</div>
          <div className="text-muted">{props.artist.followers.total}</div>
          <div>
            <Review popularity={props.artist.popularity} />
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default CardView;
