import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini<span>Blog</span>&copy;</h2>
        <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
        <Link to="/posts/create" className='btn'>
          Criar Post
        </Link>
        <p>Desenvolvido por Edesign</p>
        <p>creditos: hora de codar</p>
    </div>
  )
}

export default About