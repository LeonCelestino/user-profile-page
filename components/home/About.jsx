import React, { useState } from 'react'
import HomeStyle from '../../styles/Home.module.css'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import ListItem from './ListItem';

function About() {
    const [arrOfItems, setItems] = useState(['Ser programador', 'Trabalhar de casa', 'Gastar dinheiro com paçoca'])



    return (
        <section className={HomeStyle.home}>
            <div className={HomeStyle.aboutWrap}>
                <div className={HomeStyle.aboutMe}>
                    <h3>Eu sou...</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos suscipit iusto laudantium! Vitae aut ea facere dicta ab velit fuga?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, soluta!</p>
                </div>
                <div className={HomeStyle.buttons}>
                    <button><FaPencilAlt style={{ color: "#FFF" }} /></button>
                </div>
            </div>
            <div className={HomeStyle.goalsWrap}>
                <div className={HomeStyle.goals}>
                    <h3>Eu pretendo...</h3>
                    <ul>
                        {arrOfItems.map((items, index) => <ListItem key={index} goalsList={items} HomeStyle={HomeStyle} />)}

                    </ul>

                </div>
            </div>
        </section>
    )
}

export default About