import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo :{}
        }
    }
    async componentDidMount() {
        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json)
       this.setState({
        userInfo :json,
       });
    }
    render() {

        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h4>Location : {location}</h4>
                <h4>Contact : harshitkumarpatidar2000@gmail.com</h4>
            </div >
        );
    }
}
export default UserClass