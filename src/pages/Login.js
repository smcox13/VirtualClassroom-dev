import React from 'react';
import {requestAccessToken} from './Orchestrator.js';
import {
    Input,
    Button
} from '@momentum-ui/react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: props.location.mail,
            error: true,
        }
        this.textChange = this.textChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    textChange = text => {
        if (this.props.location.mail !== undefined) {
            sessionStorage.setItem('userInfo',this.props.location.mail);
            this.setState( {error: false} )
        }
    }

    onSubmit = (event) => {
        requestAccessToken(() => this.props.history.push('/addClasses'));
        // this.props.history.push({
        //     pathname: '/addClasses',
        // });
    }

    render() {
        const mail = this.props.location.mail;
        const centerAllign = {display: 'flex',  justifyContent:'center', alignItems:'center'};
        return (
            <div className="grid">
                <div className="row" style={centerAllign}>
                    <img  src="webex.png" style={{width:100, height:100, marginTop:200}} alt="Webex logo"/>
                </div>
                <div className="row" style={centerAllign}>
                    <t style={{marginTop: 20}}>Hello {mail}</t>
                </div>
                <div className="row" style={centerAllign}>
                    <Input
                        name='defaultInput'
                        type='password'
                        inputSize='large-15'
                        placeholder='Password'
                        onChange={this.textChange}
                        style={{borderRadius:'18px', marginTop: 20}}
                      />
                </div>
                <div className="row" style={centerAllign}>
                    <Button
                        children='Sign In'
                        color='blue'
                        size={20}
                        disabled={this.state.error}
                        onClick={this.onSubmit}
                        ariaPressed={false}
                      />
                </div>
                <div className="row" style={centerAllign}>
                      <a href="https://help.webex.com/en-us/" style={{marginTop: 20}}> Forgot password?</a>
                </div>
            </div>
        );
    }
}

export default Login;

/*
const webex = window.webex = Webex.init({
  config: {
    credentials: {
      client_id: 'C190e9a362204470aa77adb388e66e78ca175ac471e215ce269540297660be61e',
      redirect_uri: 'http://localhost:3000/addClasses',
      scope: 'spark:all spark:kms',
    }
    }
});
const token = RegExp('[#&]' + 'access_token' + '=([^&]*)').exec(window.location.hash);

if (this.props.location.shouldLogin === 'login' ) {
    webex.authorization.initiateLogin();
} if (this.props.location.shouldLogin === 'logout' ) {
    window.sessionStorage.removeItem('accessToken');
    webex.logout();
}
*/

/*
const webex = window.webex = Webex.init({
  config: {
    credentials: {
      authorizationString: 'https://webexapis.com/v1/authorize?client_id=C190e9a362204470aa77adb388e66e78ca175ac471e215ce269540297660be61e&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FaddClasses&scope=spark%3Aall%20spark%3Akms&state=set_state_here',
      clientType: 'confidential',
  },
    }
});
*/
