import {useState, useEffect} from 'react'
import moment from 'moment';
import apiClient from '../../services/apiClient';

export const HomeBooking = ({home, handleNotification}) => {
    const [checkInState, setCheckInState] = useState();
    const [checkOutState, setCheckOutState] = useState();
    const [totalPriceState, setTotalPriceState] = useState();

    // Having access to check-in and check-out dates, how do we calculate the total price?

    useEffect(() => {
        const price = home.price ? home.price : 0;
        const checkInDate = moment(checkInState, 'YYYY-MM-DD');
        const checkOutDate = moment(checkOutState, 'YYYY-MM-DD');

        const nights = checkOutDate.diff(checkInDate, 'days');
        const total = nights * price;
        if(total > 0){
            setTotalPriceState(total)
        }else{
            setTotalPriceState("--")
        }        

    }, [checkInState,checkOutState,home]);

    const handleBooking = () => {
        apiClient.bookHome(home, checkInState, checkOutState).then(response => handleNotification());
    }

    if(!home){
        return <div></div>
    }
    return(
    <>
         <h2 data-testid="title">
             { home ? home.title : null }
         </h2>

         <div data-testid="price" className="mb-3">
             <span className="font-weight-bold text-primary text-large">
             ${ home ? home.price : null }
             </span> per night
         </div>

        <div className="form-group">
            <label htmlFor="checkInDate">Choose your check-in date</label>
            <input 
                data-testid="check-in" 
                type="date"
                className="form-control"
                id="checkInDate"
                onChange={ e => setCheckInState(e.target.value)}
            />
        </div>
         
        <div className="form-group">
        <label htmlFor="checkOutDate">Choose your check-out date</label>
        <input
          data-testid="check-out"
          className="form-control"
          id="checkOutDate"
          type="date"
          onChange={ e => setCheckOutState(e.target.value) }
        />
      </div>

      <div data-testid="total" className="my-3 d-flex justify-content-end">
        <span className="font-weight-bold text-large">
          Total: ${ totalPriceState }
        </span>
      </div>

        <div className="d-flex justify-content-end">
            <button 
                data-testid="book-btn"
                className="btn btn-primary"
                onClick={handleBooking}>
                Book
            </button>
        </div>
    </>
    )
}