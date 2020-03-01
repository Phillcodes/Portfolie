import React, {useState, useEffect} from 'react';
import './Api.css';

const Api = () => {

    useEffect(() => {
        fetchItems();
    },[]);

const [items, setItems] = useState([]);

const fetchItems = async () => {
 const data = await fetch('https://api.chucknorris.io/jokes/random'
 );
 
 const items = await data.json();
 console.log(items.icon_url);
 setItems(items);
};

const handleSubmit = () => {
    fetchItems();
}

    return (
    <div>

<img alt='chuck' src={items.icon_url} />
<h1 key={items.itemid}>{items.value}</h1>

<button onClick={handleSubmit}>Generate new random texts! </button>



    </div>
    )
}

export default Api;