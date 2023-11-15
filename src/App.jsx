import React, { useEffect, useState } from 'react'
import Pokemon_card from './components/pokemon_card'
import axios from 'axios';
import Pokemon_details from './components/Pokemon_details';

const App = () => {

  const [data, setData] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [details, setDetails] = useState([]);
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [loading, setLoading] = useState(false);
  // console.log(next);/

  const nextFunc = () => {
    setUrl(next)
  }
  const prevFunc = () => {
    setUrl(url)
  }

  const getRawData = (data) => {
    setLoading(true)
    data.results.map(async (d) => {
      const rawRes = await axios.get(d.url);
      // console.log(rawRes);
      setData((data) => {
        data = [...data, rawRes.data]
        data.sort((a, b) => a.id > b.id ? 1 : -1)
        return data;
      })
      setLoading(false)
    })
  }
  const getPokeData = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res);
      getRawData(res.data);
      setNext(res.data.next);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokeData(url);
  }, [url])
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-wrap left-box col-md-6 justify-content-center">
          <Pokemon_card data={data} loading={loading} details={setDetails} />
          <div className="btn-group col-md-6 gap-5 d-flex flex-wrap justify-content-between">
            <button className='btn btn-info rounded' onClick={prevFunc}>Previous</button>
            <button className='btn btn-info rounded' onClick={nextFunc}>Next</button>
          </div>
        </div>
        <div className="right-box col-md-6 position-fixed card-details" style={{ top: 0, right: 0 }}>
          <Pokemon_details detailsData={details} />
        </div>
      </div>
    </>
  )
}

export default App
