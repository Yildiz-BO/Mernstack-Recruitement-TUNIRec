import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class OffreItem extends Component {
  render() {
      const { offre } = this.props;
      return (
       <div className="card card-body bg-light mb-3">
            <div className="row">
            
            <div className="col-lg-6 col-md-4 col-8">
                <h3> {profile.user && profile.user.name}</h3>
                <p>
                {offre.status}{' '}
                {isEmpty(offre.company) ? null : (
                <span>at {offre.company}</span>
                 )}
               </p>
               <p>
               {isEmpty(offre.location) ? null : (
                  <span>{offre.location}</span>
                )}
               </p>
               <Link to={`/offres/${offre.jobTitle}`} className="btn btn-info">
       Voir Offre
              </Link>
           </div>
            <div className="col-md-4 d-none d-md-block">
              <h4>Skill Set</h4>
              <ul className="list-group">
                 {offre.skills.slice(0, 4).map((skill, index) => (
                   <li key={index} className="list-group-item">
                    <i className="fa fa-check pr-1" />
                       {skill}
                   </li>
                 ))}
              </ul>
               </div>
                  
             </div>
         </div>
        );
     }
   }

   OffreItem.propTypes = {
    offre: PropTypes.object.isRequired
   };

   export default OffreItem;