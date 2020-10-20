import React from 'react';
import readXlsxFile from 'read-excel-file'
import {
    Button,
} from '@momentum-ui/react';
import {
    Redirect,
} from 'react-router-dom';
import Header from './Header.js';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            studentList: null,
            lastIndex: 1,
        }
        this.fileRef = React.createRef();
        this.uploadClicked = this.uploadClicked.bind(this);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

     componentDidMount(props) {
         const fileObj = JSON.parse(sessionStorage.getItem('uploadedFile'));
         const studentObj = JSON.parse(sessionStorage.getItem('studentList'));
         if (fileObj !== null) {
             this.setState({ uploadedFile: fileObj });
         }
         if (studentObj !== null) {
             this.setState({ studentList: studentObj });
         }
     }

    uploadClicked(e) {
        if (this.state.uploadedFile === null ) {
            this.fileRef.current.click();
        } else {
            this.setState({
                uploadedFile: null,
                studentList: null,
            });
        }
    }

    onSelectFile(e) {
        e.stopPropagation();
        e.preventDefault();
        var file = e.target.files[0];
        this.setState({
            uploadedFile: file.name,
        });
        const schema = {
                        'First Name': {
                            prop: 'firstName',
                            type: String,
                            required: true
                        },
                        'Last Name': {
                            prop: 'lastName',
                            type: String,
                            required: true
                        },
                        'Email': {
                            prop: 'email',
                            type: String,
                            required: true
                        },
                    }
        readXlsxFile(file, { schema })
        .then(({ rows, errors }) => {
            if (errors.length === 0) {
                const students = rows.map(item => {
                    item.studentId = this.state.lastIndex;
                    this.setState({ lastIndex: this.state.lastIndex + 1 });
                    return item;
                });

                this.setState({
                  studentList: students
                });
            } else {
                alert('Invalid file. Kindly follow file Template!')
            }
        });
    }

    downloadClicked(e) {
        window.location.href=`${process.env.PUBLIC_URL}/studentList.xlsx`;
    }

    cancelClick(e) {
        this.props.history.push('/classroomSetup');
    }

    saveClick(e) {
        sessionStorage.setItem('studentList',JSON.stringify(this.state.studentList));
        sessionStorage.setItem('uploadedFile',JSON.stringify(this.state.uploadedFile));

        this.props.history.push('/addStudents');
    }

    render() {
        const token = sessionStorage.getItem('access_token');
        if (token === null) {
            return <Redirect to='/'/>;
        }

        const hideGrid = {
            marginTop: 20
        };

        let uploadedFile = this.state.uploadedFile;

        return (
            <div className="grid" style={{paddingTop:20}}>
                <Header tab='file'/>
                <div className="row large-offset-1">
                    <div className="columns large-6" style={hideGrid}>
                        <div className="row">
                            <p style={{fontSize:16}}>Upload Students information from an excel file (.XLS or .XLSX). Files
                            must adhere to the format shown to the right.</p>
                        </div>
                        <div className="row" style={hideGrid}>
                            <t style={uploadedFile === null ? {display: "none"} : {marginRight: 20}}>{uploadedFile}</t>
                            <input type="file" ref={this.fileRef} style={{display: "none"}} onChange={this.onSelectFile}/>
                            <Button
                                children={uploadedFile === null ? 'Upload from file' : 'Delete'}
                                color='blue'
                                onClick={this.uploadClicked}
                                ariaPressed={false}
                              />
                              <Button
                                  children='Download Template'
                                  color='blue-outline'
                                  onClick={this.downloadClicked}
                                  ariaPressed={false}
                                />
                         </div>
                    </div>
                    <div className="columns large-6" style={hideGrid}>
                        <img  alt="fileImageHolder" src="fileImageHolder.png"/>
                    </div>
                </div>
                <div className="row large-offset-1" style={{marginTop:40, marginLeft:10}}>
                    <div className="large-2 columns">
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

export default FileUpload;
