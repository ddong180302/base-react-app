import React from "react";
import './DisplayInfor.scss';

// class DisplayInfor extends React.Component {


//     render() {
//         const { listUsers } = this.props;
//         return (
//             <div>
//                 {
//                     true &&
//                     <div>
//                         {listUsers.map((item) => {
//                             return (
//                                 <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
//                                     <div>ten: {item.name}</div>
//                                     <div>tuoi: {item.age}</div>
//                                     <button onClick={() => this.props.handleDeleteUser(item.id)}>Delete</button>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div >
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    return (
        <div>
            {
                true &&
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