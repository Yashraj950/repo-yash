 import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";


 const NeflixSeries = () => {
   return (
   <ul className="grid grid-three--cols">
      {seriesData.map((curElem) =>  ( 
      <SeriesCard key={curElem.id} data={curElem} />
     ))}
   </ul>
   );    
 };


export default NeflixSeries;
