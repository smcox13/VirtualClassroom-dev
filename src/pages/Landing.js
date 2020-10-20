import React from 'react';
import { Input, Button } from '@momentum-ui/react';

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            mail: null,
            error: true
        };
        this.validateEmail = this.validateEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    textChange = text => {
        this.setState( {mail: text.target.value} )
        this.validateEmail();
    }

    validateEmail() {
        this.setState({error: false});
        let email = this.state.mail;
        if (email === null) {
            this.setState({error: true});
            return ;
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

    onSubmit = (event) => {
        this.validateEmail();
        window.sessionStorage.setItem('accessToken','abc');
        if (!this.state.error) {
            this.props.history.push({
                pathname: '/auth',
                mail: this.state.mail,
                shouldLogin: 'login',
            });
        } else {
            alert('Please enter valid email address!');
        }
    }

    render() {
        localStorage.removeItem('classList');
        return (
            <div className="grid" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
              <div className="row">
                <div className="large-4 large-offset-1 columns">
                    <p style={{fontSize:22}}>Cisco Webex Teams </p>
                    <p style={{fontSize:30}}>Seamlessly take your classroom virtual.</p>
                    <p style={{fontSize:16}}>
                    Make setting up and taking your 
                    classes easy with the Virtual Classroom tool. 
                    </p>
                    <div className="row" style={{marginTop:20}}>
                      <div className="large-8 columns">
                          <Input
                              name='defaultInput'
                              type='email'
                              inputSize='large-15'
                              placeholder='Enter your work Email address'
                              onChange={this.textChange}
                              onFocus={this.onFocus}
                              onBlur={this.textChange}
                              style={{borderRadius:'18px'}}
                            />
                      </div>
                      <div className="large-4 columns">
                          <Button
                              children='Start for free'
                              color='blue'
                              disabled={this.state.error}
                              onClick={this.onSubmit}
                              ariaPressed={false}
                            />
                      </div>
                    </div>
                    <p style={{fontSize:11, paddingTop:10}}>
                      By clicking 'Start for free' you understand and agree to the
                      <a href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html"> Cisco Terms of Services.</a>
                    </p>
                </div>
                <div className="large-6 columns">
                    <img  src="story-revised.png" style={{width:500, height:350}} alt="Simple Story Illustration"/>
                </div>
              </div>
            </div>
        );
    }
}
export default Landing;

/*
navToLogin = () => {
    window.location.href="/login/pratison@cisco.com"
}
<button onClick={() => this.navToLogin()}>Start for Free</button>
*/

/*
<Link to={{
    pathname: '/login',
    mail: this.state.mail
}}>
</Link>
*/
