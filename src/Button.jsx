

function Button() {

let count = 5;

const handleClick = (arg1) => {
    if(count < 10) {
        count++;
        console.log(`${arg1} why did you clicked me ? ${(count)} `);
    }
    else{
        console.log(`${name} stop doing this...plz`);
    }

};

return(<button onClick={() => handleClick("Samy")} > onTap</button>) 


}

export default Button