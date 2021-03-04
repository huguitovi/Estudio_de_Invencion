import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

const books = [
  {
    title: 'Hello World',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    author: 'victor',
  },

  {
    title: 'Other World',
    img:
      'https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg',
    author: 'hugo',
  },
  {
    title: 'Hi Moon!',
    img:
      'https://image.freepik.com/vector-gratis/vector-onda-azul-transparente_1055-7084.jpg',
    author: 'Ezequiel',
  },

  {
    title: 'Other Moon',
    img: 'https://www.idento.es/wp-content/uploads/2015/05/Png-vs-Jpg-1.jpg',
    author: 'Fernando',
  },
  {
    title: 'Hello World',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    author: 'victor',
  },

  {
    title: 'Other World',
    img:
      'https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg',
    author: 'hugo',
  },
  {
    title: 'Hi Moon!',
    img:
      'https://image.freepik.com/vector-gratis/vector-onda-azul-transparente_1055-7084.jpg',
    author: 'Ezequiel',
  },

  {
    title: 'Other Moon',
    img: 'https://www.idento.es/wp-content/uploads/2015/05/Png-vs-Jpg-1.jpg',
    author: 'Fernando',
  },
]

const ListBook = () => {
  return (
    <section className='boolist'>
      {books.map((book) => {
        const { img, title, author } = book
        return <Book book={book}></Book>
      })}
    </section>
  )
}

function Book(props) {
  console.log(props)

  const { img, title, author, children } = props.book
  return (
    <article className='bo'>
      <img width={'200rem'} height={'150rem'} src={img} alt='' class='center' />
      <h2>{title}</h2>
      <h1>{author}</h1>
      {children}
    </article>
  )
}

ReactDom.render(<ListBook />, document.getElementById('root'))
