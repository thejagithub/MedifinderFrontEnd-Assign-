import React, { Component } from "react";

import UserService from "../services/user.service";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container3">
        {/* <header className="jumbotron">
          <h3 class="text-center"> */}
            {/* {this.state.content} */}
          {/* Welcome to MediFinder
          
          </h3> */}
          {/* <Row> 
            <Col>
      <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      {/* <Card.Body>
        <Card.Title> About MediFinder</Card.Title>
        <Card.Text>
          Medifinder is the Sri Lanka's first ever application build to assist with finding medicines.
        </Card.Text>
        <Card.Title>
          Medifinder is consists of many features. Some of them are,
        </Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Can easily find medicines based on location</ListGroup.Item>
        <ListGroup.Item>Easy registration and login</ListGroup.Item>
        <ListGroup.Item>Integrated and collaborated with reputed medical companies</ListGroup.Item>
      </ListGroup>
      <Card.Body> */}
        {/* <Card.Link href="#">log-in now</Card.Link>
        <Card.Link href="#">new user? click here</Card.Link> */}
      {/* </Card.Body>
    </Card>
    </Col> */} 
    
     {/* <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col> 
    
     <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>  */}
    {/* </Row> */}
     {/* </header> */}

     <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">We provide you the best service available at the market.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className=" fa fa-map-marker  fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">QUICKLY AND EASILY FIND MEDICINES</h4>
          <p className="text-muted">Finding medicines has never been so simple. Search by medicine name or search by your location.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">EASY REGISTRATION AND LOGIN</h4>
          <p className="text-muted">Register to the application to get exclusive offers and many more.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-user-md fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">REPUTED MEDICAL COMPANIES</h4>
          <p className="text-muted">At this time, a lot of medical companies have joined forces with us. And a lot of other companies want to join with us.</p>
        </div>
      </div>
    </div>
  </section>
       </div>

    );
      

     
  
  }
}
