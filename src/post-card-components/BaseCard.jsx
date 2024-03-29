import React from "react";
import DisplayHandle from "../display-handle/DisplayHandle.jsx";

const UPDATE = 'update'
const POST = 'post'

export const UpdateCard = BasePostCard({type: BaseCard})
export const PostCard = BasePostCard({type: POST})
function BasePostCard({type}) {

    //types: update, post


    return function ({ postDetails }) {

        const {
            user,
            postTitle,
            createdAt,
            likeCount,
            commentCount,
            imageUrl,
        } = postDetails

        return(
            <>
                <br/>{type}<br/>
                <DisplayHandle user={user}/>
                {
                    type === POST &&
                    <span>Bookmark</span>
                }
                <h1>{postTitle}</h1>
                <span>{timeSince(createdAt)}</span>
                {
                    imageUrl && <img src={imageUrl} alt={'Post Image'}/>
                }
                {

                    type === UPDATE &&
                    <>
                        {!postDetails.technologies?.length && <span>No technologies</span>}

                        {postDetails.technologies?.length && postDetails.technologies.map(technology=> <span>{technology.name}</span>)}
                    </>
                }

                <button>{`Likes ${commentCount}`}</button>
                <button>{`Comments ${likeCount}`}</button>
            </>
        )
    }
}

function timeSince(createdAt) {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const diffInSeconds = Math.floor((currentTime - createdTime) / 1000);
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} days ago`;
    } else if (hours > 0) {
        return `${hours} hours ago`;
    } else if (minutes > 0) {
        return `${minutes} minutes ago`;
    } else {
        return 'just now';
    }
}