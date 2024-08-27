

function Button(){

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked on me and why ${count} times ??`);
        } else {
            console.log(`${name} stop doing this`)
        }




    };
    return (<button onClick={() => handleClick("Arthur :D")}>Click to win a sentence</button>)

}

export default Button