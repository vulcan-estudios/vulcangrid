import React from 'react';
import { expect } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import Row from '../src/Row';

describe('Row', function () {

  it('Has default tag', function () {
    const wrapper = shallow(<Row />);
    const actual = wrapper.is('div');
    expect(actual).to.be.true;
  });

  it('Has default class', function () {
    const wrapper = shallow(<Row />);
    const actual = wrapper.hasClass('row');
    expect(actual).to.be.true;
  });

  it('Modified class', function () {
    const wrapper = shallow(<Row column={1} expanded={1} />);
    const actual = wrapper.prop('className');
    const expected = 'column row expanded';
    expect(actual).to.equal(expected);
  });

  it('Custom class', function () {
    const wrapper = shallow(<Row className='extra cls' />)
    const actual = wrapper.prop('className');
    const expected = 'row extra cls';
    expect(actual).to.equal(expected);
  });

  it('Modified and custom class', function () {
    const wrapper = shallow(<Row column={true} className='extra cls' />)
    const actual = wrapper.prop('className');
    const expected = 'column row extra cls';
    expect(actual).to.equal(expected);
  });

  it('Children can be a string', function () {
    const wrapper = shallow(<Row>This is the element content.</Row>)
    const actual = wrapper.text();
    const expected = 'This is the element content.';
    expect(actual).to.equal(expected);
  });

  it('Children can be an element', function () {
    const wrapper = shallow(<Row><b>This is the element content.</b></Row>)
    const actual = wrapper.contains(<b>This is the element content.</b>);
    const expected = true;
    expect(actual).to.equal(expected);
  });

});
