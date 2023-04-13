import React from "react";


class AddUserInfor extends React.Component {
    state = {
        name: 'dong',
        address: 'da nang',
        age: 21
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + "-random",
            name: this.state.name,
            age: this.state.age
        })
        console.log('check')
    }
    render() {
        return (
            <div>
                my name {this.state.name}
                <form onSubmit={(event) => this.handleOnClick(event)}>
                    <input value={this.state.name} type='text' onChange={(event) => this.handleOnChangeName(event)} />
                    <input value={this.state.age} type='text' onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>click me</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;