import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log('>>>contructor: 1')
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>>component did muont: 2')
        setTimeout(() => {
            document.title = 'Display InFor'
        }, 3000)
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('check update: 4', this.props, 'prevprops: ', prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('5 thôi')
            } else {

            }
        }
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>>check render: 3')
        const { listUsers } = this.props;
        return (
            <div className="header-infor">
                <div>
                    <span onClick={() => this.handleShowHide()}>

                        {this.state.isShowListUser === true ? " Hide list User's" : " Show list User's"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((item) => {
                            return (
                                <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
                                    <div>ten: {item.name}</div>
                                    <div>tuoi: {item.age}</div>
                                    <button onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfor;