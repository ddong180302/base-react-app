import React, { useState } from "react";

const AddUserInfor = (props) => {
    let [name, setName] = useState('Dong')
    let [address, setAddress] = useState('quang nam')
    let [age, setAge] = useState('21')

    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnClick = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 1000) + 1) + "-random",
            name: name,
            age: age
        })
    }
    return (
        <div>
            my name {name}
            <form onSubmit={(event) => handleOnClick(event)}>
                <input value={name} type='text' onChange={(event) => handleOnChangeName(event)} />
                <input value={age} type='text' onChange={(event) => handleOnChangeAge(event)} />
                <button>click me</button>
            </form>
        </div>
    );
}

export default AddUserInfor;