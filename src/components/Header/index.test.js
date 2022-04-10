import {getByTestId, render, screen} from '@testing-library/react'
import React from 'react'
import Header from './index.jsx'


it('should show logo', async () => {
    render(<Header/>)

    expect(screen.getByTestId('logo')).toBeTruthy();
    
})

it("should show filters", async () =>{

    render(<Header/>)
    expect(screen.getByTestId('home-type')).toBeTruthy();
    expect(screen.getByTestId('dates')).toBeTruthy();
    expect(screen.getByTestId('guests')).toBeTruthy();
    expect(screen.getByTestId('price')).toBeTruthy();
    expect(screen.getByTestId('rooms')).toBeTruthy();
    expect(screen.getByTestId('amenities')).toBeTruthy();
})