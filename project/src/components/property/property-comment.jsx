import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../../utils/utils';

function PropertyComment ( props ) {
  const {
    avatarImgPath,
    date,
    text,
    name,
    rating,
  } = props;

  const width = Utils.getWidthByRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ avatarImgPath } width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          { name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width:`${width}%`}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{Utils.formatDate(date)}</time>
      </div>
    </li>
  );
}

PropertyComment.propTypes = {
  avatarImgPath: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
};

export default PropertyComment;