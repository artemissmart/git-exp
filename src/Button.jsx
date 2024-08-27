// e = event



function Button() {

    const handleclick = (e) => e.target.textContent = "aiiiiiiie XD";

    return(<button onDoubleClick={(e) => handleclick(e)}>POWER</button>)

}
export default Button









