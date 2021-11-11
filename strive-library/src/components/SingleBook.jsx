import { Component } from 'react'
import { Card, Row, Button, Form } from 'react-bootstrap'
import AddComment from './AddComment'

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
                    this.state.selectedBook && <AddComment />
                }
                {/* <Form aria-label="Default select example" style={{ display: this.state.selectedBook ? 'block' : 'none' }} onSubmit={this.postNewComment}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your comment here</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={this.state.comment.comment}
                            onChange={(e) =>
                                this.setState({
                                  comment: {
                                    ...this.state.comment,
                                    comment: e.target.value
                                  }
                                })
                              }
                            rows={3} />
                    </Form.Group>
                    <option>Rate this book:</option>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.comment.rate}
                            onChange={(e) =>
                                this.setState({
                                  comment: {
                                    ...this.state.comment,
                                    comment: e.target.value
                                  }
                                })
                              }
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" style={{ width: "70px" }} block>Submit</Button>
                </Form> */}
            </Row>
        )
    }

}

export default SingleBook