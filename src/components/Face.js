import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Face.css';

const Face = () => {
const [name, setName] = useState("");
const [image, setImage] = useState("");

const profile = async () => {
    try {
        const res = await axios.get("https://randomuser.me/api/");
        setImage(res.data.results[0].picture.large);
        setName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
        );
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    profile();
}, []);

const random = () => {
    profile();
}

return (
    <>
        <div className={'conteiner'}>
            <div className="card">
                <img src={image} className={'img'} alt='face' />
                <h1 className={'name'}>{name}</h1>
                <div className={'btn'}>
                    <label onClick={random}>New Person</label>
                </div>
            </div>
        </div>
    </>
);
}

export default Face;
