import { Card, Container, Row } from "react-bootstrap";

const Album = (props) => {
  return (
    <div className="column">
      <Container>
        <Row>
          <Card>
            <Card.Img
              className="card-image"
              src={
                props.album.images.length === 0
                  ? "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"
                  : props.album.images[1].url
              }
            />

            <Card.Title>{props.album.name}</Card.Title>
            <Card.Header className="card-title">
              {props.album.artists[0].name}
            </Card.Header>
            <Card.Text>release date : {props.album.release_date}</Card.Text>
            <Card.Text>
              {props.album.total_tracks}{" "}
              {props.album.total_tracks == 1 ? "track" : "tracks"}{" "}
            </Card.Text>
            <Card.Footer>
              <Card.Link href={props.album.external_urls.spotify}>
                Preview on spotify
              </Card.Link>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Album;
