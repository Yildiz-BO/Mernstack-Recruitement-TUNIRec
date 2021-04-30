import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfile} from '../../actions/userprofileAction';
import { Link } from 'react-router-dom';
import ProfileActions from './ProfileActions';
import Experience from './Experience';


class dashboard extends Component {
   
    componentDidMount(){
        this.props.getProfile();
    }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let content;
    if(profile==null ||loading){
    content=(
      <div>
    <h>LOADING ............</h>
   
    </div>
    )
    }
    
    else{
      if(Object.keys(profile).length>0){
        content=(
        <div>
         
        <ProfileActions/>
        <Experience experience={profile.experience}/>
        
        <div style={{marginBottom:'60px'}}/>

        </div>
        )
        
      }
      else{
        content=(
        <div>
          <p className="lead text-muted">Bienvenu {user.name}</p>
          <p> pour creé un profil cliquer sur le bouton ci-desous:</p>
          <Link to="/createprofile" className="btn btn-lg btn-info">
          Nouveau profile</Link>
        </div>
        )
      }
    
    }
    
    return (
      <div className="dashboard">
      <div className="container">
      <div className="row">
      <div className="col-md-12">
        <h1 className="display-4">{user.name} Profile</h1>
        {content}
      </div>
      </div>
      </div></div>
    )
  }
}
dashboard.propTypes={
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(mapStateToProps,{getProfile})(dashboard);
