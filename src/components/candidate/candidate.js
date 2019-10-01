import React, { Component } from 'react';

export default class Candidate extends Component {

    constructor(props){
        super(props);
        this.state = { 
          firstname: '', lastname: '', email: '', phone: '',
          school: '', degree: '', startmonth: '', startyear: '', endmonth: '', endyear: '',
          companyname: '', position: '', companymonthstarted: '', companyyearstarted: '', 
          companymonthended: '', companyyearended: '', positioninfo1: '', positioninfo2: '', positioninfo3: '',
        };
    }

    handleChange = ({ target }) => {
        this.setState ({ [target.name]: target.value })
    };

    render() {
    return (
      <React.Fragment>
        <div>
          <h2>
            Please Enter Candidate Information Below:
          </h2>
        </div>
        <div>
          <form>
            <label>
              First Name: 
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
            </label>
            <a></a>
            <label>
              Last Name: 
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
            </label>
            <div>
            <label>
              Email Adress: 
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}
              />
            </label>
            <label>
              Phone Number: 
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
              <h2>
                Please Enter Education Information Below:
              </h2>
            </div>
            <div>
            <label>
              School Name: 
              <input type="text" name="school" value={this.state.school} onChange={this.handleChange}/>
            </label>
            <a></a>
            <label>
              Degree: 
              <input type="text" name="degree" value={this.state.degree} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
              Month started: 
              <input type="text" name="startmonth" value={this.state.startmonth} onChange={this.handleChange}/>

            </label>
            <label>
              Year started: 
              <input type="text" name="startyear" value={this.state.startyear} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
              Month ended: 
              <input type="text" name="endmonth" value={this.state.endmonth} onChange={this.handleChange}/>
            </label>
            <label>
              Year ended: 
              <input type="text" name="endyear" value={this.state.endyear} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
          <h2>
            Please Enter Work History Below:
          </h2>
        </div>
        <div>
          <form>
            <label>
              Company Name: 
              <input type="text" name="companyname" value={this.state.companyname} onChange={this.handleChange}/>
            </label>
            <a></a>
            <label>
              Position: 
              <input type="text" name="position" value={this.state.position} onChange={this.handleChange}/>
            </label>
            <div>
            <label>
              Month started: 
              <input type="text" name="companymonthstarted" value={this.state.companymonthstarted} onChange={this.handleChange}/>
            </label>
            <label>
              Year started: 
              <input type="text" name="companyyearstarted" value={this.state.companyyearstarted} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
              Month ended: 
              <input type="text" name="companymonthended" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            <label>
              Year ended: 
              <input type="text" name="companyyearended" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
              1st bullet of information: 
              <input type="text" name="positioninfo1" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
              2nd bullet of information: 
              <input type="text" name="positioninfo2" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
              3rd bullet of information: 
              <input type="text" name="positioninfo3" value={this.state.phone} onChange={this.handleChange}/>
            </label>
            </div>
          </form>
        </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}