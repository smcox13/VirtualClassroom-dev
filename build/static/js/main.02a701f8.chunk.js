(this["webpackJsonpeducation-webex"]=this["webpackJsonpeducation-webex"]||[]).push([[0],{174:function(e,t,a){e.exports=a(377)},179:function(e,t,a){},180:function(e,t,a){},327:function(e,t){},329:function(e,t){},377:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(3),r=a.n(n),i=(a(179),a(10)),c=a(11),o=a(15),m=a(14),d=(a(180),a(5)),u=a(2),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).textChange=function(t){e.setState({mail:t.target.value}),e.validateEmail()},e.onSubmit=function(t){e.validateEmail(),window.sessionStorage.setItem("accessToken","abc"),e.state.error?alert("Please enter valid email address!"):e.props.history.push({pathname:"/auth",mail:e.state.mail,shouldLogin:"login"})},e.state={mail:null,error:!0},e.validateEmail=e.validateEmail.bind(Object(d.a)(e)),e.onSubmit=e.onSubmit.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"validateEmail",value:function(){this.setState({error:!1});var e=this.state.mail;if(null!==e){var t=e.lastIndexOf("@"),a=e.lastIndexOf(".");t<a&&t>0&&-1===e.indexOf("@@")&&a>2&&e.length-a>2||this.setState({error:!0})}else this.setState({error:!0})}},{key:"render",value:function(){return localStorage.removeItem("classList"),l.a.createElement("div",{className:"grid",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"large-4 large-offset-1 columns"},l.a.createElement("p",{style:{fontSize:22}},"Cisco Webex Teams "),l.a.createElement("p",{style:{fontSize:30}},"Seamlessly take your classroom virtual."),l.a.createElement("p",{style:{fontSize:16}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie in felis id tincidunt. Ut suscipit vestibulum sagittis. Nam ultrices porta sapien, sed tincidunt urna egestas id. Sed finibus felis eget turpis posuere, sed dapibus dui pretium."),l.a.createElement("div",{className:"row",style:{marginTop:20}},l.a.createElement("div",{className:"large-8 columns"},l.a.createElement(u.m,{name:"defaultInput",type:"email",inputSize:"large-15",placeholder:"Enter your work Email address",onChange:this.textChange,onFocus:this.onFocus,onBlur:this.textChange,style:{borderRadius:"18px"}})),l.a.createElement("div",{className:"large-4 columns"},l.a.createElement(u.b,{children:"Start for free",color:"blue",disabled:this.state.error,onClick:this.onSubmit,ariaPressed:!1}))),l.a.createElement("p",{style:{fontSize:11,paddingTop:10}},"By clicking 'Start for free' you understand and agree to the",l.a.createElement("a",{href:"https://www.cisco.com/c/en/us/about/legal/terms-conditions.html"}," Cisco Terms of Services."))),l.a.createElement("div",{className:"large-6 columns"},l.a.createElement("img",{src:"story.png",style:{width:500,height:350},alt:"Simple Story Illustration"}))))}}]),a}(l.a.Component),g=a(42),p=a.n(g),f=a(66),v="https://corch.pegatsdemo.com/prweb/PRRestService/";function b(e){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(p.a.mark((function e(t){var a,s,l,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("access_token");case 2:return a=e.sent,e.next=5,{method:"POST",headers:new Headers({Authorization:"Bearer ".concat(a),"Content-Type":"application/json"}),body:t};case 5:return s=e.sent,e.prev=6,e.next=9,fetch("".concat(v,"ControllerPilot/v1/CreateSpace"),s);case 9:return l=e.sent,e.next=12,l.json();case 12:return n=e.sent,e.next=15,console.log(n);case 15:return e.next=17,n.spaceID;case 17:return e.abrupt("return",e.sent);case 20:e.prev=20,e.t0=e.catch(6),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[6,20]])})))).apply(this,arguments)}var y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).textChange=function(e){void 0!==s.props.location.mail&&(sessionStorage.setItem("userInfo",s.props.location.mail),s.setState({error:!1}))},s.onSubmit=function(e){!function(e){var t="grant_type=client_credentials&client_id=".concat("40103787840015937566","&client_secret=").concat("4394A7AFA1AE900AD96606478619229B"),a={method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:t};fetch("".concat(v,"oauth2/v1/token"),a).then((function(e){return e.json()})).then((function(e){return sessionStorage.setItem("access_token",e.access_token)})).then((function(t){return setTimeout(e,100)}))}((function(){return s.props.history.push("/addClasses")}))},s.state={mail:e.location.mail,error:!0},s.textChange=s.textChange.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.location.mail,t={display:"flex",justifyContent:"center",alignItems:"center"};return l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"row",style:t},l.a.createElement("img",{src:"webex.png",style:{width:100,height:100,marginTop:200},alt:"Webex logo"})),l.a.createElement("div",{className:"row",style:t},l.a.createElement("t",{style:{marginTop:20}},"Hello ",e)),l.a.createElement("div",{className:"row",style:t},l.a.createElement(u.m,{name:"defaultInput",type:"password",inputSize:"large-15",placeholder:"Password",onChange:this.textChange,style:{borderRadius:"18px",marginTop:20}})),l.a.createElement("div",{className:"row",style:t},l.a.createElement(u.b,{children:"Sign In",color:"blue",size:20,disabled:this.state.error,onClick:this.onSubmit,ariaPressed:!1})),l.a.createElement("div",{className:"row",style:t},l.a.createElement("a",{href:"https://help.webex.com/en-us/",style:{marginTop:20}}," Forgot password?")))}}]),a}(l.a.Component),N=a(30),S=function(e){var t=e.tab,a={marginTop:20},s={marginTop:20,height:40,textAlign:"center",border:"1px solid #e5e5e5"},n={marginTop:20,height:40,textAlign:"center",border:"1px solid #e5e5e5",backgroundColor:"#e6f9fc"};return l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-11",style:a},l.a.createElement("h1",null,"Classroom Set Up")),l.a.createElement("div",{className:"columns large-1 columns_new",style:a},l.a.createElement(u.a,{title:"Barbara",src:"http://react.collab-ui.com/barbara.png"}))),l.a.createElement("div",{className:"row large-offset-1",style:void 0===t?{display:"none"}:{}},l.a.createElement("div",{className:"columns large-3",style:"general"===t?n:s},l.a.createElement("h3",null,"General Info")),l.a.createElement("div",{className:"columns large-3",style:"file"===t?n:s},l.a.createElement("h3",null,"Add Students(Upload)")),l.a.createElement("div",{className:"columns large-3",style:"manual"===t?n:s},l.a.createElement("h3",null,"Add Students(Manual)")),l.a.createElement("div",{className:"columns large-3",style:"review"===t?n:s},l.a.createElement("h3",null,"Review"))))},C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).addClasses=function(e){s.props.history.push("/classroomSetup")},s.state={},s.addClasses=s.addClasses.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){if(null===sessionStorage.getItem("access_token"))return l.a.createElement(N.a,{to:"/"});var e=JSON.parse(localStorage.getItem("classList")),t={marginTop:20};return l.a.createElement("div",{className:"grid",style:{paddingTop:20}},l.a.createElement(S,null),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-6",style:t},"For each class, we'll walk you through the set-up process. Youll need names and email addresses of students for the set-up process.")),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"large-3 columns",style:t},l.a.createElement(u.b,{children:"Add Class",color:"blue",onClick:this.addClasses,ariaPressed:!1}))),l.a.createElement("div",{className:"row large-offset-1",style:null===e?{hideGrid:t}:{display:"none"}},l.a.createElement("div",{className:"large-8 large-centered columns"},l.a.createElement("img",{alt:"addClass",src:"addClass.png"}))),l.a.createElement("div",{className:"row large-offset-1",style:null===e?{display:"none"}:{paddingTop:40,paddingBottom:20}},l.a.createElement("h1",null,"Classes")),null!==e?e.map((function(e){return l.a.createElement("div",{className:"row",key:e.spaceId,style:{paddingLeft:"1%",width:"95%"}},l.a.createElement("div",{className:"large-10 columns"},e.name,l.a.createElement("p",null,e.time)),l.a.createElement("div",{className:"large-2 columns"},l.a.createElement(u.b,{children:"Open in Teams",color:"blue",onClick:function(){return window.open("https://teams.webex.com/spaces/".concat(e.spaceId,"/chat"),"_blank")},ariaPressed:!1})),l.a.createElement("hr",{style:{height:1,width:"95%",border:"none",color:"grey",backgroundColor:"grey"}}))})):l.a.createElement("div",null))}}]),a}(l.a.Component),w=a(43),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).startTimeSelected=function(e,t,a){var l="AM",n=e-12>0?e-12:e;e-12>=0&&(l="PM"),0===n&&(n=12),s.setState({startTime:"".concat(n,":").concat(t).concat(l)})},s.endTimeSelected=function(e,t,a){var l="AM",n=e-12>0?e-12:e;e-12>=0&&(l="PM"),0===n&&(n=12),s.setState({endTime:"".concat(n,":").concat(t).concat(l)})},s.state={className:null,courseNumber:null,period:"1",startTime:"12:00PM",endTime:"1:00PM",recurrence:"Daily (M-F)",date:new Date,classNameError:{},courseNumberError:{}},s.onTextChange=s.onTextChange.bind(Object(d.a)(s)),s.startTimeSelected=s.startTimeSelected.bind(Object(d.a)(s)),s.endTimeSelected=s.endTimeSelected.bind(Object(d.a)(s)),s.toggleSwitch=s.toggleSwitch.bind(Object(d.a)(s)),s.saveClick=s.saveClick.bind(Object(d.a)(s)),s.cancelClick=s.cancelClick.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(e){var t=JSON.parse(sessionStorage.getItem("classObj"));null!==t&&this.setState({className:t.className,courseNumber:t.courseNumber,period:t.period,startTime:t.startTime,endTime:t.endTime,recurrence:t.recurrence,date:t.date})}},{key:"simulateClick",value:function(e){null!==e&&e.handleInputClick()}},{key:"onTextChange",value:function(e){var t,a=e.target,s=a.value,l=a.name,n={};""===s&&(n={message:"Please enter Class information",type:"error"}),this.setState((t={},Object(w.a)(t,l,s),Object(w.a)(t,"".concat(l,"Error"),n),t))}},{key:"toggleSwitch",value:function(e){}},{key:"cancelClick",value:function(e){sessionStorage.removeItem("classObj"),sessionStorage.removeItem("studentList"),sessionStorage.removeItem("uploadedFile"),this.props.history.push("/addClasses")}},{key:"saveClick",value:function(e){if(e.preventDefault(),null===this.state.className)this.setState({classNameError:{message:"Please enter Class Name.",type:"error"}});else if(null===this.state.courseNumber)this.setState({courseNumberError:{message:"Please enter student Course Number.",type:"error"}});else{var t={className:this.state.className,courseNumber:this.state.courseNumber,period:this.state.period,startTime:this.state.startTime,endTime:this.state.endTime,recurrence:this.state.recurrence,lastDay:this.state.date};this.setState({classObj:t}),sessionStorage.setItem("classObj",JSON.stringify(t)),this.props.history.push("/fileUpload")}}},{key:"render",value:function(){var e=this;if(null===sessionStorage.getItem("access_token"))return l.a.createElement(N.a,{to:"/"});var t={marginTop:20},a=this.state.className,s=this.state.courseNumber,n=this.state.period,r=this.state.recurrence;this.state.startTime,this.state.endTime,this.state.date;return l.a.createElement("div",{className:"grid",style:{paddingTop:20}},l.a.createElement(S,{tab:"general"}),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-11",style:t},l.a.createElement("p",{style:{fontSize:16}},"Enter Class Name, Course Number, and select the Period. This information will be used to create the title of the space that will be generated in Webex Teams. If you need to change anything, you\u2019ll be able to edit this information later."))),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-4",style:t},l.a.createElement(u.m,{name:"className",label:"Class Name*",type:"text",inputSize:"large-15",placeholder:"e.g. Algebra",value:a,onChange:this.onTextChange,messageArr:[this.state.classNameError],htmlId:"className"})),l.a.createElement("div",{className:"columns large-4",style:t},l.a.createElement(u.m,{name:"courseNumber",label:"Course Number*",type:"text",inputSize:"large-15",placeholder:"123456",value:s,onChange:this.onTextChange,messageArr:[this.state.courseNumberError],htmlId:"courseNumber"})),l.a.createElement("div",{className:"columns large-4",style:t},"Period",l.a.createElement(u.E,{className:"hide-grid",defaultValue:n,color:"white",onSelect:function(t,a){e.setState({period:t[0].value})}},l.a.createElement(u.F,{value:"1",label:"1"}),l.a.createElement(u.F,{value:"3",label:"3"}),l.a.createElement(u.F,{value:"6",label:"6"})))),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-11",style:t},l.a.createElement("p",{style:{fontSize:16}},"Enter the scheduling information for this class. Using this infomartion, a series of meeting from now until the end of the year will be created. Don\u2019t worry, you can make changes later."))),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-2",style:t},"Start Time*",l.a.createElement(u.H,{selectedTime:new Date,inputId:"startTime",onChange:this.startTimeSelected}),"End Time*",l.a.createElement(u.H,{selectedTime:new Date,inputId:"endTime",onChange:this.endTimeSelected}),"Recurrence",l.a.createElement(u.E,{defaultValue:r,onSelect:function(t,a){e.setState({recurrence:t[0].value})}},l.a.createElement(u.F,{value:"Monday",label:"Monday"}),l.a.createElement(u.F,{value:"Tuesday",label:"Tuesday"}),l.a.createElement(u.F,{value:"Wednesday",label:"Wednesday"}),l.a.createElement(u.F,{value:"Thursday",label:"Thursday"}),l.a.createElement(u.F,{value:"Friday",label:"Friday"}),l.a.createElement(u.F,{value:"Daily (M-F)",label:"Daily (M-F)"}))),l.a.createElement("div",{className:"columns large-8",style:{marginTop:10}},l.a.createElement(u.g,{direction:"bottom-left",shouldCloseOnSelect:!1,onSelect:function(t,a){return e.setState({date:a})},ref:this.simulateClick},l.a.createElement(u.m,{style:{background:"transparent"},inputSize:"large-10",value:"Last Day*",readOnly:!0})))),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-11",style:{marginTop:35}},l.a.createElement("p",{style:{fontSize:16}},"The Attendance Log tracks attendance of students for the class meeting you set up with this tool."))),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-2",style:t},l.a.createElement("h3",null,"Attendance Log")),l.a.createElement("div",{className:"columns large-10",style:{marginTop:25}},l.a.createElement(u.I,{checked:!0,onChange:this.toggleSwitch,htmlId:"testToggleSwitch1"}))),l.a.createElement("div",{className:"row large-offset-1",style:{marginTop:40}},l.a.createElement("div",{className:"large-2 columns"},l.a.createElement(u.b,{children:"Cancel",color:"blue-outline",onClick:this.cancelClick,style:{color:"blue",borderRadius:5},ariaPressed:!1})),l.a.createElement("div",{className:"large-1 columns"},l.a.createElement(u.b,{children:"Continue",color:"blue",onClick:this.saveClick,ariaPressed:!1}))))}}]),a}(l.a.Component),I=a(379),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={uploadedFile:null,studentList:null,lastIndex:1},s.fileRef=l.a.createRef(),s.uploadClicked=s.uploadClicked.bind(Object(d.a)(s)),s.onSelectFile=s.onSelectFile.bind(Object(d.a)(s)),s.saveClick=s.saveClick.bind(Object(d.a)(s)),s.cancelClick=s.cancelClick.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(e){var t=JSON.parse(sessionStorage.getItem("uploadedFile")),a=JSON.parse(sessionStorage.getItem("studentList"));null!==t&&this.setState({uploadedFile:t}),null!==a&&this.setState({studentList:a})}},{key:"uploadClicked",value:function(e){null===this.state.uploadedFile?this.fileRef.current.click():this.setState({uploadedFile:null,studentList:null})}},{key:"onSelectFile",value:function(e){var t=this;e.stopPropagation(),e.preventDefault();var a=e.target.files[0];this.setState({uploadedFile:a.name});var s={"First Name":{prop:"firstName",type:String,required:!0},"Last Name":{prop:"lastName",type:String,required:!0},Email:{prop:"email",type:String,required:!0}};Object(I.a)(a,{schema:s}).then((function(e){var a=e.rows;if(0===e.errors.length){var s=a.map((function(e){return e.studentId=t.state.lastIndex,t.setState({lastIndex:t.state.lastIndex+1}),e}));t.setState({studentList:s})}else alert("Invalid file. Kindly follow file Template!")}))}},{key:"downloadClicked",value:function(e){window.location.href="".concat("","/studentList.xlsx")}},{key:"cancelClick",value:function(e){this.props.history.push("/classroomSetup")}},{key:"saveClick",value:function(e){sessionStorage.setItem("studentList",JSON.stringify(this.state.studentList)),sessionStorage.setItem("uploadedFile",JSON.stringify(this.state.uploadedFile)),this.props.history.push("/addStudents")}},{key:"render",value:function(){if(null===sessionStorage.getItem("access_token"))return l.a.createElement(N.a,{to:"/"});var e={marginTop:20},t=this.state.uploadedFile;return l.a.createElement("div",{className:"grid",style:{paddingTop:20}},l.a.createElement(S,{tab:"file"}),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-6",style:e},l.a.createElement("div",{className:"row"},l.a.createElement("p",{style:{fontSize:16}},"Upload Students information from an excel file (.XLS or .XLSX). Files must adhere to the format shown to the right.")),l.a.createElement("div",{className:"row",style:e},l.a.createElement("t",{style:null===t?{display:"none"}:{marginRight:20}},t),l.a.createElement("input",{type:"file",ref:this.fileRef,style:{display:"none"},onChange:this.onSelectFile}),l.a.createElement(u.b,{children:null===t?"Upload from file":"Delete",color:"blue",onClick:this.uploadClicked,ariaPressed:!1}),l.a.createElement(u.b,{children:"Download Template",color:"blue-outline",onClick:this.downloadClicked,ariaPressed:!1}))),l.a.createElement("div",{className:"columns large-6",style:e},l.a.createElement("img",{alt:"fileImageHolder",src:"fileImageHolder.png"}))),l.a.createElement("div",{className:"row large-offset-1",style:{marginTop:40,marginLeft:10}},l.a.createElement("div",{className:"large-2 columns"},l.a.createElement(u.b,{children:"Back",color:"blue-outline",onClick:this.cancelClick,style:{color:"blue",borderRadius:5},ariaPressed:!1})),l.a.createElement("div",{className:"large-1 columns"},l.a.createElement(u.b,{children:"Continue",color:"blue",onClick:this.saveClick,ariaPressed:!1}))))}}]),a}(l.a.Component),T=a(101),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={studentList:[],firstName:null,lastName:null,email:null,lastIndex:1,firstNameError:{},lastNameError:{},emailError:{}},s.addInfo=s.addInfo.bind(Object(d.a)(s)),s.updateInfo=s.updateInfo.bind(Object(d.a)(s)),s.deleteInfo=s.deleteInfo.bind(Object(d.a)(s)),s.onTextChange=s.onTextChange.bind(Object(d.a)(s)),s.saveClick=s.saveClick.bind(Object(d.a)(s)),s.cancelClick=s.cancelClick.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(e){var t=JSON.parse(sessionStorage.getItem("studentList"));null!==t&&this.setState({lastIndex:t.length+1,studentList:t})}},{key:"validateEmail",value:function(){this.setState({error:!1});var e=this.state.mail;if(null!==e){var t=e.lastIndexOf("@"),a=e.lastIndexOf(".");t<a&&t>0&&-1===e.indexOf("@@")&&a>2&&e.length-a>2||this.setState({error:!0})}else this.setState({error:!0})}},{key:"addInfo",value:function(e){if(e.preventDefault(),null===this.state.firstName)this.setState({firstNameError:{message:"Please enter student first name.",type:"error"}});else if(null===this.state.lastName)this.setState({lastNameError:{message:"Please enter student last name.",type:"error"}});else if(null===this.state.email)this.setState({emailError:{message:"Please enter student email.",type:"error"}});else{var t={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,studentId:this.state.lastIndex},a=this.state.studentList;a.push(t),this.setState({studentList:a,lastIndex:this.state.lastIndex+1}),this.setState({firstName:null,lastName:null,email:null})}}},{key:"cancelClick",value:function(e){this.props.history.push("/fileUpload")}},{key:"saveClick",value:function(e){sessionStorage.setItem("studentList",JSON.stringify(this.state.studentList)),this.props.history.push("/review")}},{key:"onTextChange",value:function(e){var t,a=e.target,s=a.value,l=a.name,n={};""===s&&(n={message:"Please enter student information",type:"error"}),this.setState((t={},Object(w.a)(t,l,s),Object(w.a)(t,"".concat(l,"Error"),n),t))}},{key:"updateInfo",value:function(e,t,a){var s=this.state.studentList;s[Object(T.findIndex)(this.state.studentList,{studentId:a})][e]=t,this.setState({studentList:s})}},{key:"deleteInfo",value:function(e){var t=this.state.studentList;t=Object(T.without)(t,e),this.setState({studentList:t})}},{key:"render",value:function(){var e=this;if(null===sessionStorage.getItem("access_token"))return l.a.createElement(N.a,{to:"/"});var t={marginTop:20},a=this.state.studentList;return l.a.createElement("div",{className:"grid",style:{paddingTop:20}},l.a.createElement(S,{tab:"manual"}),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-10",style:t},l.a.createElement("p",{style:{fontSize:16}},"Enter Students\u2019 information manually."))),a.map((function(a){return l.a.createElement("div",{className:"row large-offset-1",key:a.studentId},l.a.createElement("div",{className:"row",key:a.studentId},l.a.createElement("div",{className:"columns large-2",style:t},l.a.createElement(u.h,{handleDoneEditing:function(t,s){return e.updateInfo("firstName",s.value,a.studentId)},inputText:a.firstName})),l.a.createElement("div",{className:"columns large-2",style:t},l.a.createElement(u.h,{handleDoneEditing:function(t,s){return e.updateInfo("lastName",s.value,a.studentId)},inputText:a.lastName})),l.a.createElement("div",{className:"columns large-2",style:t},l.a.createElement(u.h,{handleDoneEditing:function(t,s){return e.updateInfo("email",s.value,a.studentId)},inputText:a.email})),l.a.createElement("div",{className:"columns large-5",style:t},l.a.createElement(u.b,{children:"Delete",color:"blue-outline",onClick:function(t){return e.deleteInfo(a)},style:{color:"blue",borderRadius:5}}))),l.a.createElement("div",{className:"row"},l.a.createElement("hr",{style:{marginLeft:20,height:1,width:"95%",border:"none",color:"grey",backgroundColor:"grey"}})))})),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement("div",{className:"columns large-4",style:t},l.a.createElement(u.m,{name:"firstName",label:"First Name",type:"text",inputSize:"large-15",placeholder:"Emily",onChange:this.onTextChange,messageArr:[this.state.firstNameError],htmlId:"firstName"})),l.a.createElement("div",{className:"columns large-4",style:t},l.a.createElement(u.m,{name:"lastName",label:"Last Name",type:"text",inputSize:"large-15",placeholder:"Henning",onChange:this.onTextChange,messageArr:[this.state.lastNameError],htmlId:"lastName"})),l.a.createElement("div",{className:"columns large-4",style:t},l.a.createElement(u.m,{name:"email",label:"Email",type:"email",inputSize:"large-15",placeholder:"emilyhenning@gmail.com",onChange:this.onTextChange,messageArr:[this.state.emailError],htmlId:"email"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns large-offset-11 large-1",style:t},l.a.createElement(u.b,{children:"Add",color:"blue",onClick:this.addInfo,style:{color:"blue",borderRadius:5},ariaPressed:!1}))),l.a.createElement("div",{className:"row large-offset-1",style:{marginTop:40,marginLeft:10}},l.a.createElement("div",{className:"large-10 columns"},l.a.createElement(u.b,{children:"Back",color:"blue-outline",onClick:this.cancelClick,style:{color:"blue",borderRadius:5},ariaPressed:!1})),l.a.createElement("div",{className:"large-1 columns"},l.a.createElement(u.b,{children:"Continue",color:"blue",onClick:this.saveClick,ariaPressed:!1}))))}}]),a}(l.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={showDialog:!1,showActivity:!1},s.modalDialogRef=l.a.createRef(),s.activityDialogRef=l.a.createRef(),s.saveClick=s.saveClick.bind(Object(d.a)(s)),s.editClass=s.editClass.bind(Object(d.a)(s)),s.editStudents=s.editStudents.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({showActivity:!1})}},{key:"editClass",value:function(e){this.props.history.push("/classroomSetup")}},{key:"editStudents",value:function(e){this.props.history.push("/addStudents")}},{key:"saveClick",value:function(e){var t=this;this.modalDialogRef.current.closeModal();var a=JSON.parse(sessionStorage.getItem("studentList")).map((function(e){return{email:e.email,privilege:"member"}})),s=sessionStorage.getItem("userInfo");a.push({email:s,privilege:"owner"});var l=JSON.parse(sessionStorage.getItem("classObj")),n={caseNumber:l.courseNumber,event:"classroomSetup",teamId:"",title:l.className,type:"internal",participants:a},r=JSON.parse(localStorage.getItem("classList"));null===r&&(r=[]),this.setState({showActivity:!0}),Object(f.a)(p.a.mark((function e(){var a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(JSON.stringify(n));case 2:a=e.sent,t.setState({showActivity:!1}),t.activityDialogRef.current.closeModal(),s={name:"".concat(l.period," Period: ").concat(l.className),time:"".concat(l.startTime," - ").concat(l.endTime,", ").concat(l.recurrence),spaceId:a},r.push(s),localStorage.setItem("classList",JSON.stringify(r)),t.props.history.push("/addClasses");case 9:case"end":return e.stop()}}),e)})))()}},{key:"render",value:function(){var e=this;if(null===sessionStorage.getItem("access_token"))return l.a.createElement(N.a,{to:"/"});var t={marginTop:20},a="",s="",n="",r="",i="",c="",o=JSON.parse(sessionStorage.getItem("classObj"));null!==o&&(a=o.className,s=o.courseNumber,n=o.period,r="".concat(o.startTime," - ").concat(o.endTime),i=o.recurrence,c=o.date);var m=[],d=JSON.parse(sessionStorage.getItem("studentList"));return null!==d&&(m=d),l.a.createElement("div",{className:"grid",style:{paddingTop:20}},l.a.createElement(S,{tab:"review"}),l.a.createElement("div",{className:"row large-offset-1",style:t},l.a.createElement("p",{style:{fontSize:16}},"Please review the information for the class to finish the set-up process.")),l.a.createElement("div",{className:"row large-offset-1",style:t},l.a.createElement("b",null,"General Info:")),l.a.createElement("div",{className:"row large-offset-1"},"Class Name: ",a),l.a.createElement("div",{className:"row large-offset-1"},"Course Number: ",s),l.a.createElement("div",{className:"row large-offset-1"},"Period: ",n),l.a.createElement("div",{className:"row large-offset-1"},"Time: ",r),l.a.createElement("div",{className:"row large-offset-1"},"Recurrence: ",i),l.a.createElement("div",{className:"row large-offset-1"},"Last Day of Class: ",c),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement(u.b,{children:"Edit",color:"blue-outline",onClick:this.editClass,style:{color:"blue",borderRadius:5},ariaPressed:!1})),l.a.createElement("div",{className:"row large-offset-1",style:t},l.a.createElement("b",null,"Students (",m.length," Added):")),m.map((function(e){return l.a.createElement("div",{className:"row large-offset-1",key:e.studentId},l.a.createElement("div",{className:"large-3 columns"},e.studentId,". ",e.firstName," ",e.lastName),l.a.createElement("div",{className:"large-9 columns"},e.email))})),l.a.createElement("div",{className:"row large-offset-1"},l.a.createElement(u.b,{children:"Edit",color:"blue-outline",onClick:this.editStudents,style:{color:"blue",borderRadius:5},ariaPressed:!1})),l.a.createElement("div",{className:"row large-offset-1",style:{marginTop:40}},l.a.createElement("div",{className:"large-2 columns"},l.a.createElement(u.b,{children:"Back",color:"blue-outline",onClick:this.editStudents,style:{color:"blue",borderRadius:5},ariaPressed:!1})),l.a.createElement("div",{className:"large-1 columns"},l.a.createElement(u.b,{children:"Finish",color:"blue",onClick:function(){return e.setState({showDialog:!0})},ariaPressed:!1}))),l.a.createElement(u.z,{icon:l.a.createElement(u.l,{name:"warning_72",color:"$md-yellow-50"}),applicationId:"app",onHide:function(){return e.setState({showDialog:!1})},show:this.state.showDialog,ref:this.modalDialogRef,size:"dialog",htmlId:"modalDialog"},l.a.createElement(u.C,{headerLabel:"Confirm"}),l.a.createElement(u.A,null,l.a.createElement("span",null,"Once you click \u201cFinish & Create,\u201d a Webex Teams space will be created with all of the students you added. Any changes can be made through the Webex Teams application.")),l.a.createElement(u.B,null,l.a.createElement(u.b,{children:"Back to Set Up",onClick:function(){return e.modalDialogRef.current.closeModal()},ariaLabel:"Close Modal",color:"default"}),l.a.createElement(u.b,{children:"Finish & Create",onClick:this.saveClick,ariaLabel:"Submit Form",color:"blue"}))),l.a.createElement(u.z,{onHide:function(){return e.setState({showDialog:!1})},show:this.state.showActivity,ref:this.activityDialogRef,size:"dialog",htmlId:"activityDialog"},l.a.createElement(u.C,{headerLabel:"Classroom Setup in progress..."})))}}]),a}(l.a.Component),L=function(){return l.a.createElement("h1",null,"404: Page Not Found")},F=a(35),P=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(F.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"page-id"},l.a.createElement(N.d,null,l.a.createElement(N.b,{path:"/",component:h,exact:!0}),l.a.createElement(N.b,{path:"/auth",component:y}),l.a.createElement(N.b,{path:"/addClasses",component:C}),l.a.createElement(N.b,{path:"/classroomSetup",component:k}),l.a.createElement(N.b,{path:"/fileUpload",component:O}),l.a.createElement(N.b,{path:"/addStudents",component:j}),l.a.createElement(N.b,{path:"/review",component:x}),l.a.createElement(N.b,{component:L})))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[174,1,2]]]);
//# sourceMappingURL=main.02a701f8.chunk.js.map