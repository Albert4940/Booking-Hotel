
export const HomeBooking = ({home}) => {
    return(
    <>
         <div data-testid="title">
             { home ? home.title : null }
         </div>

         <div data-testid="price">
             { home ? home.price : null }
         </div>

         <div data-testid="check-in">
             
         </div>

         
         <div data-testid="check-out">
             
         </div>
    </>
    )
}