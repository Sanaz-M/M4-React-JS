import { Container, Col, Row, Card, CardImg } from 'react-bootstrap'
import scifiBooks from '../data/scifi.json'
import { Component } from 'react'

class LatestRelease extends Component {
    render() {
        return (
        <Container> 
            <Row className="justify-content-center"> {
                scifiBooks.map((book => (
                    <Col md={2} key = {book.asin}>
                        <Card>
                        <CardImg src = {book.img}></CardImg>
                        </Card>
                        </Col>
                )
                )
                )} 
            
            </Row> 
        </Container>
        )
    }
}
export default LatestRelease