import React from "react";


class UserInfor extends React.Component {
    state = {
        name: 'dong',
        address: 'da nang',
        age: 21
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClick = (event) => {
        event.preventDefault();
        console.log('check')
    }
    render() {
        return (
            <div>
                my name {this.state.name}
                <form onSubmit={(event) => this.handleOnClick(event)}>
                    <input value={this.state.name} type='text' onChange={(event) => this.handleOnChange(event)} />
                    <button>click me</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;