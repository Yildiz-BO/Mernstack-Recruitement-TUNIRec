import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/");
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="home">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p className="lead text-center">
                                    
                                </p>
                                <h1 className="display-4 text-center">
                                    Log In
                                </h1>

                                <div className="form-group">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                placeholder="Taper votre Email"
                                                className={classnames(
                                                    "form-control form-control",
                                                    {
                                                        "is-invalid":
                                                            errors.email
                                                    }
                                                )}
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                placeholder="votre Mot de passe"
                                                className={classnames(
                                                    "form-control form-control",
                                                    {
                                                        "is-invalid":
                                                            errors.password
                                                    }
                                                )}
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <input
                                            type="submit"
                                            className="btn btn-lg btn-primary"
                                        />
                                        <hr />
                                    </form>
                                    <div
                                        className="alert alert-success"
                                        role="alert"
                                    >
Vous n'avez pas de compte? Inscrivez-vous ci-dessous!                                    </div>
                                    <Link
                                        to="register"
                                        className="btn btn-lg btn-success"
                                    >
                                        S'inscrire
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
