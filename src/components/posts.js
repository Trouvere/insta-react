import React, { Component } from "react";
import Post from "./post";

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGN4c2ZYSeBsZMG6ed2xiHOnZ9Wb2zqaXid4jzXB6yJ4U7p8ki&usqp=CAU"
          alt="insta"
        />
        <Post
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjAEGyoocFZDUOgaZ22gc61WUKHsLv6igL3EGo4lYuHPm0XXnE&usqp=CAU"
          alt="insta2"
        />
      </div>
    );
  }
}
