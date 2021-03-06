import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

function CardInfo(props) {
  const {
    id,
    price,
    title,
    isFavorite,
    type,
    width,
    onFavoriteClick,
  } = props;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button" onClick={onFavoriteClick}>
          <svg className="place-card__bookmark-icon" width="18" height="19" style={{stroke: isFavorite && '#4481c3', fill: isFavorite && '#4481c3'}}>
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${width}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

CardInfo.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  type: PropTypes.string,
  width: PropTypes.number,
  onFavoriteClick: PropTypes.func,
};

export default CardInfo;
