
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(){
  return drivers.filter(function(driver){
    return driver.name > revenue
  })
}
