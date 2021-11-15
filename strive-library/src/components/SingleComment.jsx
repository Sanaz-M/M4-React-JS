import { Button, ListGroup } from "react-bootstrap";
import {RiDeleteBinLine} from 'react-icons/ri'


const deletComment = async (asin) =>{
    try{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
          method: "DELETE",
                body: JSON.stringify(this.state.comment),
                headers: {
                   " Content-type": 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
                }
            });
            if (response.ok) {
                alert("comment deleted!");
              } else {
                alert("comment NOT deleted!");
              }
            } catch (error) {
              alert("comment NOT deleted!");
            }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
      {comment.comment}
      {comment.rate}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deletComment(comment._id)}
      >
        <RiDeleteBinLine />
      </Button>
    </ListGroup.Item>
  );
  
  export default SingleComment;
  