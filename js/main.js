//Fetch requests to the API.
document.getElementById('naruto').addEventListener('click', getFetch)
document.getElementById('bleach').addEventListener('click', getFetch2)
document.getElementById('onepiece').addEventListener('click', getFetch3)
document.getElementById('dragonball').addEventListener('click', getFetch4)


//Fetching data for naruto
function getFetch(){
  const choice = document.getElementById('naruto').value
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let counter = 1; //Will be used in function NextQuote and Previous qoute to navigate through the Array.
        let arrayQuote = [] //New Empty array

        for(i=0;i<data.length;i++){
        arrayQuote.push(data[i].quote) //Push quotes into new array.
        }

        document.querySelector('ol').innerText = ""; //Clears the ordered list.
        const li = document.createElement('li'); //Creates list element.
        li.textContent = arrayQuote[0]; //Places the first quote into li variable.
        document.querySelector('ol').appendChild(li); //Appends the li onto the DOM.

        //Event Listener
        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){ //Appends the next quote into the DOM.
          document.querySelector('ol').innerText = "";//Clears the ol.
          li.textContent = arrayQuote[counter];//Places next quotes into the li
          document.querySelector('ol').appendChild(li);//Places the li to the DOM.
          counter = counter + 1; //Increment counter to be at the next quotes index.
    
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        
        function previousQuote(){
          document.querySelector('ol').innerText = "";//Clears the ol.
          counter = counter - 1; //Decrement counter to be at the previous qoutes index.
          li.textContent = arrayQuote[counter];//Place quote text into li.
          document.querySelector('ol').appendChild(li); //Append it to the DOM.
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}  //CODE WILL REPEAT BELOW, ONLY DIFFERENCE IS THE CHOICE VARIABLE.


//Fetching data for bleach
function getFetch2(){
  const choice = document.getElementById('bleach').value
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json())
      .then(data => {

        let counter = 1;
        let arrayQuote = []

        for(i=0;i<data.length;i++){
          arrayQuote.push(data[i].quote)
        }

        document.querySelector('ol').innerText = "";

        const li = document.createElement('li');
        li.textContent = arrayQuote[0];
        document.querySelector('ol').appendChild(li);
        
        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){
          document.querySelector('ol').innerText = "";
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          counter = counter + 1;
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        function previousQuote(){
          document.querySelector('ol').innerText = "";

          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);


        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//Fetching data for one piece

function getFetch3(){
  const choice = document.getElementById('onepiece').value
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 

  fetch(url)
      .then(res => res.json()) 
      .then(data => {

        let counter = 1;
        let arrayQuote = []

        for(i=0;i<data.length;i++){
          arrayQuote.push(data[i].quote)
        }

        document.querySelector('ol').innerText = "";
        const li = document.createElement('li');
        li.textContent = arrayQuote[0];
        document.querySelector('ol').appendChild(li);

        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){

          document.querySelector('ol').innerText = "";
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
          counter = counter + 1;
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        
        function previousQuote(){
          document.querySelector('ol').innerText = "";
          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// Fetching data for Dragon ball z
function getFetch4(){
  const choice = document.getElementById('dragonball').value
  const url = `https://animechan.vercel.app/api/quotes/anime?title=${choice}`; 
  fetch(url)
      .then(res => res.json())
      .then(data => {

         let counter = 1; 
         let arrayQuote = []

        for(i=0;i<data.length;i++){
        arrayQuote.push(data[i].quote) 
        }

        document.querySelector('ol').innerText = ""; 

        const li = document.createElement('li');
        li.textContent = arrayQuote[0]; 
        document.querySelector('ol').appendChild(li); 

        document.getElementById('next').addEventListener('click', nextQuote)

        function nextQuote(){
          document.querySelector('ol').innerText = ""; 
          li.textContent = arrayQuote[counter]; 
          document.querySelector('ol').appendChild(li); 
          counter = counter + 1;
        }

        document.getElementById('previous').addEventListener('click', previousQuote)

        function previousQuote(){
          document.querySelector('ol').innerText = "";
          counter = counter - 1;
          li.textContent = arrayQuote[counter];
          document.querySelector('ol').appendChild(li);
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




 

 