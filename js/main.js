//Example fetch using pokemonapi.co
document.getElementById('naruto').addEventListener('click', getFetch)
document.getElementById('bleach').addEventListener('click', getFetch2)
document.getElementById('onepiece').addEventListener('click', getFetch3)
document.getElementById('dragonball').addEventListener('click', getFetch4)
//

let counter = 0;




//Fetching data for naruto
function getFetch(){
  const choice = document.getElementById('naruto').value
  console.log(choice);
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);

        let arrayQuote = []

        for(i=0;i<data.length;i++){
        arrayQuote.push(data[i].quote)
        }

        console.log(arrayQuote);

        const li = document.createElement('li');
        li.textContent = arrayQuote[0];
        document.querySelector('ol').appendChild(li);

        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          counter = counter + 1;
          console.log(counter);
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        
        function previousQuote(){

          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          console.log(counter);


        }

        //const narutoQuotes =  document.
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


//Fetching data for bleach
function getFetch2(){
  const choice = document.getElementById('bleach').value
  console.log(choice);
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data);

        let arrayQuote = []

        for(i=0;i<data.length;i++){
        arrayQuote.push(data[i].quote)
        }

        console.log(arrayQuote);

        const li = document.createElement('li');
        li.textContent = arrayQuote[0];
        document.querySelector('ol').appendChild(li);

        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          counter = counter + 1;
          console.log(counter);
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        
        function previousQuote(){

          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          console.log(counter);


        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//Fetching data for one piece

function getFetch3(){
  const choice = document.getElementById('onepiece').value
  console.log(choice);
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data);

        let arrayQuote = []

        for(i=0;i<data.length;i++){
        arrayQuote.push(data[i].quote)
        }

        console.log(arrayQuote);

        const li = document.createElement('li');
        li.textContent = arrayQuote[0];
        document.querySelector('ol').appendChild(li);

        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          counter = counter + 1;
          console.log(counter);
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        
        function previousQuote(){

          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          console.log(counter);


        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// Fetching data for Dragon ball z

function getFetch4(){
  const choice = document.getElementById('dragonball').value
  console.log(choice);
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data);

        let arrayQuote = []

        for(i=0;i<data.length;i++){
        arrayQuote.push(data[i].quote)
        }

        console.log(arrayQuote);

        const li = document.createElement('li');
        li.textContent = arrayQuote[0];
        document.querySelector('ol').appendChild(li);

        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          counter = counter + 1;
          console.log(counter);
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        
        function previousQuote(){

          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          console.log(counter);


        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




 

 