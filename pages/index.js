
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Home() {
  let [data,setData]=  useState([]);
  const getData = async () => {
    try{
      let data =  await axios.get("https://api.covid19api.com/total/country/vietnam");
      return data.data;
    }
    catch(e){
        console.log(e)
    }
  };
  useEffect(()=>{getData().then(rev=>{setData(dt=>dt=rev)}).catch(e=>console.log(e))},[]);
  
  return (
   <div className={styles.container}>
      <div className={styles.main}>
        <h3>VietNam&apos;s COVID-19 Infomation</h3>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Confirmed</th>
              <th className={styles.th}>Active</th>
              <th className={styles.th}>Recovered</th>
              <th className={styles.th}>Death</th>
            </tr>
          </thead>
          <tbody>
              {
                data.map((date,index)=>{
                  return ( <tr key={index} className={styles.tr}>
                            <td className={styles.td}>
                            {(date.Date).substring(0,10)}</td>
                            <td className={styles.td}>{date.Confirmed}</td>
                            <td className={styles.td}>{date.Active}</td>
                            <td className={styles.td}>{date.Recovered}</td>
                            <td className={styles.td}>{date.Deaths}</td>
                          </tr>
                          )
                })
              }
          </tbody>
        </table>
      </div>
   </div>
  )
}
