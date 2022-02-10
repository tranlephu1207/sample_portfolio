import "./Portfolio.scss";

import React, { useEffect, useState } from 'react';
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from '../../data';

import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "designing",
      title: "Designing",
    },
    {
      id: "branding",
      title: "Branding",
    }
  ];

  useEffect(() => {
    switch(selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'designing':
        setData(designPortfolio);
        break;
      case 'branding':
        setData(contentPortfolio);
        break;
      default:
        break;
  }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(item => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
