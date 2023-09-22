import { useState } from 'react'
import './App.css'
import DisplayBoard from './components/DisplayBoard'
import Banner from './assets/images/Banner.png'
function App() {
    const [searchVal, setSearchVal] = useState('');

    const handleChange = (e) => {
        setSearchVal(e.target.value);
    }

    return (
        <div className="App">
            <center><img className="Banner" src={Banner} /></center>
            <h1>
                Student Organization at University of Washington
            </h1>
            <label htmlFor="SearchBar"> Seach Bar:
                <input id="SearchBar" className="SearchBar" defaultValue="" onChange = {handleChange}></input>
            </label>
            <center>
                <DisplayBoard searchVal = {searchVal}/>
            </center>

        </div>
    )
}

export default App
