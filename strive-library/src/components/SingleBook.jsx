import { Component } from 'react'
import { Card, Row, Button, Form } from 'react-bootstrap'
import CommentArea from './CommentsArea'

class SingleBook extends Component {

    state = {
        selectedBook: false,
    }

    render() {
        return (
            <Row>
                <Card className="bookCards1" onClick={() => this.setState({ selectedBook: !this.state.selectedBook })} style={{ border: this.state.selectedBook ? "2px solid green" : "none" }}>
                    <Card.Img variant="top" src={this.props.img} style={{ width: "200px" }} />
                    <Card.Body>
                        <Card.Title className="bookTitle">{this.props.title}</Card.Title>
                        <Card.Text>
                            Price: {this.props.price}€
                        </Card.Text>
                        <Button variant="success">Add</Button>
                    </Card.Body>
                </Card>
                {
                     this.state.selectedBook && <CommentArea asin={this.props.asin} />
                }
            </Row>
        )
    }

}

export default SingleBook