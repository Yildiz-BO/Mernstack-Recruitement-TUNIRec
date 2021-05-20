import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOffre} from '../../actions/offresAction';
import { Link } from 'react-router-dom';
import OffreAction from './OffreAction';



class offreDashboard extends Component {
   
    componentDidMount(){
        this.props.getOffre();
    }
  render() {
    const { user } = this.props.auth;
    const { offre, loading } = this.props.offre;
    let content;
    if(offre==null ||loading){
    content=(
      <div>
    <h>LOADING ............</h>
   
    </div>
    )
    }
    
    else{
      if(Object.keys(offre).length>0){
        content=(
        <div>
         
        <OffreAction/>
        
        </div>
        )
        
      }
      else{
        content=(
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p> To add new offer click the button below:</p>
          <Link to="/createoffre" className="btn btn-lg btn-info">
          Create new offres</Link>
        </div>
        )
      }
    
    }
    
    return (
      <div className="offreDashboard">
      <div className="container">
      <div className="row">
      <div className="col-md-12">
        <h1 className="display-4">offreDashboard for company</h1>
        {content}
      </div>
      </div>
      </div></div>
    )
  }
}
offreDashboard.propTypes={
  getOffre: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  offre: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  offre: state.offre,
  auth: state.auth
});
export default connect(mapStateToProps,{getOffre})(offreDashboard);
