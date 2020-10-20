import React from 'react';
import { Avatar } from '@momentum-ui/react';

const Header = ({tab}) => {
    const hideGrid = {
        marginTop: 20
    };
    const tabBar = {marginTop: 20,
                    height: 40,
                    textAlign: 'center',
                    border: '1px solid #e5e5e5',
    };
    const active = {marginTop: 20,
                    height: 40,
                    textAlign: 'center',
                    border: '1px solid #e5e5e5',
                    backgroundColor: '#e6f9fc'
    };

    return(
        <div className="grid">
            <div className="row large-offset-1">
                <div className="columns large-11" style={hideGrid}>
                    <h1>Classroom Set Up</h1>
                </div>
                <div className="columns large-1 columns_new" style={hideGrid}>
                    <Avatar title="Barbara" src="http://react.collab-ui.com/barbara.png"/>
                </div>
            </div>
            <div className="row large-offset-1" style={tab === undefined ? {display: "none"} : {}}>
                <div className="columns large-3" style={tab === 'general' ? active : tabBar}>
                        <h3>General Info</h3>
                </div>
                <div className="columns large-3" style={tab === 'file' ? active : tabBar}>
                    <h3>Add Students(Upload)</h3>
                </div>
                <div className="columns large-3" style={tab === 'manual' ? active : tabBar}>
                    <h3>Add Students(Manual)</h3>
                </div>
                <div className="columns large-3" style={tab === 'review' ? active : tabBar}>
                    <h3>Review</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;
