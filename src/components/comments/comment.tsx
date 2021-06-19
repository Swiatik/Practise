import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { getComments } from "../../redux/posts-reducer";

const Comments = (props: any) =>
(
    <div>
        {props.comments.length && props.comments.map((c: any) => (
            <div key={c.id}>
                <div>
                    <div>{c.commenter.useraname}</div>
                    <div>{c.message}</div>
                    <div>{c.created_at}</div>
                </div>
            </div>
        ))}
    </div>
)

export default Comments;