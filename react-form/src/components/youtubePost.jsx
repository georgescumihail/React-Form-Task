import React, { Component } from 'react';

class YoutubePost extends Component {
    state = {

    }

    render() {

        return (
            <div className="yt-wrapper">
                <select className="social-field" name="post-type">
                    <option value="video">Video</option>
                    <option value="post">Post</option>
                </select>
                <input className="social-field" type="date"></input>
            </div>
        );
    }
}

export default YoutubePost;