import React, { useState, useEffect } from 'react';
const UniqueImages = () => {
    const [inputVal, setVal] = useState("");
    const [imageSrc, setSrc] = useState("");


    useEffect(() => {
        setSrc(`https://robohash.org/${inputVal}`);

    }, [inputVal])


    return (
         <> 
             <input type="search"  onChange = {({target:{value}}) => setVal(value)}/> 
            { (inputVal) &&<img alt="sjhg" src={imageSrc}></img>}
         </> 
    );
}
 
export default UniqueImages;