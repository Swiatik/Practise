import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/posts-reducer";
import { CommentType } from "../../redux/types/types";

type PropsType = {
    post_id: number
    addComment: (id: number, message: string) => void
    comments: Array<CommentType>
}

type CommentState = {  
    message: string
}

class Comments extends React.Component<PropsType, CommentState>{
    state = {
        message: ""
    }

    onInputChange = (e: any) => {                
        e.preventDefault()
        this.setState({ message: e.currentTarget.value });
    };

    onSend = (): void => {      
        this.props.addComment(this.props.post_id, this.state.message);
        this.setState({
            message: ""
        });
      }

    render() {
        return (
            <div>
                <div>
                    <textarea value={this.state.message} 
                              onChange={this.onInputChange}
                              placeholder="Enter comment"></textarea>
                    <button onClick={this.onSend}>Send</button>
                </div>
                <div>
                    {this.props.comments.length && this.props.comments.map((c: CommentType) => (
                        <div key={c.id}>
                            <div>
                                <div>{c.commenter.username}</div>
                                <div>{c.message}</div>
                                <div>{c.created_at}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default connect(null, { addComment })(Comments);