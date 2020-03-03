import PropTypes from 'prop-types';


const propTypes = {
  className: PropTypes.string,
  itemList: PropTypes.array,
  ItemComponent: PropTypes.elementType,
};

const defaultProps = {
  className: '',
  itemList: [],
  ItemComponent: () => null,
};

export default {
  propTypes,
  defaultProps,
};
