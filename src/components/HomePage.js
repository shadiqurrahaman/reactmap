// 1.paginate with perpage
// 2.paginate next not working properly
// 3. add red border and error message on every input
// 5. formik & yup validation
// 6. include saga & redux 




import React,{useState,useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import {useNavigate } from 'react-router-dom';
import store, { removeToken } from '../store';
import authapi from '../api/authapi';
import placeapi from '../api/placeapi';


const HomePage = () => {
      const navigate = useNavigate();
      const [place, setPlace] = useState("");
      const [searchplace, setSearchPlace] = useState("");
      const [position, setposition] = useState([]);
      const [links, setLinks] = useState([]);
      const [pages, setpages] = useState("");
      const [currentpages, setcurrentpages] = useState("");
      const [successMessage, setsuccessMessage] = useState("");

      const defaultProps = {
        center: {
          lat: 23.8314839,
          lng: 90.3653014
        },
        zoom: 11
      };
      const handlePage=(parama)=>{
        var urlparma = ''
        if(parama==='predious' && currentpages>1){
          urlparma = links[currentpages-1].url
        }else if(parama==='next' && currentpages<pages){
          urlparma = links[currentpages+1].url
        }
        placeapi.placePaginate({url:urlparma})
          .then((result)=>{
                  setposition(result.data)
                  setcurrentpages(result.current_page)
          })
        
      }

      const logout = ()=>{
        const data = authapi.logout();
        console.log(data);
        data.then((result)=>{
          store.dispatch(removeToken())
          navigate("/")
        })
      }
      useEffect(() => {
        const placeHistory = placeapi.getPlace({item:2})
        placeHistory.then((result)=>{
          setposition(result.data)
          setpages(result.last_page)
          setLinks(result.links)
          setcurrentpages(result.current_page)

        })
      },[])
      const search = (event) => {
        event.preventDefault();
        setSearchPlace(place)       
        
      }

      const handleSearch = (e)=>{
        setPlace(e.target.value)
    }
    const addplace = (e)=>{
      placeapi.addplace({'address':searchplace})
      .then((result)=>{
        setsuccessMessage("Data added Successfull")
        console.log(result)
      }).catch((err)=>{
        console.log(err)
        setsuccessMessage("Address formet is invalid")
      })
    }
  return (
    <>
    
    <div>HomePage
    <button onClick={logout} className="btn btn-secondary">Logout</button>
    </div>
    <div>
      <h4 style={{color: "red"}}>{successMessage}</h4>
    <form onSubmit={search}>        
        <input onChange={handleSearch} type="text" name="name"/>
          <button class="btn btn-primary">Search</button>            
    </form>
      <h1>{searchplace}</h1>
      {searchplace?<button class="btn btn-primary" onClick={addplace}>Add</button>:null}
    </div>
    <div style={{display:'flex'}}>
    <div style={{ height: '100vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {position.map((data)=>
      <Marker lat={data.lat} lng={data.lng} />
        )}


      </GoogleMapReact>
    </div>
    {position.length>0 ?

<div style={{width:'50%',textAlign:'center'}}>
  <h3>Search History</h3>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Place</th>
      <th scope="col">lat</th>
      <th scope="col">lng</th>
      <th scope="col">time</th>
    </tr>
  </thead>
  <tbody>
  {position.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.place_name}</td>
              <td>{listValue.lat}</td>
              <td>{listValue.lng}</td>
              <td>{listValue.updated_at}</td>
            </tr>
          );
        })}
 </tbody>
</table>
    
<div>
<button style={{margin:'10px'}} onClick={()=>handlePage('predious')} className="btn btn-info">Previous</button>
<button style={{margin:'10px'}} onClick={()=>handlePage('next')} className="btn btn-info">Next</button>
</div>
</div>
:<h1>No Data found</h1>}
</div>


    
    
    </>
    

  );
}
// const Marker = props => {
//   return <div className="Pin">this is </div>
// }

const Marker = props => {
  return <>
    <div className="pin"></div>
  </>
}

export default HomePage