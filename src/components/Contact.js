import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'

const Contact = () => {
    return(
        <Card className="border-0 ml-5">
            <Card.Body>
                <Figure>
                    <Figure.Image src="https://storage.googleapis.com/album-images/IanFraser_TransPecos-20150805-04317.jpeg" alt="imf performing at trans pecos"></Figure.Image>
                    <Figure.Caption className="text-muted">Photo by Billy Gomberg</Figure.Caption>
                </Figure>
                <Card.Text>
                    Ian M Fraser (b. 1980) is a composer working in the field of computer music. His work primarily focuses on generative structures, stochastic processes, and nonlinear feedback systems.
                    He lives in New York City with his wife and cat.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0"> 
                Contact me at: <Card.Link href="mailto:imf@ianmfraser.computer">imf@ianmfraser.computer</Card.Link>
            </Card.Footer>
        </Card>
    )
}

export default Contact