//jshint esversion:6

module.expoerts.getDate = getDate;

function getDate(){

  let today = new Date();

  let options {
    weekday: "long",
    day:"numeric",
    month:"long"
  };

  let day = today.toLocaleDateString("en-GB", options);

    return day;
  }


  module.expoerts.getDay = getDay;

  function getDay(){

    let today = new Date();

    let options {

      day:"numeric",
    };

    let day = today.toLocaleDateString("en-GB", options);

      return day;
    }
