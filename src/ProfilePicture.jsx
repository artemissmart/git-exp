
function ProfilePicture() {

    const imageUrl = "./src/assets/undraw_camera.jpg";

    const handleClick = (e) => console.log("YESSSSSSS");

    return (<img onClick={(e) => handleClick(e) } src={imageUrl}></img>)


}

export default ProfilePicture