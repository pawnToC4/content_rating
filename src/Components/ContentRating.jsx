
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes:0,
        dislikes:0,
        handleLike:()=>{
            this.setState((prevState)=>({
                likes: prevState.likes + 1
            }));
        },
        handleDislike:()=>{
            this.setState((prevState)=>({
                dislikes: prevState.dislikes + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
        <div class="content-rating">
            <p>
            Add Text Here    
            </p>
            <div class="rating-buttons">
                <button class="like-button" onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                <button class="dislike-button" onClick={this.state.handleDislike}>
                    Dislike ({this.state.dislikes})
                </button>
            </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
