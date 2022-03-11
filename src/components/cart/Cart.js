import React, {useEffect, useState} from 'react';
import './Cart.css';
import axios from "axios";
import {getImg} from "../common/FileUtils";
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
    let [loading, setLoading] = useState(true);
    let [articles, setArticles] = useState([]);
    let [scooter, setScooter] = useState(null);
    let [topCase, setTopCase] = useState(null);
    const queryStream = new URLSearchParams(props.location.search)

    useEffect(() => {
        getScooter(queryStream.get('scooter_id'))
        // getTopcases(queryStream.get('top_case'))
    }, [])
    useEffect(() => {
        console.log(scooter)
    }, [])

    function addArticle(item) {
        setArticles([...articles, item]);
        console.log(articles)
    }

    function price(item) {
        console.log(queryStream.get('top_case'))
        if (queryStream.get('top_case').toLowerCase() === 'oui')
            return item.price += 64.90
        return item.price;
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
                props.history.push('/success')
            })
    }

    function getScooter(id) {
        setLoading(true)
        axios
            .get("https://brum-ar-api.herokuapp.com/scooter/" + id)
            .then(response => {
                addArticle(response.data)
                setScooter(response.data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    function getTopcases(id) {
        if (!id) return;
        setLoading(true)
        axios
            .get("https://brum-ar-api.herokuapp.com/top-case/" + id)
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
        <>
            <h2 className='cart__title'>Commande : </h2>
            <div className='cart'>
                <div className='cart__articles'>
                    {
                        Array.from(articles).map(it => (
                            <div key={it._id} className='article'>
                                <img className='article__img' src={getImg(it.color)} alt={'...'}/>
                                <p className='article__name'>{it.name || ''}</p>
                                <div>
                                    <p className='article__option'>COULEUR : {it.color || ''}</p>
                                    <p className='article__option'>{'SIÈGE : ' + it.saddle_color || ''}</p>
                                    <p className='article__option'>TOP CASE : {queryStream.get('top_case') || 'Non'}</p>
                                </div>
                                <p className='article__price'>{(it.price) || ''}€</p>
                            </div>
                        ))
                    }
                </div>
                <div className='cart__actions'>
                    <button className='cart__actions__cancel'>Retour</button>
                    <button className='cart__actions__validate' onClick={() => postCart()}>Valider</button>
                </div>
            </div>
        </>
    );
}

export default Cart;