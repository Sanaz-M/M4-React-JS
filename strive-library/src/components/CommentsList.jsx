import { Component } from "react"


class CommentList extends Component {
    getOthersComment = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.elementId, {
                methode: 'GET',
                body: JSON.stringify(this.state.yourComment),
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGJmM2FhY2FhMjAwMTU1MmExNmQiLCJpYXQiOjE2MzU5NDU0NTksImV4cCI6MTYzNzE1NTA1OX0.68CC8Jf4IHn7VZW39FPf-bHEv8MKux00DbaR2yT026Y"
                }
            })
            if (response.ok) {
                const data = await response.json()
                this.setState({ yourComment: data })
            } else {
                console.log('error while fetching')
            }
        } catch (e) {
            console.log(e)
        }
    }
}
