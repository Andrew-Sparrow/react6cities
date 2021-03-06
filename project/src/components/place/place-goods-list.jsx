import React from 'react';
import PropTypes from 'prop-types';
import PlaceGood from './place-good';
import Util from '../../util/util';

function PlaceGoodList(props) {
  const {goods} = props;
  const generatedIds = Util.generateIdKeys(goods.length);

  return (
    <ul className="property__inside-list">
      {goods.map((good, index) => <PlaceGood good={good} key={generatedIds[index]} />)}
    </ul>
  );
}

PlaceGoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

export default PlaceGoodList;
