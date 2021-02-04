export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToCreateTrip = (history) =>{
    history.push("/trips/create");
  };

  export const goToListTripsPage = (history) =>{
    history.push("/trips/list");
  }
