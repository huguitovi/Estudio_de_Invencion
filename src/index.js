import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

const firstBook = {
  title: 'Hello World',
  aut: 'victor',
  imag:
    'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
}

const secBook = {
  title: 'Other World',
  aut: 'hugo',
  imag:
    'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_2.png',
}
const Book = (props) => {
  return (
    <article className='bo'>
      <img src={props.imag} alt='' />
      <h1>{props.title}</h1>
      <h2>{props.aut}</h2>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}
const ListBook = () => {
  return (
    <section className='boolist'>
      <Book imag={firstBook.imag} title={firstBook.title} />{' '}
      <Book imag={secBook.imag} title={secBook.title} number={3} />
    </section>
  )
}

ReactDom.render(<ListBook />, document.getElementById('root'))
