import React, {useEffect, useState} from 'react';
import './Cart.css';
import axios from "axios";
import {getImg} from "../common/FileUtils";

const Cart = (props) => {
    let [loading, setLoading] = useState(true);
    let [articles, setArticles] = useState([]);
    let [scooter, setScooter] = useState(null);
    let [topCase, setTopCase] = useState(null);

    useEffect(() => {
        getScooter()
        getTopcases()
    }, [])
    useEffect(() => {
        console.log(scooter)
    }, [])

    function addArticle(item) {
        setArticles([...articles, item]);
        console.log(articles)
    }

    function postCart() {
        setLoading(true)
        const body = {
            'user_id': '622acb7b892b2eded00a736c',
            'scooter': scooter,
            'top_case_id': ''
        }
        axios
            .post("https://brum-ar-api.herokuapp.com/order/", body)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            .finally(() => {
                setArticles([])
                setLoading(false)
            })
    }

    function getScooter() {
        setLoading(true)
        axios
            .get("https://brum-ar-api.herokuapp.com/scooter/" + props.match.params.scooter_id)
            .then(response => {
                addArticle(response.data)
                setScooter(response.data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    function getTopcases() {
        if (!props.match.params.top_case_id) return;
        setLoading(true)
        axios
            .get("https://brum-ar-api.herokuapp.com/top-case/" + props.match.params.top_case_id)
            .then(response => {
                setTopCase(response.data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    if (loading === true) {
        return <div className="loader"/>
    }
    return (
        <div className='cart'>
            <div className='cart__articles'>
                {
                    Array.from(articles).map(it => (
                        <div className='article'>
                            <img
                                className='cards__item__img'
                                alt='..'
                                src={getImg(props.color.toLowerCase())}
                            />
                            <ul className='article__description'>
                                <li className='article__name'>{it._id || ''}</li>
                                <li className='article__name'>{it.name || ''}</li>
                                <li className='article__name'>couleur : {it.color || ''}</li>
                                <li className='article__name'>siège : {it.colorSaddle || ''}</li>
                                <li className='article__name'>top case : {it.topCase || ''}</li>
                                <li className='article__price'>{it.price || ''}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className='cart__submit'>
                <button onClick={() => postCart()}>Submit</button>
            </div>
        </div>
    );
}

export default Cart;