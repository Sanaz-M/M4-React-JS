import { Component } from 'react'
import { Card, Row, Button, Form } from 'react-bootstrap'
import books from '../data/scifi.json'

class SingleBook extends Component {

    state = {
        selectedBook: false,
        comment:{
        yourComment: '',
        rate : '1',
        elementId : '',
        }
    }


    commentInput = (fieldName, value) => {
        this.setState({
            comment: {
                ...this.state.comment,
                [fieldName]: value
            }
        })
    }

    componentDidMount = async () => {
        try {
          const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" ,{
              methode: 'POST',
              headers: {
                'Content-type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
              }
          })
          if(response.ok) {
            const data = await response.json()
              this.setState({ comment: data })
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
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
                <Form key={this.props.asin} aria-label="Default select example" style={{ display: this.state.selectedBook ? 'block' : 'none'}} onSubmit= {this.componentDidMount}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your comment here</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        value={this.state.comment.yourComment} 
                        onChange={(e) => {
                            this.commentInput('comment', e.target.value)
                        }}
                        rows={3} />
                    </Form.Group>
                    <option>Rate this book:</option>
                    <Form.Check
                        inline
                        value={this.state.comment.rate} 
                        label= "1"
                        name="group1"
                        type='radio'
                        onChange={(e) => {
                            this.commentInput('rate', e.target.value)
                        }}
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        inline
                        value={this.state.comment.rate} 
                        onChange={(e) => {
                            this.commentInput('rate', e.target.value)
                        }}
                        label= "2"
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        inline
                        value={this.state.comment.rate} 
                        onChange={(e) => {
                            this.commentInput('rate', e.target.value)
                        }}
                        label= "3"
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        inline
                        value={this.state.comment.rate} 
                        onChange={(e) => {
                            this.commentInput('rate', e.target.value)
                        }}
                        label= "4"
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                    onChange={(e) => {
                        this.commentInput('rate', e.target.value)
                    }}
                        inline
                        value={this.state.comment.rate} 
                        label= "5"
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                    />
                     <Button variant="primary" style={{width:"70px"}} block>Submit</Button>
                </Form>
            </Row>
        )
    }

}

export default SingleBook