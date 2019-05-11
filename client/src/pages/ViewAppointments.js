import React, {Component} from 'react'
import moment from 'moment'
//import 'moment/locale/zh-cn';
import { Col , Row , Container } from "../components/Grid/index";
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'
import 'react-big-scheduler/lib/css/style.css'
import axios from 'axios';

class Basic extends Component{
    constructor(props){
        super(props);

        //let schedulerData = new SchedulerData(new moment("2019-12-18").format(DATE_FORMAT), ViewTypes.Week);
        let schedulerData = new SchedulerData(new moment(Date.now()).format('L'), ViewTypes.Week, false, false, {
            startResizable: false,
            endResizable: false,
            movable: false,
            creatable: false
        });
        // schedulerData.localeMoment.locale('en');
        schedulerData.setResources(DemoData.resources);
        let events = DemoData.events.map(event => {
            event.start = moment(event.start).add(2,"year").format("YYYY-MM-DD HH:mm:ss");
            event.end = moment(event.end).add(2,"year").format("YYYY-MM-DD HH:mm:ss");
            return event;
        });
        console.log("DemoData: ", DemoData);
        console.log("Changed events: ", events)
        schedulerData.setEvents(events);
        this.state = {
            viewModel: schedulerData,
            events: []
        }
    }

    componentDidMount(props) {
        axios.get("/api/appointments")
        .then(res => {
            // let schedulerData = new SchedulerData(new moment(Date.now()).format('L'), ViewTypes.Week, false, false, {
            //     // minuteStep: 15
            // });
            let schedulerData = this.state.viewModel;
            console.log("DemoData: ", DemoData);
            schedulerData.setEvents(this.state.events);
            const appointments = res.data;
            console.log("Appointments: ",appointments);
            let names = appointments.map(appointment => ({
                id: appointment.technicianId ? appointment.technicianId : appointment.clientId,
                name: appointment.technician ? appointment.technician : appointment.client
            }));
            let index = 1;
            let events = appointments.map(appointment => ({
                id: index++,
                resourceId: appointment.technicianId ? appointment.technicianId : appointment.clientId,
                title: `Service: ${appointment.service} \n Style: ${appointment.style}`,
                start: moment(appointment.date).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),
                end: moment(appointment.date).add(2,"day").add(2, 'hour').format("YYYY-MM-DD HH:mm:ss"),
                bgColor: '#f759ab'
            }));
            console.log("List of names: ", names);
            console.log("List of events: ", events);
            schedulerData.setResources(names);
            schedulerData.setEvents(events);
            this.setState({
                viewModel: schedulerData,
                events: events
            });
            console.log(this.state.events);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        const {viewModel} = this.state;
        return (
            <Container fluid className="main">
                <Row>
                    <Scheduler schedulerData={viewModel}
                               prevClick={this.prevClick}
                               nextClick={this.nextClick}
                               onSelectDate={this.onSelectDate}
                               onViewChange={this.onViewChange}
                               eventItemClick={this.eventClicked}
                               viewEventClick={this.ops1}
                               viewEventText="Reschedule"
                               viewEvent2Text="Cancel"
                               viewEvent2Click={this.ops2}
                               updateEventStart={this.updateEventStart}
                               updateEventEnd={this.updateEventEnd}
                               moveEvent={this.moveEvent}
                               newEvent={this.newEvent}
                    />
                </Row>
            </Container>
        )
    }

    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(this.state.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(this.state.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(this.state.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(this.state.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops1 = (schedulerData, event) => {
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        let newFreshId = 0;
        schedulerData.events.forEach((item) => {
            if(item.id >= newFreshId)
                newFreshId = item.id + 1;
        });

        let newEvent = {
            id: newFreshId,
            title: 'New event you just created',
            start: start,
            end: end,
            resourceId: slotId,
            bgColor: 'purple'
        }
        schedulerData.addEvent(newEvent);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventStart = (schedulerData, event, newStart) => {
        schedulerData.updateEventStart(event, newStart);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        schedulerData.updateEventEnd(event, newEnd);
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
            viewModel: schedulerData
        })
    }
}

export default withDragDropContext(Basic)