import React from "react";

export default function SocialMediaPost({dontShowLikes}){


    function Turtle(name, color){
        this.name  = name
        this.color = color
    }

    console.log(
        new Turtle("Leo", "blue"),
        new Turtle("Ralph", "red"),
    )


    return <div
        style={{background:'red'}}
    >
        <h1>Username</h1>
        <p> I am post text on a facebook or somehting like that.</p>
        {
            !dontShowLikes &&
            <div>
                {5}
                <p>likes</p>
            </div>
        }
    </div>
}

