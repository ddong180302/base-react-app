import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'dong',
        address: 'da nang',
        age: 21
    }

    handleOnChange = (event) => {

    }
    handleOnClick = (event) => {
        event.preventDefault();
        console.log('check')
    }
    //JSX
    render() {

        return (
            <div>my name
                {
                    this.state.name
                }
                <form onSubmit={(event) => this.handleOnClick(event)}>
                    <input type='text' onChange={(event) => this.handleOnChange(event)} />
                    <button>click me</button>
                </form></div>
        );
    }
}

export default MyComponent;