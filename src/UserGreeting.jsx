import PropTypes from "prop-types"



function UserGreeting(props) {

    return (props.isLoggedIn ? 
    <h2 className="welcome-message">Welcom {props.username}</h2> : 
    <h2 className="login-prompt">Please log in to continue</h2>)

}
UserGreeting.propTypes={
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    
}






export default UserGreeting