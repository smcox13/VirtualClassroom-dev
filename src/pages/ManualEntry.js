import React from 'react';
import {
    Input,
    Button,
    EditableTextfield,
} from '@momentum-ui/react';
import {
    Redirect,
} from 'react-router-dom';
import {
    findIndex,
    without
} from 'lodash';
import Header from './Header.js';

class ManualEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentList: [],
            firstName: null,
            lastName: null,
            email: null,
            lastIndex: 1,
            firstNameError: {},
            lastNameError: {},
            emailError: {},
        };
        this.addInfo = this.addInfo.bind(this);
        this.updateInfo = this.updateInfo.bind(this);
        this.deleteInfo = this.deleteInfo.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    componentDidMount(props) {
        const studentObj = JSON.parse(sessionStorage.getItem('studentList'));
        if (studentObj !== null) {
            this.setState({
              lastIndex: studentObj.length + 1,
              studentList: studentObj
            });
        }
    }

    validateEmail() {
        this.setState({error: false});
        let email = this.state.mail;
        if (email === null) {
            this.setState({error: true});
            return;
        }
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              email.indexOf('@@') === -1 &&
              lastDotPos > 2 &&
             (email.length - lastDotPos) > 2)) {
                 this.setState({error: true});
        }
    }

    addInfo(e) {
        e.preventDefault();
        if (this.state.firstName === null) {
            this.setState({
                firstNameError: { message: 'Please enter student first name.', type: 'error' },
            });
        } else if (this.state.lastName === null) {
            this.setState({
                lastNameError: { message: 'Please enter student last name.', type: 'error' },
            });
        } else if (this.state.email === null) {
            this.setState({
                emailError: { message: 'Please enter student email.', type: 'error' },
            });
        } else {
            let newStudent = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                studentId: this.state.lastIndex,
            };
            let temp = this.state.studentList;
            temp.push(newStudent);
            this.setState({
                studentList: temp,
                lastIndex: this.state.lastIndex + 1,
            });
            this.setState({
              firstName: null,
              lastName: null,
              email: null,
            });

        }
    }

    cancelClick(e) {
        this.props.history.push('/fileUpload');
    }

    saveClick(e) {
        sessionStorage.setItem('studentList',JSON.stringify(this.state.studentList));

        this.props.history.push('/review');
    }

    onTextChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        let errorMsg = {};
        if (value === '') {
            errorMsg = { message: 'Please enter student information', type: 'error' };
        }
        this.setState({
          [name]: value,
          [`${name}Error`]: errorMsg,
        });
    }

    updateInfo(name, value, id) {
        let temp = this.state.studentList;
        let stdIndex = findIndex(this.state.studentList, {
          studentId: id
        });
        temp[stdIndex][name] = value;
        this.setState({
          studentList: temp
        });
    }

    deleteInfo(item) {
        let temp = this.state.studentList;
        temp = without(temp, item);
        this.setState({
          studentList: temp
        });
    }

    render() {
        const token = sessionStorage.getItem('access_token');
        if (token === null) {
            return <Redirect to='/'/>;
        }

        const hideGrid = {
            marginTop: 20
        };

        let students = this.state.studentList;

        return (
            <div className="grid" style={{paddingTop:20}}>
                <Header tab='manual'/>
                <div className="row large-offset-1">
                    <div className="columns large-10" style={hideGrid}>
                        <p style={{fontSize:16}}>Enter Students’ information manually.</p>
                    </div>
                </div>
                {students.map(item => (
                    <div className="row large-offset-1" key={item.studentId}>
                        <div className="row"  key={item.studentId}>
                            <div className="columns large-2" style={hideGrid}>
                                <EditableTextfield
                                        handleDoneEditing={(e, data) => this.updateInfo('firstName',data.value,item.studentId)}
                                        inputText={item.firstName}
                                      />
                            </div>
                            <div className="columns large-2" style={hideGrid}>
                                <EditableTextfield
                                        handleDoneEditing={(e, data) => this.updateInfo('lastName',data.value,item.studentId)}
                                        inputText={item.lastName}
                                      />
                            </div>
                            <div className="columns large-2" style={hideGrid}>
                                <EditableTextfield
                                        handleDoneEditing={(e, data) => this.updateInfo('email',data.value,item.studentId)}
                                        inputText={item.email}
                                      />
                            </div>
                            <div className="columns large-5" style={hideGrid}>
                                <Button
                                    children='Delete'
                                    color='blue-outline'
                                    onClick={(e) => this.deleteInfo(item)}
                                    style={{color:'blue',borderRadius:5}}
                                  />
                            </div>
                        </div>
                        <div className="row">
                            <hr style={{marginLeft: 20, height: 1, width: '95%', border: 'none', color: 'grey', backgroundColor: 'grey'}}></hr>
                        </div>
                    </div>
                ))}
                <div className="row large-offset-1">
                    <div className="columns large-4" style={hideGrid}>
                        <Input
                            name='firstName'
                            label='First Name'
                            type='text'
                            inputSize='large-15'
                            placeholder='Emily'
                            onChange={this.onTextChange}
                            messageArr={[ this.state.firstNameError ]}
                            htmlId='firstName'
                          />
                    </div>
                    <div className="columns large-4" style={hideGrid}>
                        <Input
                            name='lastName'
                            label='Last Name'
                            type='text'
                            inputSize='large-15'
                            placeholder='Henning'
                            onChange={this.onTextChange}
                            messageArr={[ this.state.lastNameError ]}
                            htmlId='lastName'
                          />
                    </div>
                    <div className="columns large-4" style={hideGrid}>
                        <Input
                            name='email'
                            label='Email'
                            type='email'
                            inputSize='large-15'
                            placeholder='emilyhenning@gmail.com'
                            onChange={this.onTextChange}
                            messageArr={[ this.state.emailError ]}
                            htmlId='email'
                          />
                    </div>
                </div>
                <div className="row">
                    <div className="columns large-offset-11 large-1" style={hideGrid}>
                        <Button
                            children='Add'
                            color='blue'
                            onClick={this.addInfo}
                            style={{color:'blue',borderRadius:5}}
                            ariaPressed={false}
                          />
                    </div>
                </div>
                <div className="row large-offset-1" style={{marginTop:40, marginLeft:10}}>
                    <div className="large-10 columns">
                        <Button
                            children='Back'
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

export default ManualEntry;
