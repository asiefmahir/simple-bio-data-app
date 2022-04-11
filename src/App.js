import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';

function App() {
  return (
    <div className ="App">
      <BioData 
        name = "Mahir Asief"
        email = "asiefmahir1@gmail.com"
        phone = "0167-908-908"
        skills = {["React", "Node", "Js"]}
        interests = {["Web 3", "NFT"]}
        referencedBy = "Foyzul Karim"
      />

      <BioData 
        name = "SrSetu"
        email = "srsetu1@gmail.com"
        phone = "0167-908-908"
        skills = {["React", "Node", "Js", "WP", "PHP"]}
        interests = {["Web 3", "NFT", "Deno"]}
        referencedBy = "Sumit Shaha"
      />
    </div>
  );
}

// function add (a, b) {
//   return a + b;
// }

// add(10, 20);
// add(30, 100)

export default App;
