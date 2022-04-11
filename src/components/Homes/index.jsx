import React, {useEffect, useState} from 'react';
import apiClient from '../../services/apiClient';
import bookingDialogService from '../../services/bookingDialogService';
import {DialogComponent} from "../DialogComponent"

export default function Homes() {

    const [homeState, setHomesState] = useState([]);

    useEffect(() => {
        // const homesDataPromise = apiClient.getHomes();
        const homesDataPromise =apiClient.getHomes();

        homesDataPromise.then(homesData =>{
            console.log(homesData)
            setHomesState(homesData)
        });
    }, [])
  
    const [bookingDialogState, setBookingDialogState] = useState({open : false});
    const [homeSelectedState, setHomeSelectedState] = useState({});
  let homes;
  
    const handleDialog = () => {
        //alert(!bookingDialogState.open)
        setBookingDialogState({open : !bookingDialogState.open})
    }
  homes = homeState.map((home, index) => {
    return (
        <div className="col-6 col-md-6 col-lg-4 col-xl-3 mb-3" key={ index }>
          <div data-testid="home" className="card w-100">
            <img data-testid="home-image" src={ home.image } alt="" className="card-img-top" />
                <div className="card-body">
                    <div data-testid="home-title" className="card-title h5">{home.title}</div>               
                    <div data-testid="home-location">{ home.location }</div>
                    <div data-testid="home-price">${ home.price }/night</div>
                    <div className="d-flex justify-content-end">
                        <button
                         data-testid="home-booking-btn"
                         type="button"
                         className="btn btn-primary"
                        onClick={()=> { 
                            handleDialog() 
                            setHomeSelectedState(home)}}>Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
});
 

  return (
    <div className="container m-2">
        <h1>Homes</h1>
        <div className="row">
            {homes}
        </div>
        <DialogComponent 
        bookingDialogState={bookingDialogState} 
        handleDialog={handleDialog}
        home={homeSelectedState}/>
    </div>
  );
}
