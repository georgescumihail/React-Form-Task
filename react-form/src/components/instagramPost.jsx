import React, { Component } from 'react';

class InstagramPost extends Component {
    state = {

    }

    render() {

        return (
            <div className="insta-wrapper">
                <select className="social-field" name="post-type">
                    <option value="post">Post</option>
                    <option value="story">Story</option>
                </select>
                <input className="social-field" type="date"></input>
            </div>
        );
    }
}

export default InstagramPost;