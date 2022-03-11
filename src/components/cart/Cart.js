import React, {useState} from 'react';
import './Cart.css';
import axios from "axios";

const Cart = () => {

    const articleExample = {
        name: "Brumaire",
        color: "bleu",
        colorSaddle: "blanc",
        topCase: "oui",
        price: 2500
    }

    const articleExample2 = {
        name: "top case",
        price: 130
    }

    let [articles, setArticles] = useState([articleExample]);

    function addArticle(item) {
        setArticles([...articles, item]);
        console.log(articles)
    }

    async function postCart() {
      axios
          .post("https://brum-ar-api.herokuapp.com/order/failure")
          .then(response => console.log(response.data))
          .catch(error => console.log(error))
          .finally(() => setArticles([]))
    }

    return (
        <div className='cart'>
            <div className='cart__btn'>
                <button onClick={() => addArticle(articleExample)}>add</button>
            </div>
            <div className='cart__articles'>
                {
                    Array.from(articles).map(it => (
                        <div className='article'>
                            <ul className='article__description'>
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