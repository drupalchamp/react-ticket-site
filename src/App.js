import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import config from './config';

// import Header from "./Components/Header/Header";

import No404Page from "./Pages/No404Page";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import HelpPage from "./Pages/HelpPage";
import LoginPage from "./Pages/LoginPage";
import PasswordPage from "./Pages/PasswordPage";
import PayTicketSearchPage from "./Pages/PayTicketSearchPage";
import PayTicketPage from "./Pages/PayTicketPage";
import PayTicketStatusPage from "./Pages/PayTicketStatusPage";
import Dashboard from "./Pages/Staff/Dashboard";
import CreateTicketPage from "./Pages/Staff/CreateTicket";
import SearchTicketPage from "./Pages/Staff/SearchTicket";
import EditTicketPage from "./Pages/Staff/EditTicket";
import ReportPage from "./Pages/Staff/Report";
import BulkPendingTicketPage from "./Pages/Staff/BulkPendingTicket";
import ReportGraphPage from "./Pages/Staff/ReportGraph";
import ReportDailyPage from "./Pages/Staff/ReportDaily";
import ReportWeeklyPage from "./Pages/Staff/ReportWeekly";
import ReportMonthlyPage from "./Pages/Staff/ReportMonthly";
import ReportYearlyPage from "./Pages/Staff/ReportYearly";

//node ticket json data url
const TICKET_URL = `${config.base}jsonapi/node/ticket`;

//url for all taxonomy related to ticket
const TAXONOMY_URL = {
  "action_taken"            : `${config.base}jsonapi/taxonomy_term/action_taken`,
  "additional_action"       : `${config.base}jsonapi/taxonomy_term/additional_action`,
  "civic_address"           : `${config.base}jsonapi/taxonomy_term/civic_address`,
  "class"                   : `${config.base}jsonapi/taxonomy_term/class`,
  "color"                   : `${config.base}jsonapi/taxonomy_term/color`,
  "community"               : `${config.base}jsonapi/taxonomy_term/community`,
  "division_detachment"     : `${config.base}jsonapi/taxonomy_term/division_detachment`,
  "make_model"              : `${config.base}jsonapi/taxonomy_term/model`,
  "motor_vehicle_act_violation": `${config.base}jsonapi/taxonomy_term/violation`,
  "officer_call_sign"       : `${config.base}jsonapi/taxonomy_term/officer`,
  "parking_lot"             : `${config.base}jsonapi/taxonomy_term/parking_lot`,
  "plate_code"              : `${config.base}jsonapi/taxonomy_term/plate_code`,
  "province"                : `${config.base}jsonapi/taxonomy_term/province`,
  "ticket_type"             : `${config.base}jsonapi/taxonomy_term/ticket_type`,
}

class App extends Component {
  intervalID;
  constructor(props) {
    super(props);
    
    this.state = {
      ticket_data_raw: null,
      ticket_data:null,
      taxonomy_data:null,
      loading: true,
      isAuthed: localStorage.getItem( 'isAuthed' ) || false,
    };
    this.loadTickets = this.loadTickets.bind(this);
    this.loadAllData = this.loadAllData.bind(this);
    this.filter_ticket = this.filter_ticket.bind(this);
  }

  componentDidMount() {
    this.loadAllData();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  async loadAllData(){
    await this.loadTaxonomy();
    //console.log(`Taxonomy loaded`);
    //console.log(this.state.taxonomy_data);

    await this.loadTickets();
    //console.log(`Tickets loaded`);
    //console.log(this.state.ticket_data_raw);

    this.filter_ticket();
    //console.log(`Tickets filtered`);
    //console.log(this.state.ticket_data);

    this.setState({loading: false});

    //Reload Json data at specific interval - 30sec
    this.intervalID = setTimeout(this.loadAllData, 30000);
    //console.log(`All data reloaded.`);
  }

  async loadTaxonomy(){
    var taxonomyList = {};
    for (let [key, value] of Object.entries(TAXONOMY_URL)) {
      //console.log(`link: ${value}, name: ${key}`);

      //fetch taxonomy data from JSON api
      var taxonomyData = await fetch(value, {mode:'cors'})
        .then(function (response) {
          return response.json();
        })
        .then((data) => {return data.data})
        .catch(err => console.log('Fetching Taxonomy Failed', err));

      //filter taxonomy data
      var item ={};
      for(var i in taxonomyData) {
        item[taxonomyData[i].id] = taxonomyData[i].attributes.name;
      }
      taxonomyList[key] = item;
    }
    //console.log(taxonomyList);
    this.setState({taxonomy_data: taxonomyList});    
  }

  async loadTickets() {
    // Fetch Tickets.
    await fetch(TICKET_URL, {mode:'cors'})
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.setState({ticket_data_raw: data.data}))
      .catch(err => console.log('Fetching Tickets Failed', err));
  }

