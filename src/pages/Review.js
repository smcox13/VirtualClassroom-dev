import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Icon
} from '@momentum-ui/react';
import {
    Redirect,
} from 'react-router-dom';
import {requestCreateSpace} from './Orchestrator.js';
import Header from './Header.js';

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
            showActivity: false,
        };
        this.modalDialogRef = React.createRef();
        this.activityDialogRef = React.createRef();
        this.saveClick = this.saveClick.bind(this);
        this.editClass = this.editClass.bind(this);
        this.editStudents = this.editStudents.bind(this);
    }

    componentDidMount(){
        this.setState({
            showActivity: false,
        });
    }

    editClass(e) {
        this.props.history.push('/classroomSetup');
    }

    editStudents(e) {
        this.props.history.push('/addStudents');
    }

    saveClick(e) {
        this.modalDialogRef.current.closeModal();

        const studentObj = JSON.parse(sessionStorage.getItem('studentList'));
        let participants =  studentObj.map( function(student) {
            return ({email: student.email, privilege: 'member'});
        });

        const teacher = sessionStorage.getItem('userInfo');
        participants.push({email: teacher, privilege: 'owner'});

        const classObj = JSON.parse(sessionStorage.getItem('classObj'));
        let spaceInfo = {
            caseNumber: classObj.courseNumber,
            event: 'classroomSetup',
            teamId: '',
            title: classObj.className,
            type: 'internal',
            participants: participants
        };
        // console.log(spaceInfo);

        let classList = JSON.parse(localStorage.getItem('classList'));
        if (classList === null) {
            classList = [];
        }

        this.setState({
            showActivity: true,
        });

        (async () => {
            const spaceId = await requestCreateSpace(JSON.stringify(spaceInfo));

            this.setState({
                showActivity: false,
            });
            this.activityDialogRef.current.closeModal();

            let classroom = {
                name: `${classObj.period} Period: ${classObj.className}`,
                time: `${classObj.startTime} - ${classObj.endTime}, ${classObj.recurrence}`,
                spaceId: spaceId,
            };
            classList.push(classroom);

            localStorage.setItem('classList', JSON.stringify(classList));
            this.props.history.push('/addClasses');
        })();

    }

    render() {
        const token = sessionStorage.getItem('access_token');
        if (token === null) {
            return <Redirect to='/'/>;
        }

        const hideGrid = {
            marginTop: 20
        };

        const activity = {
            display: 'block',
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'gray',
        };
        let className = '';
        let courseNumber = '';
        let period = '';
        let time = '';
        let recurrence = '';
        let date = '';

        const obj = JSON.parse(sessionStorage.getItem('classObj'));
        if (obj !== null) {
            className = obj.className;
            courseNumber = obj.courseNumber;
            period = obj.period;
            time= `${obj.startTime} - ${obj.endTime}`;
            recurrence = obj.recurrence;
            date = obj.date;
        }
        let students = [];
        const studentObj = JSON.parse(sessionStorage.getItem('studentList'));
        if (studentObj !== null) {
            students = studentObj;
        }

        return (
            <div className="grid" style={{paddingTop:20}}>
                <Header tab='review'/>
                <div className="row large-offset-1"  style={hideGrid}>
                        <p style={{fontSize:16}}>Please review the information for the class to finish the set-up process.</p>
                </div>
                <div className="row large-offset-1" style={hideGrid}>
                    <b>General Info:</b>
                </div>
                <div className="row large-offset-1">
                    Class Name: {className}
                </div>
                <div className="row large-offset-1">
                    Course Number: {courseNumber}
                </div>
                <div className="row large-offset-1">
                    Period: {period}
                </div>
                <div className="row large-offset-1">
                    Time: {time}
                </div>
                <div className="row large-offset-1">
                    Recurrence: {recurrence}
                </div>
                <div className="row large-offset-1">
                    Last Day of Class: {date}
                </div>
                <div className="row large-offset-1">
                    <Button
                        children='Edit'
                        color='blue-outline'
                        onClick={this.editClass}
                        style={{color:'blue',borderRadius:5}}
                        ariaPressed={false}
                      />
                </div>
                <div className="row large-offset-1" style={hideGrid}>
                    <b>Students ({students.length} Added):</b>
                </div>
                {students.map(item => (
                    <div className="row large-offset-1"  key={item.studentId}>
                        <div className="large-3 columns">
                            {item.studentId}. {item.firstName} {item.lastName}
                        </div>
                        <div className="large-9 columns">
                             {item.email}
                        </div>
                    </div>
                ))}
                <div className="row large-offset-1">
                    <Button
                        children='Edit'
                        color='blue-outline'
                        onClick={this.editStudents}
                        style={{color:'blue',borderRadius:5}}
                        ariaPressed={false}
                      />
                </div>
                <div className="row large-offset-1" style={{marginTop:40}}>
                    <div className="large-2 columns">
                        <Button
                            children='Back'
                            color='blue-outline'
                            onClick={this.editStudents}
                            style={{color:'blue',borderRadius:5}}
                            ariaPressed={false}
                          />
                    </div>
                    <div className="large-1 columns">
                        <Button
                            children='Finish'
                            color='blue'
                            onClick={() => this.setState({showDialog: true})}
                            ariaPressed={false}
                          />
                    </div>
                </div>
                <Modal
                    icon={<Icon name="warning_72" color="$md-yellow-50"/>}
                    applicationId='app'
                    onHide={() => this.setState({showDialog: false})}
                    show={this.state.showDialog}
                    ref={this.modalDialogRef}
                    size='dialog'
                    htmlId='modalDialog'
                    >
                <ModalHeader
                    headerLabel='Confirm'
                />
                <ModalBody>
                    <span>Once you click “Finish & Create,” a Webex Teams space will be created with all of the students you added. Any changes can be made through the Webex Teams application.</span>
                </ModalBody>
                <ModalFooter>
                    <Button
                        children='Back to Set Up'
                        onClick={() => this.modalDialogRef.current.closeModal()}
                        ariaLabel='Close Modal'
                        color='default'
                    />
                    <Button
                        children='Finish & Create'
                        onClick={this.saveClick}
                        ariaLabel='Submit Form'
                        color='blue'
                    />
                </ModalFooter>
                </Modal>
                <Modal
                    onHide={() => this.setState({showDialog: false})}
                    show={this.state.showActivity}
                    ref={this.activityDialogRef}
                    size='dialog'
                    htmlId='activityDialog'
                    >
                <ModalHeader
                    headerLabel='Classroom Setup in progress...'
                />
                </Modal>
            </div>
        );
    }
}

export default Review;
