import './App.css';
import Countries from './Components/countries/Countries';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';





/*-------------- --------------------------------------------------------------------*\
Store Container Component Where data is Loaded and Single Child Component Shown in UI in 2
different Folders. Connect the Child Component through Import
\*--------------------------------------------------------------------------------------*/

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}


/* function LoadCountries() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
      fetch('https://restcountries.com/v2/all')
          .then(response => response.json())
          // .then(data => console.log(data))
          .then(data => setCountries(data))
  }, [])

  return (
      <div>
          <h2>All countries in the World`</h2>
          <h3>Available: {countries.length}</h3>
          {
              countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
          }
      </div>
  )
}
const Country = (props) => {
  return (
      <div className='imported-style' style={{ backgroundColor: 'cyan', margin: '10px auto', width: '75vw', borderRadius: '25px', padding: '10px', color: 'blue' }}>
          <h2>Name: {props.name}</h2>
          <h2>Capital: {props.capital}</h2>
      </div>
  );
}; */





export default App;
