import React, { PropTypes } from 'react';

const Column = function (props = {}) {

  const {
    className, children,
    sm, smOffset, md, mdOffset, lg, lgOffset,
    ...other } = props;

  let cls = 'column';

  if (sm)       cls += ` small-${sm}`;
  if (smOffset) cls += ` small-offset-${smOffset}`;
  if (md)       cls += ` medium-${md}`;
  if (mdOffset) cls += ` medium-offset-${mdOffset}`;
  if (lg)       cls += ` large-${lg}`;
  if (lgOffset) cls += ` large-offset-${lgOffset}`;

  cls += className ? ` ${className}` : '';

  return (
    <div className={cls} {...other}>
      {children}
    </div>
  );
};

const gridVal = function (props, prop, compName) {

  const n = props[prop];

  if (n === undefined) {
    return;
  }

  const isPosInt = Math.abs(Math.round(n)) === n;

  if (typeof n !== 'number' || !isPosInt || n < 1 || n > 12) {
    return new Error(`Invalid prop ${prop} supplied to ${compName}.
It should be a integer between 1 and 12.`);
  }
};

Column.propTypes = {
  sm: gridVal,
  smOffset: gridVal,
  md: gridVal,
  mdOffset: gridVal,
  lg: gridVal,
  lgOffset: gridVal,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
};

export default Column;
