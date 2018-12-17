
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(driver, revenue){
  return drivers.filter(function(driver){
    return driver.name > revenue
  })
}
