import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
class Subscribe extends React.Component {
constructor()
{ super()
}
  render() {
    const { offre } = this.props;

   
    return (

        <form >
            <br></br>
            <h3>pour postuler a cet offre veuillez entrée votre adresse mail et votre currium vital , le recruteur va vous contactez ulteriérement
</h3>
<hr></hr>
        <label>
            Votre Email :  </label>
            <input type="text" name="mail" />
        <br></br>
        <label>
            Votre Currium vital : </label><input type="file" />
        <br></br> 
        <hr></hr>
        
       <button className="btn btn-lg btn-warning" Link to="offreDashboard"  > postuler</button>
           </form>
           
    );
  }
}
Subscribe.propTypes = {
    offre: PropTypes.object.isRequired
   };
export default Subscribe 