// add solution here
function theBeatlesPlay(musicians,instruments){
  var empArray
  for(var i; i < musicians.length ; i++){
    empArray[i] = "" + musicians[i] + " plays " + instruments[i]
    console.log(empArray[i])
  }
  return empArray
}