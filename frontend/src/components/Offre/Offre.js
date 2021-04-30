import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import OffreItem from './OffreItem';
import { getOffres } from '../../actions/offresAction';

class Offres extends Component {
  componentDidMount() {
    this.props.getOffres();
  }

  render() {
    const { offres, loading } = this.props.offre;
    let OffreItems;

    if (offres === null || loading) {
        OffreItems = <h3> loading..........</h3>;
    } else {
      if (offres.length > 0) {
        
        OffreItems = offres.map(offre => (
          <OffreItem key={offre._id} offre={offre} />
        ));
      } else {
        OffreItems = <h4>y pas d'offes pour cet utilisateur .....</h4>;
      }
    }

    return (
      <div className="offres">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Offres d'emploi</h1>
              <p className="lead text-center">
              Explorez et entrez en contact avec un chercheur d'emploi gratuitement!              </p>
              {OffreItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Offres.propTypes = {
  getOffres: PropTypes.func.isRequired,
  offre: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    offre: state.offre
});

export default connect(mapStateToProps, { getOffres })(Offres);
