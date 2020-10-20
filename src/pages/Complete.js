import React from 'react';
import Header from './Header.js';
import {
     Button,
} from '@momentum-ui/react';

class CompletePage extends React.Component{

    render() {
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
                <div className="row large-offset-1">
                    <div className="large-8 columns" style={hideGrid}>
                        <h1>Classes</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default CompletePage;

//        window.open('https://teams.webex.com/spaces/spaceID/chat','_blank');
