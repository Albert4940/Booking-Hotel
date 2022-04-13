import {useState, useEffect} from 'react'
import moment from 'moment';

export const HomeBooking = ({home}) => {
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
        if(Number.isInteger(total)){
            setTotalPriceState(total)
        }else{
            setTotalPriceState("--")
        }        

    }, [checkInState,checkOutState,home]);

    if(!home){
        return <div></div>
    }
    return(
    <>
         <div data-testid="title">
             { home ? home.title : null }
         </div>

         <div data-testid="price">
             { home ? home.price : null }
         </div>

         <input 
            data-testid="check-in" 
            type="date"
            onChange={ e => setCheckInState(e.target.value)}
         />
         
         <input 
            data-testid="check-out"
            type="date"
            onChange={e => setCheckOutState(e.target.value)}    
         />

         <div data-testid="total">
             {totalPriceState}
        </div>
    </>
    )
}