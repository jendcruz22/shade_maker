import { Card } from "react-bootstrap";

const Result = ({ colors }) => {
    console.log(colors)
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div style={{ backgroundColor: colors.hex.value, height: '20px' }}></div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {colors.hex.value}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Result;