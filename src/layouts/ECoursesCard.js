import { Col, Card } from "react-bootstrap";

export default function ECourseCard(props){
    return(
        <Col md={4} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.obj.image} />
                        <Card.Body>
                            <Card.Title>{props.obj.subject}</Card.Title>
                            <Card.Text>
                            Ngay tao : {props.obj.created_date}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Col>
    )
}