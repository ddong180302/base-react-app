// import { useState } from 'react';
import React, { useState } from "react";
import './DisplayInfor.scss';
import { useEffect } from "react";

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    console.log('render: ')
    useEffect(() => {
        console.log('useEffect: ')
        if (listUsers.length === 0) {
            alert('me')
        }
    }, [listUsers]);

    return (
        <div>
            <div onClick={() => handleShowHideListUser()}>
                {isShowHideListUser === true ? "Hide list user's" : "Show list user's"}
            </div>
            {
                isShowHideListUser &&
                <div>
                    {listUsers.map((item) => {
                        return (
                            <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
                                <div>ten: {item.name}</div>
                                <div>tuoi: {item.age}</div>
                                <button onClick={() => props.handleDeleteUser(item.id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            }
        </div >
    );
}

export default DisplayInfor;