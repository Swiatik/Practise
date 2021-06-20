import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../redux/posts-reducer";

type PropsType = {
    createPost: any,
}

type DescriptionState = {  
    description: string
}

class AddPost extends React.Component<PropsType, DescriptionState>{
    state = {
        description: ""
    }

    onInputChange = (e: any) => {                
        e.preventDefault()
        this.setState({ description: e.currentTarget.value });
    };

    onSend = (): void => {      
        this.props.createPost(this.state.description, null);
        this.setState({
            description: ""
        });
      }

    render() {
        return (
            <div>
                <div>
                    <textarea value={this.state.description} 
                              onChange={this.onInputChange}
                              placeholder="Enter description"></textarea>
                    <button onClick={this.onSend}>Send</button>
                </div>                
            </div>
        )
    }
}
export default connect(null, { createPost })(AddPost);