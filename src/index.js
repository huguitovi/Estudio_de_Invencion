import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

const firstBook = {
  title: 'Hello World',
  imag:
    'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  author: 'victor',
}

const secBook = {
  title: 'Other World',
  imag:
    'https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg',
  author: 'hugo',
}
const tirstBook = {
  title: 'Hi Moon!',
  imag:
    'https://image.freepik.com/vector-gratis/vector-onda-azul-transparente_1055-7084.jpg',
  author: 'Ezequiel',
}

const gecBook = {
  title: 'Other Moon',
  imag: 'https://www.idento.es/wp-content/uploads/2015/05/Png-vs-Jpg-1.jpg',
  author: 'Fernando',
}
const Book = (props) => {
  return (
    <article className='bo'>
      <img width={'200rem'} height={'150rem'} src={props.imag} alt='' />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  )
}
const ListBook = () => {
  return (
    <section className='boolist'>
      <Book
        author={firstBook.author}
        imag={firstBook.imag}
        title={firstBook.title}
        number={6 + 3}
      />{' '}
      <Book
        imag={secBook.imag}
        title={secBook.title}
        author={secBook.author}
        number={3}
      />{' '}
      <Book
        imag={gecBook.imag}
        title={gecBook.title}
        author={gecBook.author}
        number={3}
      />{' '}
      <Book
        imag={tirstBook.imag}
        title={tirstBook.title}
        author={tirstBook.author}
        number={3}
      />{' '}
      <Book
        author={firstBook.author}
        imag={firstBook.imag}
        title={firstBook.title}
        number={6 + 3}
      />{' '}
      <Book
        imag={secBook.imag}
        title={secBook.title}
        author={secBook.author}
        number={3}
      />{' '}
      <Book
        imag={gecBook.imag}
        title={gecBook.title}
        author={gecBook.author}
        number={3}
      />{' '}
      <Book
        imag={tirstBook.imag}
        title={tirstBook.title}
        author={tirstBook.author}
        number={3}
      />
    </section>
  )
}

ReactDom.render(<ListBook />, document.getElementById('root'))
