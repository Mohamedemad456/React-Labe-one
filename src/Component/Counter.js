import React , {useEffect , useState} from "react";
import { Container, Row , Button , } from "react-bootstrap";



function Counter(){
    const [number,setNumber] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setNumber(counter * 2);
    }, [counter]);

    const increase = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return(
        <Container className="d-flex justify-content-center align-items-center flex-row bg-light p-5 text-center">
            <Row className="d-flex justify-content-center align-items-center">
                <p className="display-4 mb-5">Counter : {counter}</p>
            <Button
            variant="primary"
            onClick={increase}
            aria-controls="collapse-text"
            style={{width:'50px' , height:'50px'}}
          >
            <span className="fs-5">+</span>
          </Button>
          <p className="display-5 mt-5">Calculations : {number}</p>
            </Row>
        </Container>
    );
}


export default Counter;