import React, { Component } from 'react';

class FormFee extends Component {
    state = {
        firstSum: 0,
        secondSum: 0
    };

    setFirstValue = (e) => {

        this.setState({ firstSum: parseInt(e.target.value) });
    }

    setSecondValue = (e) => {

        this.setState({ secondSum: parseInt(e.target.value) });
    }

    render() {

        let totalSum = this.state.firstSum + this.state.secondSum;

        return (
            <div className="fee-wrapper">

                <div className="fee-wrapper-small">

                    <div className="fee-wrapper-small-left">

                        <h4 className="text-bold">Influencer fee</h4>
                        <p className="text-normal">How much are you paying Alex for the agreed deliverables?</p>

                    </div>

                    <div className="fee-wrapper-small-right">
                        <input onInput={this.setFirstValue} type="number" className="fee-input"></input>
                    </div>
                </div>

                <div className="fee-wrapper-small">

                    <div className="fee-wrapper-small-left">

                        <h4 className="text-bold">Usage fee</h4>
                        <p className="text-normal">Are you paying Alex a usage fee for this content?</p>
                    </div>
                    <div className="fee-wrapper-small-right">
                        <input onInput={this.setSecondValue} type="number" className="fee-input"></input>
                    </div>
                </div>
                <div className="fee-wrapper-small">
                    <div className="fee-wrapper-small-left">
                        <h4 className="text-bold">Total fee:</h4>
                    </div>
                    <div className="fee-wrapper-small-right-end">
                        <h4 className="text-bold">&pound; {totalSum}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormFee;