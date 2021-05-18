import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
import { Right } from 'react-bootstrap/lib/Media';

//This Component is a child Component of Customers Component
export default class EmployeeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getEmployeeDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getEmployeeDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getEmployeeDetails(id) {
    axios.get('assets/json-response/employee' + id + '.json').then(response => {
      this.setState({employeeDetails: response})
    })
  };

  render() {
    if (!this.state.employeeDetails)
      return (<p>Loading Data</p>)
    return (<div className="employeeDetails">
      <Panel bsStyle="info" className="centeralign" >
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.employeeDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.employeeDetails.data.name}</p>
          <p>Email : {this.state.employeeDetails.data.email}</p>
          <p>Contact : {this.state.employeeDetails.data.contact}</p>
          <p>Contact-ext : {this.state.employeeDetails.data.contactext}</p>
          <p>Join Date: {this.state.employeeDetails.data.joindate}</p>
          <p>Join Date Format: {this.state.employeeDetails.data.joindateformat}</p>
          <p>Picture : {this.state.employeeDetails.data.medium}</p>
          <p>Team : {this.state.employeeDetails.data.team}</p>
          <p>Job Title: {this.state.employeeDetails.data.jobtitle}</p>
          <p>LoggedIN:  {this.state.employeeDetails.data.loggedIn}</p>
          
        </Panel.Body>
      </Panel>
    </div>)
  }
}