import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState({});
  let { name, status, species, gender, image, location, episode } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data.results);
        updateFetchedData(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  }, [api]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
        <img
          src={image}
          alt=''
          style={{ width: '122px', height: '122px', borderRadius: '50%', marginTop: '169px' }}
        />
        <div className='content'>
          <div className={`${name} poppins fs-7 mt-4 fw-bold`}>{name}</div>
          <div className={`poppins fs-9 my-2`}>
            <p>
              {status} | {species} | {gender}
            </p>
          </div>
        </div>

        <div className='poppins'>
          <Link to="/" style={{ textDecoration: "none" }} key={id} className='col-12 col-md-6 col-lg-4 col-xl-3 text-center mb-4'>
            <button type="button" className="btn btn-info" style={{ color: "white", width: "343px", fontWeight: "bold" }}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
