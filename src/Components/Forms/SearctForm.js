import React from 'react';
import './Form.css';

export default class CreateTicketForm extends React.Component {
  constructor() {
    super();
    var today = new Date(),
        date = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2);
    this.state = {
        date: date
    };
  }

  render() {
    return (
      <section className="whole-form-area form-full">
        {/*<h2 className="form-title">Staff Login</h2>*/}
        <div className="form-area">
          
          <form className="form" id="ticket-add-form" action="#" method="post" acceptCharset="UTF-8">
          <div className="row">
            
            <div className="col-md-4">

              <div className="form-fields-group">
                <div className="form-group">
                  <label className="form-label required">Ticket Type</label>
                  <select className="form-input form-select" name="field_ticket_type" required="required">
                    <option value={1} selected="selected">DAL - HALIFEX</option>
                    <option value={2}>Ticket type 1</option>
                    <option value={3}>Ticket type 2</option>
                    <option value={4}>Ticket type 3</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label required">Ticket Number</label>
                  <input className="form-input" type="text" name="field_ticket_no" required="required"/>
                </div>

                <div className="form-group">
                  <label className="form-label">Payment Status</label>
                  <select className="form-input form-select" name="field_payment_status">
                    <option value="_none" selected="selected">- None -</option>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </div>
                
              </div>

              <div className="form-group">
                <label className="form-label required">Province</label>
                <select className="form-input form-select" name="field_province" required="required" >
                  <option value={5} selected="selected">Nova Scotia</option>
                  <option value={6}>Province 1</option>
                  <option value={7}>Province 2</option>
                  <option value={8}>Province 3</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Plate Code</label>
                <select className="form-input form-select" name="field_plate_code">
                  <option value="_none" selected="selected">- None -</option>
                  <option value={9}>Canada Plates</option>
                  <option value={10}>India Plates</option>
                  <option value={11}>US Plates</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Color</label>
                <select className="form-input form-select" name="field_color">
                  <option value="_none">- None -</option>
                  <option value={13}>Color Black</option>
                  <option value={14}>Color Blue</option>
                  <option value={15}>Color Red</option>
                  <option value={12} selected="selected">Color Unknown</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">Civic Address</label>
                <select className="form-input form-select" name="field_civic_address" required="required">
                  <option value="_none">- Select a value -</option>
                  <option value={16}>Civic Address 1</option>
                  <option value={17}>Civic Address 2</option>
                  <option value={18}>Civic Address 3</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">

              <div className="form-fields-group">
                <div className="form-group">
                  <label className="form-label">Action Taken</label>
                  <select className="form-input form-select" name="field_action_taken">
                    <option value="_none" selected="selected">- None -</option>
                    <option value={20}>Action Taken 1</option>
                    <option value={21}>Action Taken 2</option>
                    <option value={22}>Action Taken 3</option>
                    <option value={19}>Placed Copy On Windshield</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label required">Additional Action</label>
                  <select className="form-input form-select" name="field_additional_action" required="required">
                    <option value="_none">- Select a value -</option>
                    <option value={23}>Additional Action 1</option>
                    <option value={24}>Additional Action 2</option>
                    <option value={25}>Additional Action 3</option>
                  </select>
                </div>
              </div>


              <div className="form-group">
                <label className="form-label required">Motor Vehicle Act Violation</label>
                <select className="form-input form-select" name="field_motor_vehicle_act_violatio" required="required">
                  <option value="_none">- Select a value -</option>
                  <option value={26}>Violation 1</option>
                  <option value={27}>Violation 2</option>
                  <option value={28}>Violation 3</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">Ticket Date</label>
                <input className="form-input form-date" title="Date (e.g. 2020-04-23)" type="date" min="1900-01-01" max="2050-12-31"  name="field_date" value={this.state.date} size="12" required="required"></input>
              </div>
              <div className="form-group">
                <label className="form-label required">Ticket Time</label>
                <input className="form-input form-time" type="time" name="field_ticket_time" required="required" value="10:59"></input>
              </div>
              <div className="form-group">
                <label className="form-label">Class</label>
                <select className="form-input form-select" name="field_class">
                  <option value="_none">- None -</option>
                  <option value={30}>Class 1</option>
                  <option value={31}>Class 2</option>
                  <option value={32}>Class 3</option>
                  <option value={29}>Passenger Vehicle</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">Plate No.</label>
                <input className="form-input" type="text" name="field_plate_no" required="required"/>
              </div>
            </div>

            <div className="col-md-4">

              <div className="form-group">
                <label className="form-label required">Permit No.</label>
                <input className="form-input" type="text" name="field_permit_no" required="required"/>
              </div>
              <div className="form-group">
                <label className="form-label">Make/Model</label>
                <select className="form-input form-select" name="field_make_model">
                  <option value="_none">- None -</option>
                  <option value={33}>Make/Model Unknown</option>
                  <option value={34}>Model 1</option>
                  <option value={35}>Model 2</option>
                  <option value={36}>Model 3</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Vehicle reg number</label>
                <input className="form-input" type="text" name="field_vehicle_reg_no"/>
              </div>
              <div className="form-group">
                <label className="form-label">Ticket Price</label>
                <input className="form-input" type="text" name="field_ticket_price"/>
              </div>
              <div className="form-group">
                <label className="form-label required">Parking Lot</label>
                <select className="form-input form-select" name="field_parking_lot" required="required">
                  <option value="_none">- Select a value -</option>
                  <option value={37}>Parking Lot 1</option>
                  <option value={38}>Parking Lot 2</option>
                  <option value={39}>Parking Lot 3</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Community</label>
                <select className="form-input form-select" name="field_community">
                  <option value="_none">- None -</option>
                  <option value={41}>Community 1</option>
                  <option value={42}>Community 2</option>
                  <option value={43}>Community 3</option>
                  <option value={40}>Halifax</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Division Detachment</label>
                <select className="form-input form-select" name="field_division_detachment">
                  <option value="_none">- None -</option>
                  <option value={45}>Division Detachment 1</option>
                  <option value={46}>Division Detachment 2</option>
                  <option value={47}>Division Detachment 3</option>
                  <option value={44}>Halifax</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label required">Officer (Call sign)</label>
                <select className="form-input form-select" name="field_officer_call_sign" required="required" >
                  <option value="_none">- Select a value -</option>
                  <option value={48}>Officer 1</option>
                  <option value={49}>Officer 2</option>
                  <option value={50}>Officer 3</option>
                </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">Remarks</label>
                <textarea className="form-input form-textarea" name="field_remarks" rows={5} cols={60} placeholder defaultValue={""} />
              </div>
            </div>
            
          </div>
          
            <div className="form-group form-control-area">
              <button className="button btn btn-primary btn_main" type="submit" value="Save Ticket">Save Ticket</button>
            </div>
          </form>
        </div>	
        <a href="/#">Skip</a>
      </section>
    );
  }
}