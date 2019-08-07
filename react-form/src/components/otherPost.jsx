import React, { Component } from 'react';

class OtherPost extends Component {
    state = {

    }

    render() {

        return (
            <div className="other-wrapper">
                <select className="social-field" name="post-type" placeholder="Select social network">
                    <option value="twitter">Twitter</option>
                    <option value="myspace">MySpace</option>
                    <option value="vk">VK</option>
                </select>
                <div className="other-notice">
                    <label className="fine-text">*We're unable to track these social networks at the moment, but we will take these into account when we break down campaign spend</label>
                </div></div>
        );
    }
}

export default OtherPost;