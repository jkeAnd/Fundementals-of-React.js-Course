import React, {useState} from "react";
function NameInput({name, setName}) {
    
    return (
        <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    )
}

function Clicker({name}){
                const handleClick = () => alert(name)
                return <button onClick={handleClick}>Click Me</button>
}

function NameForm() {
    const [name, setName] = useState ("");
    

    return (
            <div>
                <NameInput name={name} setName={setName}/>
                <Clicker name={name}/>
            </div>
        );
    }

export default NameForm;
