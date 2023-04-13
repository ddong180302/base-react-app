import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    //JSX
    render() {
        const name = 'dong', age = '21';
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name={name} age={age} />
            </div>
        );
    }
}

export default MyComponent;