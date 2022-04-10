import {act, getAllByTestId,getByTestId, getNodeText,render, screen} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom';
import apiClient from '../../services/apiClient.js'
import Homes from './index.jsx'

let container;
beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);

    jest.spyOn(apiClient,'getHomes').mockImplementation(() => {
        return Promise.resolve([
            {
              title: "Test home 1",
              image: "listing.jpg",
              location: "Test location 1",
              price: "1",
            },
            {
              title: "Test home 2",
              image: "listing.jpg",
              location: "Test location 2",
              price: "2",
            },
            {
              title: "Test home 3",
              image: "listing.jpg",
              location: "Test location 3",
              price: "3",
            }
          ]);
    })

    await act(async () =>{
        ReactDOM.createRoot(container).render(<Homes/>)
       
    })
  });

afterEach(() => {
    document.body.removeChild(container);
    container = null;
 });

it('should show homes', async () => {


const homes = getAllByTestId(container, 'home')
expect(homes.length).toBeGreaterThan(0);
})

it('should show home title', async () => {
   
const homeTitles = getAllByTestId(container,'home-title')
expect(getNodeText(homeTitles[0])).toBe('Test home 1');
})

it('should show home image', () =>{
    const homeImages = getAllByTestId(container, 'home-image')
    expect(homeImages[0]).toBeTruthy()
})

it('should show home location', () => {

    const homeLocations = getAllByTestId(container, 'home-location');
  
    expect(getNodeText(homeLocations[0])).toBe('Test location 1');
  
  });
  
  it('should show home price', () => {
  
    const homePrices = getAllByTestId(container, 'home-price');
  
    expect(getNodeText(homePrices[0])).toBe('$1/night');
  
  });