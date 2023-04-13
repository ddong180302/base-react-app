import React from "react";
import AddUserInfor from "./AddUserInfor";
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


    handleAddNewUser = (Objectj) => {
        let coppyListUsers = [...this.state.listUsers]
        this.setState({
            listUsers: [Objectj, ...coppyListUsers]
        })
    }

    //JSX
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;