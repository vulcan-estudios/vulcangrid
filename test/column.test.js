import React from 'react';
import { expect } from 'chai';
import enzyme, { shallow, mount, render } from 'enzyme';
import Column from '../src/Column';

describe('Column', function () {

  it('Default tag', function () {
    const wrapper = shallow(<Column />)
    const actual = wrapper.is('div');
    const expected = true;
    expect(actual).to.equal(expected);
  });

  it('Default class', function () {
    const wrapper = shallow(<Column />)
    const actual = wrapper.prop('className');
    const expected = 'column';
    expect(actual).to.equal(expected);
  });

  it('Custom class', function () {
    const wrapper = shallow(<Column className='custom' />)
    const actual = wrapper.prop('className');
    const expected = 'column custom';
    expect(actual).to.equal(expected);
  });

  it('Configured and custom class', function () {
    const wrapper = shallow(<Column sm={12} md={6} className='custom' />)
    const actual = wrapper.prop('className');
    const expected = 'column small-12 medium-6 custom';
    expect(actual).to.equal(expected);
  });

  it('Small column', function () {
    const wrapper = shallow(<Column sm={5} />)
    const actual = wrapper.prop('className');
    const expected = 'column small-5';
    expect(actual).to.equal(expected);
  });

  it('Medium column', function () {
    const wrapper = shallow(<Column md={7} />)
    const actual = wrapper.prop('className');
    const expected = 'column medium-7';
    expect(actual).to.equal(expected);
  });

  it('Large column', function () {
    const wrapper = shallow(<Column lg={9} />)
    const actual = wrapper.prop('className');
    const expected = 'column large-9';
    expect(actual).to.equal(expected);
  });

  it('Mixed classes (part1)', function () {
    const wrapper = shallow(<Column sm={12} md={6} lg={4} />)
    const actual = wrapper.prop('className');
    const expected = 'column small-12 medium-6 large-4';
    expect(actual).to.equal(expected);
  });

  it('Mixed classes (part2)', function () {
    const wrapper = shallow(<Column sm={6} smOffset={6} md={6} lg={4} />)
    const actual = wrapper.prop('className');
    const expected = 'column small-6 small-offset-6 medium-6 large-4';
    expect(actual).to.equal(expected);
  });

  it('Mixed classes (part3)', function () {
    const wrapper = shallow(<Column sm={6} md={6} mdOffset={6} lg={4} lgOffset={8} />)
    const actual = wrapper.prop('className');
    const expected = 'column small-6 medium-6 medium-offset-6 large-4 large-offset-8';
    expect(actual).to.equal(expected);
  });

  it('Element contains string', function () {
    const wrapper = shallow(<Column>The column content.</Column>)
    const actual = wrapper.text();
    const expected = 'The column content.';
    expect(actual).to.equal(expected);
  });

  it('Element contains element', function () {
    const wrapper = shallow(<Column><b>The column content.</b></Column>)
    const actual = wrapper.contains(<b>The column content.</b>);
    const expected = true;
    expect(actual).to.equal(expected);
  });

});
