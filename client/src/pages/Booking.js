import React from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Container} from "../components/Grid/index";
import Button from "react-bootstrap/Button";
import "./Booking.css";
import DateTimePicker from "react-datetime-picker";
import ImageUploader from 'react-images-upload';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import axios from "axios";
import moment from "moment";
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
            redirect: false
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
    
    onChange = (date) => {
        this.setState({ date })
        console.log(date)
        console.log(moment(date).valueOf())
    
    };

    onDrop = (picture) => {
        this.setState({
            clientImages: this.state.clientImages.concat(picture),
        });   
    };

    handleOnClick = event => {
        const urlParams = new URLSearchParams(window.location.search);
        const appointmentInfo = {
            technician: window.location.pathname.split("/")[2],
            service: urlParams.get("service"),
            style: urlParams.get("style"),
            date: moment(this.state.date).valueOf()
        }
        if (this.state.specifications) {
            appointmentInfo.specifications = this.state.specifications;
        }
        const formData = new FormData();
        Object.keys(appointmentInfo).forEach(key => {
            formData.append(key,appointmentInfo[key])
        });
        axios.post("/api/appointments", formData)
        .then(res => {
            this.setState({
                redirect: true
            })
        })
    }
    

 
    

    render() {

        return (
            <Container className="main" fluid >
            {this.state.redirect ? <Redirect to="/myappointments" /> : ""}
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
                <strong>Example Images:</strong><i style={{float:"right"}}>(Optional)</i> 
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
                <strong>Any Specifications:</strong><i style={{float:"right"}}>(Optional)</i> 
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