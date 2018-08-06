// add solution here

function theBeatlesPlay(musicians, instruments){
  var empArray = [];
  for(var i = 0; i < musicians.length ; i++){
    empArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return empArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts.push(facts[i] + "!!!");
  }
  
  return facts;
}

function iLoveTheBeatles(a){
  var empArray2 = [];
  var count = 0;
  do{
      empArray2.push("I love the Beatles!");
      count ++;
  }
  while(count < a || count > 15)
  
  return empArray2;
}