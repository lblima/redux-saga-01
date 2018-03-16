import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import Enzyme, {
    mount
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

function setup() {
    const props = {
        requestRandomDog: jest.fn(),
        requestAfricanDog: jest.fn(),
    } 
    const enzymeWrapper = mount( < App { ...props } />) 
    
    return {
        props,
        enzymeWrapper
    }
} 

describe('Header', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('header').hasClass('App-header')).toBe(true) 
        expect(enzymeWrapper.find('h1').text()).toBe('Welcome to Dog Saga')
    }) 
    
    // it('should call addTodo if length of text is greater than 0', () => {
    //     const { enzymeWrapper, props } = setup()
    //     const input = enzymeWrapper.find('button').hasClass('')
    //     input.props().onSave('')
    //     expect(props.addTodo.mock.calls.length).toBe(0)
        
    //     input.props().onSave('Use Redux')
    //     expect(props.addTodo.mock.calls.length).toBe(1)
    // })
})