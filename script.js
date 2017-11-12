function calculate() {

  document.getElementById('results').style.display = 'block';

  var  input = document.getElementById('userInput').value;
  var  numSents = 0;
  var  totalSpaces = 0;

  for (var i = 0; i < input.length; i++){
    if (input[i] === '.' || input[i] ==='?'|| input[i] === '!') {
      numSents++;
    }else if(input[i] === ' ') {
      totalSpaces++;
    }
  }

  document.getElementById('totalWords').innerHTML = totalSpaces + 1;
  document.getElementById('numSents').innerHTML = numSents;
  document.getElementById('avgWords').innerHTML = Math.floor((totalSpaces+1)/numSents);
  document.getElementById('totalSpaces').innerHTML = totalSpaces;

}
