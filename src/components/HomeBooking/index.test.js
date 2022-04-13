import {act, getAllByTestId,getByTestId, getNodeText,render, screen} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom';
import apiClient from '../../services/apiClient.js'
import bookingDialogService from '../../services/bookingDialogService.js'
import { HomeBooking } from './index.jsx'


let container = null;

const mockedHome = {
  title: "Test home 1",
  image: "listing.jpg",
  location: "Test location 1",
  price: "1",
};

beforeEach(() => {

  container = render(<HomeBooking home={ mockedHome } />).container;

});

it('foo', () => {

  console.log(container.innerHTML);

  expect(true).toBeTruthy();

});