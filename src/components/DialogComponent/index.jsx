import { Dialog, DialogContent } from '@material-ui/core';
import { HomeBooking } from '../HomeBooking';


export const DialogComponent = ({bookingDialogState, handleDialog, home, handleNotification}) => {

    return(
        <Dialog 
        maxWidth="xs"
        fullWidth={true}
        open={bookingDialogState.open}
        onClose={() => handleDialog()}
        >
            <DialogContent>
                <HomeBooking home={home} handleNotification={handleNotification}/>
            </DialogContent>
        </Dialog>
    );
}