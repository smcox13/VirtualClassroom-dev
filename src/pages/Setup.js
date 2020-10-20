import React from 'react';
import { Avatar,
        Tab,
        TabContent,
        TabList,
        TabPane,
        Tabs,
 } from '@momentum-ui/react';
import GeneralForm from './GeneralForm.js';
import FileUpload from './FileUpload.js';
import ManualEntry from './ManualEntry.js';
import Review from './Review.js';

class Setup extends React.Component {
    render() {
        const hideGrid = {
            // background:'transparent',
            // borderColor:'transparent'
            marginTop: 20
        };

        return (
            <div className="grid" style={{paddingTop:30}}>
                <div className="row large-offset-1">
                    <div className="columns large-11" style={hideGrid}>
                        <h1>Classroom Set Up</h1>
                    </div>
                    <div className="columns large-1" style={hideGrid}>
                        <Avatar title="Barbara" src="http://react.collab-ui.com/barbara.png"/>
                    </div>
                </div>
                <div className="row large-offset-1">
                    <div className="columns large-12" style={hideGrid}>
                        <Tabs justified>
                          <TabList>
                            <Tab heading='General Info'/>
                            <Tab heading='Add Students (Upload)'/>
                            <Tab heading='Add Students (Manual)'/>
                            <Tab heading='Review'/>
                          </TabList>
                          <TabContent>
                            <TabPane>
                              <GeneralForm />
                            </TabPane>
                            <TabPane>
                              <FileUpload />
                            </TabPane>
                            <TabPane>
                              <ManualEntry />
                            </TabPane>
                            <TabPane>
                              <Review />
                            </TabPane>
                          </TabContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}
export default Setup;
