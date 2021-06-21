import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../../redux/posts-reducer";
import styles from './add-post.module.css'

type PropsType = {
    createPost: any,
}

type DescriptionState = {  
    description: string,
    photo: any
}

class AddPost extends React.Component<PropsType, DescriptionState>{
    state = {
        description: "",
        photo: null
    }

    onInputChange = (e: any) => {                
        e.preventDefault()
        this.setState({ description: e.currentTarget.value });
    };

    onAddPhoto = (e: any) => {
        e.preventDefault()
        this.setState({ photo: e.currentTarget.value });
    }

    onSend = (): void => {     
        // let please = {                    
        // storage: "cache",
        // metadata: {            
        //     mime_type: "image/jpeg",
        //     filename: "test.jpg"
                
        // }         
        this.props.createPost(this.state.description, this.state.photo);
        this.setState({
            description: ""
        });
      }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <input type={"file"} onChange={this.onAddPhoto}/>
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