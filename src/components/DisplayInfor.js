import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
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