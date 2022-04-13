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
  price: "125",
};

beforeEach(() => {

  container = render(<HomeBooking home={ mockedHome } />).container;
    //   container = document.createElement('div');
    //   document.body.appendChild(container);

         // await act(async () =>{
        // ReactDOM.createRoot(container).render(<HomeBooking home={mockedHome}/>)
       
   // })

});

it('Should show title', () => {

 expect(getByTestId(container, 'title').textContent).toBe('Test home 1')

});

it('Should show price', () => {

    expect(getByTestId(container, 'price').textContent).toBe('125')
   
});

it('Should show check-in date field', () => {

    expect(getByTestId(container, 'check-in')).toBeTruthy();
   
});


it('Should show check-out date field', () => {

    expect(getByTestId(container, 'check-out')).toBeTruthy();
   
});