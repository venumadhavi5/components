
import './App.css';
import TollywoodHeros from './components/TollywoodHeros';

function App() {
  return (
    <div>
        <div className="herosDiv">
      <img src='./images/Allu Arjun.png' alt=''></img>
      <h2>Name: Allu Arjun</h2>
      <h2>Age:42</h2>
    </div>
    <TollywoodHeros pic='./images/Jr.NTR.png' name='Jr.NTR' age='41'></TollywoodHeros>
    <TollywoodHeros pic='./images/Mahesh Babu.png' name='Mahesh Babu' age='49'></TollywoodHeros>
    <TollywoodHeros pic='./images/Nani.png' name='Nani' age='40'></TollywoodHeros>
    <TollywoodHeros pic='./images/Nithin.png' name='Nithin' age='41'></TollywoodHeros>
    <TollywoodHeros pic='./images/Ram Charan.png' name='Ram Charan' age='39'></TollywoodHeros>
    <TollywoodHeros pic='./images/Sai Dharam Tej.png' name='Sai Dharam Tej' age='37'></TollywoodHeros>
    <TollywoodHeros pic='./images/vaishnav Tej.png' name='vaishnav Tej' age='29'></TollywoodHeros>
    <TollywoodHeros pic='./images/Varun Tej.png' name='Varun Tej' age='34'></TollywoodHeros>
    <TollywoodHeros pic='./images/Vijay.png' name='Vijay' age='35'></TollywoodHeros>
    </div>
    
    
    
  );
}

export default App;
