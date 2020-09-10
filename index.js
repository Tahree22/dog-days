function myFunction() {
    var dogName = prompt('What is your dog\'s name?');

    var dogAge = prompt('How old is ' + dogName + ' ?');

    var humanAge = (dogAge - 2) * 4 + 21;
  
    alert(dogName + ' is ' + humanAge + ' in human years!');
  }
  