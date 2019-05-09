import React from 'react';
// import JqxScheduler from '../../assets/jqwidgets-react/react_jqxscheduler.js';
// import JqxScheduler from '../../../node_modules/jqwidgets-scripts/jqwidgets-react/react_jqxscheduler';
// const $ = window.$;

export default class Scheduler extends React.Component {


    componentDidMount() {

    }

    render () {
    //   let appointments = new Array();
    //   let appointment1 = {
    //       id: "id1",
    //       description: "George brings projector for presentations.",
    //       location: "",
    //       subject: "Quarterly Project Review Meeting",
    //       calendar: "Room 1",
    //       start: new Date(2016, 10, 23, 9, 0, 0),
    //       end: new Date(2016, 10, 23, 16, 0, 0)
    //   };
    //   let appointment2 = {
    //       id: "id2",
    //       description: "",
    //       location: "",
    //       subject: "IT Group Mtg.",
    //       calendar: "Room 2",
    //       start: new Date(2016, 10, 24, 10, 0, 0),
    //       end: new Date(2016, 10, 24, 15, 0, 0)
    //   };
    //   appointments.push(appointment1);
    //   appointments.push(appointment2);
   
    //   let source =
    //   {
    //       dataType: "array",
    //       dataFields: [
    //           { name: 'id', type: 'string' },
    //           { name: 'description', type: 'string' },
    //           { name: 'location', type: 'string' },
    //           { name: 'subject', type: 'string' },
    //           { name: 'calendar', type: 'string' },
    //           { name: 'start', type: 'date' },
    //           { name: 'end', type: 'date' }
    //       ],
    //       id: 'id',
    //       localData: appointments
    //   };
    //   let dataAdapter = new window.$.jqx.dataAdapter(source);
   
    //   let resources =
    //   {
    //       colorScheme: "scheme05",
    //       dataField: "calendar",
    //       orientation: "horizontal",
    //       source:  new window.$.jqx.dataAdapter(source)
    //   };
   
    //   let appointmentDataFields =
    //   {
    //       from: "start",
    //       to: "end",
    //       id: "id",
    //       description: "description",
    //       location: "place",
    //       subject: "subject",
    //       resourceId: "calendar"
    //   };
   
    //   let views =
    //   [
    //       { type: 'dayView', showWeekends: true },
    //       { type: 'weekView', showWeekends: true },
    //       { type: 'monthView' }
    //   ];
      return (
          <div></div>
        //   <JqxScheduler ref='myScheduler'
        //       width={850} height={600} source={dataAdapter} dayNameFormat={'abbr'}
        //       date={new window.$.jqx.date(2016, 11, 23)} showLegend={true}
        //       view={'weekView'} resources={resources} views={views}
        //       appointmentDataFields={appointmentDataFields} resourceId={1}
        //   />
      )
    }
}