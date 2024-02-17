import { useState } from "react";
const User = (props) =>{
    const [count] = useState(0);
    const {name,location,contact} = props;
    return(
        <div className="user">
            <h1>Count : {count}</h1>
            <h2>Name : {name}</h2>
            <h4>Location : {location}</h4>
            <h4>Contact : {contact}</h4>
        </div>
    );
}
export default User;