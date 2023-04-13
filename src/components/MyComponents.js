import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {
                id: 1,
                name: 'dong',
                age: '26'
            },
            {
                id: 2,
                name: 'thao',
                age: '21'
            },
            {
                id: 3,
                name: 'giang',
                age: '15'
            }
        ]
    }

    //JSX
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;