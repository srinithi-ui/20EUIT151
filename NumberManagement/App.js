const express = require('express');
const app = express();
const port = 3000; 


function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


app.get('/api/primes/:lim', (req, res) => {
    const lim = parseInt(req.params.lim);
  const primes = [];
  
  for (let i = 2; i <= lim; i++) {
    if (isPrime(i)) primes.push(i);
  }
  {res.json(primes)};
});

app.get('/api/random/:range', (req, res) => {
    const range = parseInt(req.params.range);
    console.log("Numbers");
    const random = Math.floor(Math.random()*range);
    res.json({Randomnumber : random});
  });


app.get('/api/fibonacci/:limit', (req, res) => {
  const limit = parseInt(req.params.limit);
  if (isNaN(limit) || limit <= 0) {
    res.status(400).json({ error: 'Please provide a number which is greater than zezro.' });
  }
   else {
    const fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= limit) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    res.json({Numbers:fibonacci});
  }
});

app.get('/api/odd/:limit', (req, res) => {
  const limit = parseInt(req.params.limit);
  if (isNaN(limit) || limit <= 0) {
    res.status(400).json({ error: 'Please provide a number which is greater than zezro.' });
  } else {
    const odd = [];
    for (let i = 1; i <= limit; i += 2) {
      odd.push(i);
    }
    res.json({Numbers:odd});
  }
});

app.get('/api/even/:limit', (req, res) => {
  const limit = parseInt(req.params.limit);
  if (isNaN(limit) || limit <= 0) {
    res.status(400).json({ error: 'Please provide a number which is greater than zezro.' });
  } else {
    const even = [];
    for (let i = 2; i <= limit; i ++) {
      if(i%2 == 0) even.push(i);
    }
    res.json({Numbers:even});
  }
});

app.listen(port, () => {
  console.log('Running'); 
});
