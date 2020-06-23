import React, {useEffect, useState} from 'react';
import './Content.css';
import {Promotions} from './../../components/Promotions';

// import promotions from './../../mock/promotions.json';

import GatryScraping from './../../modules/scraping';



const Content = () => {
  const [promotions, setPromotions] = useState([]);

  // const fetchPromotions = () => {
  //   const GS = new GatryScraping();
  //   GS.getResults().then(data => setPromotions(data.results));
  // }
  const fetchPromotions = async () => {
    const GS = new GatryScraping();
    const data = await GS.getResults();
    setPromotions(data.results);
  }

  useEffect(() => {
    fetchPromotions();
  }, []);

  return (
    <main className="container">
      <Promotions data={promotions} />
    </main>
  );
}

export default Content;