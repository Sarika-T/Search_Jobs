import React, { useState, useEffect, useRef } from 'react';
import LoaderCircle from '../../common/Loader';
import CardContentDes from './CardContent';
import './Card.scss';
import jdList from '../../Data.json';

export default function DataCards ({selectedFilters}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const containerRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": 10,
            "offset": (page-1)*10
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const responsed = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        const jsonData = await responsed.json();
        setData(prevData => [...prevData, ...jsonData.jdList]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);


  useEffect(() => {
    if (data.length > 0) {
      const filtered = data.filter((item) => {
        if (selectedFilters.roles && selectedFilters.roles.includes(item.jobRole)){
          return true;
        }else if (selectedFilters.techStack && selectedFilters.techStack.includes(item.techStack)) {
          return true;
        }else if (selectedFilters.experience && selectedFilters.experience.includes(item.minExp)) {
          return true;
        }else if (selectedFilters.remote && selectedFilters.remote.includes(item.location)) {
          return true;
        }else if (selectedFilters.minBasPay && selectedFilters.minBasPay.includes(item.minJdSalary)) {
          return true;
        }else if (selectedFilters.company && selectedFilters.company.includes(item.companyName)) {
          return true;
        }else if (selectedFilters.location &&  selectedFilters.location.includes(item.location)) {
          return true;
        }
        return false;
      });
      setFilteredData(filtered);
    }
  }, [selectedFilters, data]);



  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollHeight - scrollTop === clientHeight && !fetching) {
        setFetching(true);
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetching]);


  return (
    <div ref={containerRef}>
      {loading ? ( 
        <LoaderCircle />
      ) : (
        <div className='datacard'>
          <div className='datacard-page'>
          {filteredData.length > 0 ? (
              filteredData.map((card, index) => (
                <CardContentDes key={index} card={card} index={index} />
              ))
            ) : (
              data.map((card, index) => (
                <CardContentDes key={index} card={card} index={index} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

