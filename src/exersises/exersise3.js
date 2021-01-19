import React, { useState, useEffect } from 'react';
const Giphy = () => {
    const [inputVal, setVal] = useState("");

    React.useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;
        fetch(`https://api.giphy.com/v1/gifs/search?q=${inputVal}&limit=10&api_key=jsSguBk7KlRE7Fpiclxzzt70adW0nHt4`, {signal})
        .then(res => res.json())
        .then(({data}) => console.log(data))
        .catch(err => console.log(err));

        return () => {
            controller.abort()

        }
    }, [inputVal]);

           return (
               <input type="search"  onChange = {({target:{value}}) => setVal(value)}/> 
     );
     
}
 
export default Giphy;