  render() {
    return (
      <div className="App">
        {/* <Header></Header> */}
        <Router>
          <>
            { 
              !this.state.isAuthed ?  
              <>
              <Switch>
                <Route path="/" render={(props) => <HomePage {...props} />} exact />
                <Route path="/home" render={(props) => <HomePage {...props} />} exact />
                <Route path="/login" render={(props) => <LoginPage {...props} />} exact />
                {/* <Route path="/login" render={(props) => <LoginPage {...props} loginHandler={this.loginHandler}/>} exact /> */}
                <Route path="/password" render={(props) => <PasswordPage {...props} />} exact />
                <Route path="/pay-ticket-online" render={(props) => <PayTicketSearchPage {...props} />} exact />
                {/* TODO: proper auth for below 2 page and 404 page */}
                <Route path="/ticket-pay" render={(props) => <PayTicketPage {...props} />} exact />  
                <Route path="/ticket-status" render={(props) => <PayTicketStatusPage {...props} />} exact />
                <Route path='*' exact={true} component={No404Page} loading={this.state.loading}/>
              </Switch>
              </>
              : 
              <>
              <Switch>
                <Route path="/" render={(props) => <Dashboard {...props} />} exact />
                <Route path="/home" render={(props) => <Dashboard {...props} />} exact />
                <Route path="/dashboard" render={(props) => <Dashboard {...props} />} exact />
                <Route path="/ticket-add" render={(props) => <CreateTicketPage {...props} />} exact />
                <Route path="/tickets" render={(props) => <SearchTicketPage {...props} tickets={this.state.ticket_data} loading={this.state.loading} />} exact />
                <Route path="/ticket-edit" render={(props) => <EditTicketPage {...props} />}  />
                <Route path="/reports" render={(props) => <ReportPage {...props} />} exact />
                <Route path="/bulk-pending-tickets" render={(props) => <BulkPendingTicketPage {...props} />} exact />
                <Route path="/graph-report" render={(props) => <ReportGraphPage {...props} tickets={this.state.ticket_data} loading={this.state.loading} />} exact />
                <Route path="/reports-by-day" render={(props) => <ReportDailyPage {...props} tickets={this.state.ticket_data} loading={this.state.loading} />} exact />
                <Route path="/reports-by-week" render={(props) => <ReportWeeklyPage {...props} tickets={this.state.ticket_data} loading={this.state.loading} />} exact />
                <Route path="/reports-by-month" render={(props) => <ReportMonthlyPage {...props} tickets={this.state.ticket_data} loading={this.state.loading} />} exact />
                <Route path="/reports-by-year" render={(props) => <ReportYearlyPage {...props} tickets={this.state.ticket_data} loading={this.state.loading} />} exact />
                <Route path="/about" render={(props) => <AboutPage {...props} />} exact />
                <Route path="/help" render={(props) => <HelpPage {...props} />} exact />
                {/* TODO: proper auth for below 2 page and 404 page */}
                <Route path="/ticket-pay" render={(props) => <PayTicketPage {...props} />} exact />  
                <Route path="/ticket-status" render={(props) => <PayTicketStatusPage {...props} />} exact />
                <Route path='*' exact={true} component={No404Page} loading={this.state.loading}/>
              </Switch>
              </>
            }
            
          </>
        </Router>
        
        {/* <p>Original Ticket Data---------------------</p>
        <pre>{JSON.stringify(this.state.ticket_data_raw, null, 2) }</pre> */}

        {/* <p>Original Taxonomy Data---------------------</p>
        <pre>{JSON.stringify(this.state.taxonomy_data, null, 2) }</pre> */}
      </div>
    );
  }

