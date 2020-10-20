import React from 'react';
import {
     Button,
} from '@momentum-ui/react';
import {
    Redirect,
} from 'react-router-dom';
import Header from './Header.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.addClasses = this.addClasses.bind(this);
    }

    componentDidMount() {
    }

    addClasses = (event) => {
        this.props.history.push('/classroomSetup');
    }

    render() {
        const token = sessionStorage.getItem('access_token');
        if (token === null || token === undefined) {
            return <Redirect to='/'/>;
        }

        const classList = JSON.parse(localStorage.getItem('classList'));

        const hideGrid = {
            marginTop: 20
        };

        return (
            <div className="grid" style={{paddingTop:20}}>
                <Header />
                <div className="row large-offset-1">
                    <div className="columns large-6" style={hideGrid}>
                        For each class, we'll walk you through the set-up process. Youll need names and email addresses of students for the set-up process.
                    </div>
                </div>
                <div className="row large-offset-1">
                    <div className="large-3 columns" style={hideGrid}>
                        <Button
                            children='Add Class'
                            color='blue'
                            onClick={this.addClasses}
                            ariaPressed={false}
                          />
                    </div>
                </div>
                <div className="row large-offset-1" style={classList === null ? {hideGrid} : {display: "none"}}>
                    <div className="large-8 large-centered columns">
                        <img  alt="addClass" src="addClass.png"/>
                    </div>
                </div>
                <div className="row large-offset-1" style={classList === null ? {display: "none"} : {paddingTop: 40, paddingBottom: 20}}>
                    <h1>Classes</h1>
                </div>
                {classList !== null ? classList.map(item => (
                    <div className="row"  key={item.spaceId} style={{paddingLeft: '1%', width: '95%'}}>
                        <div className="large-10 columns">
                            {item.name}
                            <p>{item.time}</p>
                        </div>
                        <div className="large-2 columns">
                            <Button
                                children='Open in Teams'
                                color='blue'
                                onClick={() => window.open(`https://teams.webex.com/spaces/${item.spaceId}/chat`,'_blank')}
                                ariaPressed={false}
                              />
                        </div>
                        <hr style={{height: 1, width: '95%', border: 'none', color: 'grey', backgroundColor: 'grey'}}></hr>
                    </div>
                )) : <div></div>}
            </div>
        );
    }
}

export default Home;

/*
window.open('https://teams.webex.com/spaces/spaceID/chat','_blank');
*/
