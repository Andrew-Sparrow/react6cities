import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {addToFavorite} from '../../store/api-actions';

function FavoritePlace(props) {
  const {
    id,
    price,
    title,
    type,
    isFavorite,
  } = props;

  const dispatch = useDispatch();

  const handleFavoriteChange = (evt) => {
    dispatch(addToFavorite(id, !isFavorite));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${ id }`}>
          <img className="place-card__image" src="img/apartment-small-03.jpg" width={150} height={110} alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={handleFavoriteChange}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

FavoritePlace.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoritePlace;
