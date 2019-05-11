import React from "react";
import { Col, Row, Container} from "../components/Grid/index";
import Button from "react-bootstrap/Button";
import "./Booking.css";
import DateTimePicker from "react-datetime-picker";
import ImageUploader from 'react-images-upload';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import axios from "axios";
const $ = window.$;
const urlParams = new URLSearchParams(window.location.search)

export default class Booking extends React.Component {
    constructor(props){
        super(props)
        console.log("These are my properties: ",props);
       ;
        this.state= {
            clientName: props.name,
            technicianName: urlParams.get("technician"),
            clientImages: [],
            date: new Date(),
            
        }

    }

    componentDidMount() {
        axios.get("/api/user_data").then(res => {
            const info = res.data;
            this.setState({
                clientName: info.name
            });
          });
          $("g,svg").attr("stroke","#d2b57f");
    }
    
    onChange = (date) => {this.setState({ date })
    console.log(this.state.date)
    };

    onDrop = (picture) => {
        this.setState({
            clientImages: this.state.clientImages.concat(picture),
        });   
    };

    handleOnClick = event => {
        axios.post("/api/book", this.state)
        .then(res => {
            
        })
    }
    

 
    

    render() {

        return (
            <Container className="main" fluid >
            <Row>
                <Col size="md-12">
                
                <div className="wrapper">
                <h2>Book an Appointment</h2>
                <br />
                <strong>Technician: {this.state.technicianName}</strong>
                <br />
               
                <strong> Client: {this.state.clientName}</strong>
                <hr />
                <strong>Service: {urlParams.get("service")}</strong>
                <br />
                <strong> Style: {urlParams.get("style")}</strong>
                <hr />
                <strong>Client images</strong>: 
                <ImageUploader
                    withIcon={true}
                    buttonText='Upload Image'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview={true}
                    singleImage={false}
                />
                <hr />
                <strong>Any Specifications:</strong>
                <br />
                <textarea className="form-control" rows="5"value={this.state.clientSpecifications}></textarea>
                
                <hr />
                <div  className="datePicker">
                <DateTimePicker 
                format={"y-MM-dd h:mm a"}
                size={150}
                renderNumbers={true}
                  required={true}
                  onChange={this.onChange}
                  value={this.state.date}
                />
                </div>
                <hr />
               


                
                
            
                
                <Button  onClick={this.handleOnClick}variant="warning"> Book Now</Button>
                </div>

             
                </Col>
            </Row>
            </Container>
        )
    }
}