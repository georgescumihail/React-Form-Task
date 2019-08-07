import React, { Component } from 'react';

class FacebookPost extends Component {

    state = {

    }

    render() {

        return (
            <div className="fb-wrapper">
                <select className="social-field" name="post-type" placeholder="Select post type">
                    <option value="post">Post</option>
                    <option value="live">Live</option>
                </select>
                <input className="social-field" type="date"></input>
            </div>
        );
    }
}

export default FacebookPost;