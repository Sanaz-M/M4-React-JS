import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import '../data/scifi.json'

class SingleBook extends Component {

    state = {
        selectedBook: false
    }

    render() {
        return (
            <Card className="bookCards" onClick={() => this.setState({selectedBook: !this.state.selectedBook})} style= {{border: "2px solid green"}}>
            <Card.Img variant="top" src={this.props.book.img} height="250px" />
            <Card.Body>
                <Card.Title className="bookTitle">{this.props.book.title}</Card.Title>
                <Card.Text>
                    Price: {this.props.book.price}€
                </Card.Text>
                <Button variant="primary">Add</Button>
            </Card.Body>
        </Card>
        )
    }

}

export default SingleBook