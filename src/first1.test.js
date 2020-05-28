import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  fetchQuote from './App';


it('renders without crashing', () => {

    expect(fetchQuote).toEqual({ quote: null });
});