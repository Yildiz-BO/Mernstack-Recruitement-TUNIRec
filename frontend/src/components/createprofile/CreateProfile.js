import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import {withRouter} from 'react-router-dom';
import TextAreaField from '../common/TextAreaField';

import {createProfile} from '../../actions/userprofileAction';




class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            profilename:'',
            location:'',
            skills:'',
            interest:'',
            bio:'',
            errors:{}
            
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    onSubmit(e) {
        e.preventDefault();
    
        const profileData={
            profilename:this.state.profilename,
            location:this.state.location,
            skills:this.state.skills,
            interest:this.state.interest,
            bio:this.state.bio
        }
       
        this.props.createProfile(profileData, this.props.history);
      }
     onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
      const {errors}=this.state;
    return (
      <div className='createprofile'>
      <div className='container'>
      <div className="row">
      <div className="col-md-8 m-auto">
        <h1 className="display-4 text-center">Creer votre profil </h1>
        <form onSubmit={this.onSubmit}>
        <TextField
        placeholder="nom de profile"
        name="profilename"
        value={this.state.profilename}
        onChange={this.onChange}
        error={errors.profilename}
        info="Entrer vorte nom de profil "/>
        <TextField
        placeholder="Location"
        name="location"
        value={this.state.location}
        onChange={this.onChange}
        error={errors.location}
        info="exp (tunis , sokra .."/>
        <TextField
        placeholder="compétence"
        name="skills"
        value={this.state.skills}
        onChange={this.onChange}
        error={errors.skills}
        info="vos compétences(exp. HTML,Management, Marketing, Customer Service)"/>
    
        <TextField
        placeholder="centre d'interêt"
        name="interest"
        value={this.state.interest}
        onChange={this.onChange}
        error={errors.interest}
        info="(exp. Blogging, Football, dev)"/>
         <TextAreaField
        placeholder="Bio"
        name="bio"
        value={this.state.bio}
        onChange={this.onChange}
        error={errors.bio}
        info="Présentez-vous brièvement"/>
        <input
                  type="submit"
                  value="Créer mon PROFIL"
                  className="btn btn-info btn-block mt-4"
                />
        </form>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
CreateProfile.propTypes={
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  })


export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
