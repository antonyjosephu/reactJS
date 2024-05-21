import PropTypes from 'prop-types';
function UserGreeting(props){
    const welcomeMessage=<h2>Welcome {props.username}</h2>
    const loginPrompt=<h2>Please login to continue</h2>
 return(props.isLoggedIn ? welcomeMessage : loginPrompt
 );
}
UserGreeting.PropTypes={
    isLoggedIn:PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",
}

export default UserGreeting