
import './App.css'

function App() {

 let user = {
    id:1,
    name:"Nikhil",
    email:"nihkil@gmail.com",
    city:"Ahilyaagar"
  }

  function m2(){
    alert("Back");
  }

  function add()
  {
    let a =  parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a + b;
    document.getElementById("result").innerText=`Result: ${c}`;
  }

  function sub()
  {
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a - b;
   document.getElementById("result").innerText = `Result: ${c}`;
   // document.getElementById("result").innerHTML = `<h1>Result ${c}</h1>`;     
  }

  function mul()
  {
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a * b;
    document.getElementById("result").innerText = `Result: ${c}`
  }

  function div()
  {
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a / b;
    document.getElementById("result").innerText = `Result:${c}`;
  }

  let Product ={
    TV:{
      id:101,
      name:"Samsung",
      price:30000,
    },
    Mobile:{
      id:102,
      name:"Apple",
      price:80000,
    },
    Laptop:{
      id:103,
      name:"Acer",
      price:90000,
    }
  }

  return (
    <>
      <h1 style={{color:"red",backgroundColor:"yellow"}}>React Day2</h1>
      <h2>User Id: {user.id}</h2>
      <h2>User Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>City: {user.city}</h2>
      <button onClick={m2} style={{color:"sienna"}}>Submit</button> <br/><br/>
        
      <input type="number" id='n1' placeholder='Number 1'/>
      <input type="number" id='n2' placeholder='Number 2'/>
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
      <button onClick={mul}>MUL</button>
      <button onClick={div}>DIV</button>
      <h2 id='result'>Result</h2>

      <ol>
        <li>TV
          <ul style={{color:'red',backgroundColor:"yellowgreen",listStyleType:"&#128073;"}}>
            <li>Id : {Product.TV.id}</li>
            <li>Name : {Product.TV.name}</li>
            <li>Price : {Product.TV.price}</li>
          </ul>
        </li>
        <li>Mobile
          <ul>
            <li>Id : {Product.Mobile.id}</li>
            <li>Name : {Product.Mobile.name}</li>
            <li>Price : {Product.Mobile.price}</li>
          </ul>
        </li>
        <li>Laptop
          <ul>
            <li>Id : {Product.Laptop.id}</li>
            <li>Name : {Product.Laptop.name}</li>
            <li>Price : {Product.Laptop.price}</li>
          </ul>
        </li>
      </ol>
      
    </>
  )
}

export default App
