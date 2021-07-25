import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Tooltip from 'rc-tooltip';

import { AppRoute } from '../../const.js';
import { ActionCreator } from '../../store/actions';

function SignOut(props) {
  const { login, onSignOutClick } = props;

  return (
    <Fragment>
      <Tooltip
        trigger={ ['hover'] }
        placement='bottom'
        overlay={ <div style={ { height: 100, width: 150, fontSize: 25 } }>Click to show up favorites</div> }
      >
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.FAVORITES }>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{ login }</span>
          </Link>
        </li>
      </ Tooltip>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.MAIN}
          onClick={() => {
            onSignOutClick();
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSignOutClick() {
    dispatch(ActionCreator.logout());
  },
});

SignOut.propTypes = {
  login: PropTypes.string,
  onSignOutClick: PropTypes.func.isRequired,
};

export { SignOut };
export default connect(null, mapDispatchToProps)(SignOut);
