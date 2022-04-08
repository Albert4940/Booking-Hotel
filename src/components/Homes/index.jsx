import React, {useEffect, useState} from 'react';
import apiClient from '../../services/apiClient';

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
  
  let homes;
  

  homes = homeState.map((home, index) => {
    return (
      <div data-testid="home" key={ index }>
          <div data-testid="home-title">{home.title}</div>
          <img data-testid="home-image" src={home.image} alt=""/>
          <div data-testid="home-location">{ home.location }</div>
          <div data-testid="home-price">{ home.price }</div>
      </div>
    );
});
 
  return (
    <div>
     {homes}
    </div>
  );
}