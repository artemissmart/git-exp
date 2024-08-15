import PropTypes from "prop-types"



function UserGreeting(props) {

   const welcomeMessage = <h2 className="welcome-message">Welcom {props.username}</h2>

   const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

     
    



     return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}






UserGreeting.propTypes={
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    
}

UserGreeting.defaulProps = {
    isLoggedIn: false,
    username: "Guest",
}


export default UserGreeting