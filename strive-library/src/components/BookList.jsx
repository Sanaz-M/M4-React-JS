import Form from 'react-bootstrap/Form'
import SingleBook from './SingleBook'
import books from '../data/scifi.json'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class BookList extends Component {
    stat = {
        query: " ",
    }

    filterBookList(query) {
        return this.props.books.filter((book) => book.title.include(query));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Form.Group>
                        <Form.Label>Search</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="search"
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    {this.filterBookList(this.state.query).map((book => (
                        <Col key={book.asin}>
                            <SingleBook title={book.title} img={book.img} />
                        </Col>
                    )))}
                </Row>
            </Container>
        )
    }

}


export default BookList