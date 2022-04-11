import { Dialog, DialogContent } from '@material-ui/core';


export const DialogComponent = ({bookingDialogState, handleDialog, home}) => {

    return(
        <Dialog 
        open={bookingDialogState.open}
        onClose={() => handleDialog()}>
            <DialogContent>
                Dailog!
                { home ? home.title : null }
            </DialogContent>
        </Dialog>
    );
}