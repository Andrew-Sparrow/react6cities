import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Tooltip from 'rc-tooltip';

import {AppRoute} from '../../const';
import {resetFavorites} from '../../store/actions';
import {getPlaces} from '../../store/places/selectors';
import {logout} from '../../store/api-actions';

function SignOut(props) {
  const {login} = props;
  const places = useSelector(getPlaces);

  const dispatch = useDispatch();
  const handleLogOutButtonClick = () => {
    dispatch(logout());
    dispatch(resetFavorites(places));
  };

  return (
    <Fragment>
      <Tooltip
        trigger={['hover']}
        placement='bottom'
        overlay={<div style={{height: 60, width: 150, fontSize: 20}}>Click to show up favorites</div>}
      >
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{login}</span>
          </Link>
        </li>
      </ Tooltip>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.MAIN}
          onClick={handleLogOutButtonClick}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ Fragment>
  );
}

SignOut.propTypes = {
  login: PropTypes.string,
};

export default SignOut;
