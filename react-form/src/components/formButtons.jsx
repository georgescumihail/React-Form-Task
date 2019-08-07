import React, { Component } from 'react';

class FormButtons extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="buttons-wrapper">
                    <button className="cancel-button">Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </div>
        );
    }
}

export default FormButtons;