import React, { useState, useEffect } from 'react';
import Home from './Maincontent';
import { Spinner } from 'react-bootstrap';
import Footer from '../Footer';
import Navcomponent from './Navcomponent';



const Allpage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []); 

  return (
    <div>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner animation="grow" variant="primary" style={{width:'100px', height:'100px', borderWidth: '10px'}} />
      </div>
      )}

      {!loading && (
        <div>
          <Navcomponent />
          <Home />
          <Footer/>
        
        </div>
      )}
    </div>
  );
};

export default Allpage;
