// e = event



function Button() {

    const handleClick = (e) => e.target.textContent = "Yeah !!";
    
    return(<button onDoubleClick={(e) => handleClick(e)} >Click pouette</button>) 



}

export default Button
