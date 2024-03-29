import React from 'react';

export default function DisplayHandle({user}){

    return (
        <div>
            <img src={user.imageSrc} alt={false && "User profile"}/>
            <span>@{user.username}</span>
        </div>
    )
}