import Form from 'react-bootstrap/Form'
import SingleBook from './SingleBook'
import books from '../data/scifi.json'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class BookList extends Component {
    state = {
        query: "",
    }

    filterBookList() {
        return books.filter((book) => book.title.toLowerCase().includes(this.state.query));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Form.Group className="searchBar1">
                        <Form.Label>Search</Form.Label>
                        <Form.Control 
                            id="searchBar"
                            type="text"
                            placeholder="search"
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    {this.filterBookList().map((book => (
                        <Col md={12} className="my-5" key={book.asin}>
                            <SingleBook title={book.title} img={book.img} price={book.price} asin={book.asin}/>
                        </Col>
                    )))}
                </Row>
            </Container>
        )
    }

}


export default BookList