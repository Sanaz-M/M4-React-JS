import { Component } from "react";
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
state = {
    comment: {
        comment: '',
        rate: 1,
        elementId: this.props.asin
    }
}

postNewComment = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: 'POST',
            body: JSON.stringify(this.state.comment),
            headers: {
                'Content-type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
            }
        })
        if (response.ok) {
            alert("Thank you for your comment!")
        } else {
            console.log('Oops! Try again please.')
        }
    } catch (e) {
        console.log(e)
    }
}

render() {
    return (

        <Form aria-label="Default select example"  onSubmit={this.postNewComment}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your comment here</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={this.state.comment.comment}
                            onChange={(e) =>
                                this.setState({
                                  comment: {...this.state.comment, comment: e.target.value}
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
                                  comment: { ...this.state.comment, rate: e.target.value}
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
                    <Button type="submit" variant="primary" style={{ width: "70px" }} block>Submit</Button>
                </Form>
    );
  }
}


export default AddComment
