import React, { PropTypes } from 'react';

const Row = function (props = {}) {

  const { className, children, column, expanded, ...other } = props;

  let cls = column ? 'column row' : 'row';

  if (expanded) {
    cls += ' expanded';
  }

  cls += className ? ` ${className}` : '';

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  column: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
  expanded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
};

export default Row;