  async filter_ticket(){
    //console.log(`inside filter ticket`);
    var taxonomy_data = this.state.taxonomy_data;
    //console.log(taxonomy_data);
    var tickets= this.state.ticket_data_raw;
    //console.log(tickets);
    var tickets_filtered = [];
    for(var key in tickets) {
      var item ={};
      item['id'] = tickets[key].attributes.drupal_internal__nid;
      item['title'] = tickets[key].attributes.title;
      item['field_date'] = tickets[key].attributes.field_date;
      item['field_payment_status'] = tickets[key].attributes.field_payment_status;
      item['field_permit_no'] = tickets[key].attributes.field_permit_no_;
      item['field_plate_no'] = tickets[key].attributes.field_plate_no_;
      item['field_price'] = tickets[key].attributes.field_price;
      item['field_remarks'] = tickets[key].attributes.field_remarks;
      item['field_ticket_time'] = tickets[key].attributes.field_ticket_time;
      item['field_vehicle_reg_number'] = tickets[key].attributes.field_vehicle_reg_number;

      //REFERENCE FIELDS
      item['field_action_taken'] = taxonomy_data.action_taken[tickets[key].relationships.field_action_taken.data.id];
      //item['field_additional_action'] = tickets[key].relationships.field_additional_action.data.id;
      //item['field_civic_address'] = tickets[key].relationships.field_civic_address.data.id;
      item['field_class'] = taxonomy_data.class[tickets[key].relationships.field_class.data.id];
      item['field_color'] = taxonomy_data.color[tickets[key].relationships.field_color.data.id];
      item['field_community'] = taxonomy_data.community[tickets[key].relationships.field_community.data.id];
      item['field_division_detachment'] = taxonomy_data.division_detachment[tickets[key].relationships.field_division_detachment.data.id];
      item['field_make_model'] = taxonomy_data.make_model[tickets[key].relationships.field_make_model.data.id];
      //item['field_motor_vehicle_act_violatio'] = tickets[key].relationships.field_motor_vehicle_act_violatio.data.id;
      //item['field_officer_call_sign'] = tickets[key].relationships.field_officer_call_sign.data.id;
      //item['field_parking_lot'] = tickets[key].relationships.field_parking_lot.data.id;
      item['field_plate_code'] = taxonomy_data.plate_code[tickets[key].relationships.field_plate_code.data.id];
      item['field_province'] = taxonomy_data.province[tickets[key].relationships.field_province.data.id];
      item['field_ticket_type'] = taxonomy_data.ticket_type[tickets[key].relationships.field_ticket_type.data.id];

      //ALTERNATIVE solution for above fields with error
      item['field_additional_action'] = taxonomy_data.additional_action[this.getTicketRefDataId(tickets[key].relationships.field_additional_action.data)];
      item['field_civic_address'] = taxonomy_data.civic_address[this.getTicketRefDataId(tickets[key].relationships.field_civic_address.data)];
      item['field_motor_vehicle_act_violatio'] = taxonomy_data.motor_vehicle_act_violation[this.getTicketRefDataId(tickets[key].relationships.field_motor_vehicle_act_violatio.data)];
      item['field_officer_call_sign'] = taxonomy_data.officer_call_sign[this.getTicketRefDataId(tickets[key].relationships.field_officer_call_sign.data)];
      item['field_parking_lot'] = taxonomy_data.parking_lot[this.getTicketRefDataId(tickets[key].relationships.field_parking_lot.data)];

      tickets_filtered.push(item);
    }

    //save tickets_filtered;
    this.setState({ticket_data: tickets_filtered})
  }
  //ALTERNATIVE solution for extracting id from raw taxonomy data
  getTicketRefDataId(data){
    var id = null;
    for(var key in data) {
      id = data[key];
    }
    return id;
  }  
}

export default App;