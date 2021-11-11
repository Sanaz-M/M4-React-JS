import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ previousComments }) => (
    <ListGroup>
        {
            previousComments.map(comment => (
                <SingleComment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList