import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/posts-reducer";

type PropsType = {
    post_id: string,
    addComment: any,
    comments: any
}

type CommentState = {  
    comment: string
}

class Comments extends React.Component<PropsType, CommentState>{
    state = {
        comment: ""
    }

    onInputChange = (e: any) => {                
        e.preventDefault()
        this.setState({ comment: e.currentTarget.value });
    };

    onSend = (): void => {      
        this.props.addComment(this.props.post_id, this.state.comment);
        this.setState({
            comment: ""
        });
      }

    render() {
        return (
            <div>
                <div>
                    <textarea value={this.state.comment} 
                              onChange={this.onInputChange}
                              placeholder="Enter comment"></textarea>
                    <button onClick={this.onSend}>Send</button>
                </div>
                <div>
                    {this.props.comments.length && this.props.comments.map((c: any) => (
                        <div key={c.id}>
                            <div>
                                <div>{c.commenter.useraname}</div>
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