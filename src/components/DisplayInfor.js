import React from "react";
import logo from '.././logo.svg';
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
                <img src={logo} />
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
                                    <div>ten: {item.age}</div>
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