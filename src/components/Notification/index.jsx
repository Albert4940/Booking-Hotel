import { Snackbar } from '@material-ui/core';

export default function Notification({notificationDialogState, handleNotification}) {

    return(
        <Snackbar
            open={notificationDialogState.open}
            onClose={() => handleNotification()}
           message={"Home Booked !"}
           autoHideDuration={3000}
        />
    )
}