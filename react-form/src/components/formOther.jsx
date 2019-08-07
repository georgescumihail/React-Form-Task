import React, { Component } from 'react';

class FormOther extends Component {
    state = {}
    render() {
        return (

            <div className="form-other-wrapper">
                <h4 className="text-bold">Other paid content</h4>
                <p className="text-normal">Have you asked Alex to create any further content?</p>

                <div className="checkboxes-area">

                    <div className="checkbox-area"> <input type="checkbox"></input><label className="label-text">Event</label></div>
                    <div className="checkbox-area"><input type="checkbox"></input><label className="label-text">Influencer blog content</label></div>
                    <div className="checkbox-area"> <input type="checkbox"></input><label className="label-text">Brand website content</label></div>
                    <div className="checkbox-area"> <input type="checkbox"></input><label className="label-text">Newsletter</label></div>
                    <div className="checkbox-area"> <input type="checkbox"></input><label className="label-text">In-store appearance</label></div>
                    <div className="checkbox-area"> <input type="checkbox"></input><label className="label-text">Other</label></div>
                </div>
            </div>
        );
    }
}

export default FormOther;