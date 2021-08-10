import React from "react";
class LikeButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            like: 0,
        };
  
    }
    handleIncrement = () => {
        this.setState({
            like: this.state.like +1,
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.handleIncrement}>{this.state.like} Like</button>
            </div>
        );
    }
}
export default LikeButton;

