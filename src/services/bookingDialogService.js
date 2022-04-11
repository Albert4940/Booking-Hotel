import {BehaviorSubject} from 'rxjs'

const events$ = new BehaviorSubject({open : false})

const bookingDialogService = {

    open: (home) => {console.log('click!', home)},
    //events$: events$.asObservable(),
  };
  
  export default bookingDialogService;