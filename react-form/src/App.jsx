import React, { Component } from 'react';
import './App.css';
import FormHeader from './components/formHeader';
import FormFee from './components/formFee';
import FormSocial from './components/formSocial';
import FormOther from './components/formOther';
import FormButtons from './components/formButtons';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <div className="main-wrapper">
          <FormHeader />
          <FormFee />
          <FormSocial />
          <FormOther />
          <FormButtons />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
