import React, { Component } from 'react';
import InstagramPost from './instagramPost';
import YoutubePost from './youtubePost';
import FacebookPost from './facebookPost';
import OtherPost from './otherPost';

class FormSocial extends Component {

    state = {

        instagramPosts: [
            {}
        ],

        youtubePosts: [
            {}
        ],

        facebookPosts: [
            {}
        ],
        otherPosts: [
            {}
        ],
        nextId: 0

    }

    addInstaPost = () => {

        let id = this.state.nextId + 1;
        this.state.instagramPosts.push({ id: id });
        this.setState({ nextId: id });
        console.log(this.state.instagramPosts);
    }

    addYoutubePost = () => {

        let id = this.state.nextId + 1;
        this.state.youtubePosts.push({ id: id });
        this.setState({ nextId: id });
        console.log(this.state.youtubePosts);
    }

    addFacebookPost = () => {

        let id = this.state.nextId + 1;
        this.state.facebookPosts.push({ id: id });
        this.setState({ nextId: id });
        console.log(this.state.facebookPosts);
    }

    addOtherPost = () => {

        let id = this.state.nextId + 1;
        this.state.otherPosts.push({ id: id });
        this.setState({ nextId: id });
        console.log(this.state.otherPosts);
    }

    render() {

        return (
            <div className="social-wrapper">

                <h4 className="text-bold">Social deliverables</h4>
                <p className="text-normal">What posts have you asked Alex to do?</p>

                <div className="posts-area">

                    <h6 className="text-caps">INSTAGRAM:</h6>
                    <div>{this.state.instagramPosts.map(post => <InstagramPost key={post.id} />)}</div>
                    <button className="add-post" onClick={this.addInstaPost}>Add post</button>

                    <h6 className="text-caps">YOUTUBE:</h6>
                    <div>{this.state.youtubePosts.map(post => <YoutubePost key={post.id} />)}</div>
                    <button className="add-post" onClick={this.addYoutubePost}>Add post</button>

                    <h6 className="text-caps">FACEBOOK:</h6>
                    <div>{this.state.facebookPosts.map(post => <FacebookPost key={post.id} />)}</div>
                    <button className="add-post" onClick={this.addFacebookPost}>Add post</button>

                    <h6 className="text-caps">OTHER SOCIAL MEDIA:</h6>
                    <div>{this.state.otherPosts.map(post => <OtherPost key={post.id} />)}</div>
                    <button className="add-post" onClick={this.addOtherPost}>Add post</button>

                </div>

            </div>
        );
    }
}

export default FormSocial;