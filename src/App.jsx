import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialMediaPost from "./SocialMediaPost.jsx";
import Test from "./display-handle/Test.jsx";

import {
  UpdateCard, PostCard
} from "./post-card-components/BaseCard.jsx";

/*
* Dummy data to stand in as placeholders for shit from the db
* */
class Technology{
  constructor(name, image) {
    this.name = name
    this.image = image
  }
}

class UpdatePost {
  constructor({ postText, postTitle, likeCount, commentCount, technologies,
                imageUrl}) {
    this.postText = postText
    this.user = {
      username: 'bob',
      image: 'fakewayurl'
    }
    this.likeCount = likeCount
    this.commentCount = commentCount
    this.postTitle = postTitle
    this.technologies = technologies
    this.imageUrl = imageUrl
  }
}

const UpdateCardDDummyData = [
  new UpdatePost({
    postText: "test post text here",
    postTitle: "Post1",
    likeCount: 5,
    commentCount: 55,
  }),
  new UpdatePost({
    postText: "test post text here more random text is going right here",
    postTitle: "Post2",
    technologies:[
      new Technology('React', 'www.fakewebsite.com'),
      new Technology('Vue', 'www.vueapp.com')
    ],

    likeCount: 10,
    commentCount: 36,
    imageUrl: "What uuuuuup.com"
  })
]
const PostCardDummyData = [
  new UpdatePost({
    postText: "test post text here",
    postTitle: "Post1",
    likeCount: 5,
    commentCount: 55,
  }),
  new UpdatePost({
    postText: "test post text here more random text is going right here",
    postTitle: "Post2",
    likeCount: 10,
    commentCount: 36,
    imageUrl: "What uuuuuup.com"
  })
]

function App() {

  return <>
    {UpdateCardDDummyData.map((postDetails, index) => <UpdateCard key={index} postDetails={postDetails}/>)}
    {PostCardDummyData.map((postDetails, index) => <PostCard key={index} postDetails={postDetails}/>)}
  </>
}

export default App

