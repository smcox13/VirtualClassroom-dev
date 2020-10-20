import React from 'react';
import {
    Input,
    Button,
    Select,
    SelectOption,
    DatePicker,
    TimePicker,
    ToggleSwitch,
} from '@momentum-ui/react';
import {
    Redirect,
} from 'react-router-dom';
import Header from './Header.js';

class GeneralForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: null,
            courseNumber: null,
            period: '1',
            startTime: '12:00PM',
            endTime: '1:00PM',
            recurrence: 'Daily (M-F)',
            date: new Date(),
            classNameError: {},
            courseNumberError: {},
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.startTimeSelected = this.startTimeSelected.bind(this);
        this.endTimeSelected = this.endTimeSelected.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);

    }

     componentDidMount(props) {
         const obj = JSON.parse(sessionStorage.getItem('classObj'));
         if (obj !== null) {
             this.setState({
                 className: obj.className,
                 courseNumber: obj.courseNumber,
                 period: obj.period,
                 startTime: obj.startTime,
                 endTime: obj.endTime,
                 recurrence: obj.recurrence,
                 date: obj.date,
             });
         }
     }

     simulateClick(e) {
         if (e !== null) {
             e.handleInputClick();
         }
     }

     onTextChange(e) {
         const target = e.target;
         const value = target.value;
         const name = target.name;

         let errorMsg = {};
         if (value === '') {
             errorMsg = { message: 'Please enter Class information', type: 'error' };
         }
         this.setState({
           [name]: value,
           [`${name}Error`]: errorMsg,
         });

     }

     startTimeSelected = (h,m,z) => {
         let day = 'AM';
         let hour = h-12 > 0 ? h-12 : h;
         if (h-12 >= 0) {
             day = 'PM';
         }
         if (hour === 0) {
             hour = 12;
         }
         this.setState({
            startTime: `${hour}:${m}${day}`,
         });
     }

     endTimeSelected = (h,m,z) => {
         let day = 'AM';
         let hour = h-12 > 0 ? h-12 : h;
         if (h-12 >= 0) {
             day = 'PM';
         }
         if (hour === 0) {
             hour = 12;
         }
         this.setState({
            endTime: `${hour}:${m}${day}`,
         });
     }

     toggleSwitch(e) {

     }

     cancelClick(e) {
         sessionStorage.removeItem('classObj');
         sessionStorage.removeItem('studentList');
         sessionStorage.removeItem('uploadedFile');
         this.props.history.push('/addClasses');
     }

     saveClick(e) {
         e.preventDefault();
         if (this.state.className === null) {
             this.setState({
                 classNameError: { message: 'Please enter Class Name.', type: 'error' },
             });
         } else if (this.state.courseNumber === null) {
             this.setState({
                 courseNumberError: { message: 'Please enter student Course Number.', type: 'error' },
             });
         } else {
             let newClass = {
                 className: this.state.className,
                 courseNumber: this.state.courseNumber,
                 period: this.state.period,
                 startTime: this.state.startTime,
                 endTime: this.state.endTime,
                 recurrence: this.state.recurrence,
                 lastDay: this.state.date,
             };

             this.setState({
                 classObj: newClass,
             });

             sessionStorage.setItem('classObj',JSON.stringify(newClass));

              this.props.history.push('/fileUpload');
         }
     }

    render() {
        const token = sessionStorage.getItem('access_token');
        if (token === null) {
            return <Redirect to='/'/>;
        }

        const hideGrid = {
            // background:'white',
            // borderColor:'white'
            marginTop: 20
        };

        let className = this.state.className;
        let courseNumber = this.state.courseNumber;
        let period = this.state.period;
        let recurrence = this.state.recurrence;
        let startTime = this.state.startTime;
        let endTime = this.state.endTime;
        let date = this.state.date;

        return (
            <div className="grid" style={{paddingTop:20}}>
                <Header tab='general'/>
                <div className="row large-offset-1">
                    <div className="columns large-11" style={hideGrid}>
                        <p style={{fontSize:16}}>Enter Class Name, Course Number, and select the Period. This information will be used to create the title of the space that will be
                            generated in Webex Teams. If you need to change anything, you’ll be able to edit this information later.</p>
                    </div>
                </div>
                <div className="row large-offset-1">
                    <div className="columns large-4" style={hideGrid}>
                        <Input
                            name='className'
                            label='Class Name*'
                            type='text'
                            inputSize='large-15'
                            placeholder='e.g. Algebra'
                            value={className}
                            onChange={this.onTextChange}
                            messageArr={[ this.state.classNameError ]}
                            htmlId='className'
                          />
                    </div>
                    <div className="columns large-4" style={hideGrid}>
                        <Input
                            name='courseNumber'
                            label='Course Number*'
                            type='text'
                            inputSize='large-15'
                            placeholder='123456'
                            value={courseNumber}
                            onChange={this.onTextChange}
                            messageArr={[ this.state.courseNumberError ]}
                            htmlId='courseNumber'
                          />
                    </div>
                    <div className="columns large-4" style={hideGrid}>
                        Period
                        <Select className='hide-grid' defaultValue={period} color='white' onSelect={(e, opts) => {this.setState({period: e[0].value})}}>
                          <SelectOption value='1' label='1' />
                          <SelectOption value='3' label='3' />
                          <SelectOption value='6' label='6' />
                        </Select>
                    </div>
                </div>
                <div className="row large-offset-1" >
                    <div className="columns large-11" style={hideGrid}>
                        <p style={{fontSize:16}}>Enter the scheduling information for this class. Using this infomartion, a series of meeting from now until the end of the year will be created. Don’t worry, you can make changes later.</p>
                    </div>
                </div>
                <div className="row large-offset-1">
                    <div className="columns large-2" style={hideGrid}>
                        Start Time*
                        <TimePicker
                            selectedTime={new Date()}
                            inputId='startTime'
                            onChange={this.startTimeSelected}
                        />
                        End Time*
                        <TimePicker
                            selectedTime={new Date()}
                            inputId='endTime'
                            onChange={this.endTimeSelected}
                        />
                        Recurrence
                        <Select defaultValue={recurrence} onSelect={(e, opts) => {this.setState({recurrence: e[0].value})}}>
                          <SelectOption value='Monday' label='Monday' />
                          <SelectOption value='Tuesday' label='Tuesday' />
                          <SelectOption value='Wednesday' label='Wednesday' />
                          <SelectOption value='Thursday' label='Thursday' />
                          <SelectOption value='Friday' label='Friday' />
                          <SelectOption value='Daily (M-F)' label='Daily (M-F)' />
                        </Select>
                    </div>
                    <div className="columns large-8" style={{marginTop:10}}>
                        <DatePicker direction='bottom-left' shouldCloseOnSelect={false} onSelect={(e, date) => this.setState({ date: date })} ref={this.simulateClick}>
                            <Input style={{background:'transparent'}}
                                inputSize='large-10'
                                value='Last Day*'
                                readOnly
                              />
                        </DatePicker>
                    </div>
                </div>
                <div className="row large-offset-1">
                    <div className="columns large-11" style={{marginTop:35}}>
                        <p style={{fontSize:16}}>The Attendance Log tracks attendance of students for the class meeting you set up with this tool.</p>
                    </div>
                </div>
                <div className="row large-offset-1">
                    <div className="columns large-2" style={hideGrid}>
                        <h3>Attendance Log</h3>
                    </div>
                    <div className="columns large-10" style={{marginTop:25}}>
                        <ToggleSwitch
                                checked={true}
                                onChange={this.toggleSwitch}
                                htmlId='testToggleSwitch1'
                          />
                    </div>
                </div>
                <div className="row large-offset-1" style={{marginTop:40}}>
                    <div className="large-2 columns">
                        <Button
                            children='Cancel'
                            color='blue-outline'
                            onClick={this.cancelClick}
                            style={{color:'blue',borderRadius:5}}
                            ariaPressed={false}
                          />
                    </div>
                    <div className="large-1 columns">
                        <Button
                            children='Continue'
                            color='blue'
                            onClick={this.saveClick}
                            ariaPressed={false}
                          />
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralForm;

/*
<t>Last Day*</t>
*/

/*
<Input
name='startTime'
label='Start Time*'
type='text'
inputSize='large-15'
placeholder='8:40 AM'
value={this.startTime}
htmlId='startTime'
/>
<Input
name='endTime'
label='End Time*'
type='text'
inputSize='large-15'
placeholder='9:30 AM'
value={this.endTime}
htmlId='endTime'
/>
*/
