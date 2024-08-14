import PropTypes from "prop-types"



function UserGreeting(props) {

    if(props.isLoggedIn){
        return <h2>Welcom{props.username}</h2>
    }else {
        return <h2>Please log in to continue !!</h2>
    }

}
UserGreeting.propTypes={
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    
}






export default UserGreeting