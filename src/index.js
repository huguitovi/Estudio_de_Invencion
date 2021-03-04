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
    massage:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nostrum in, nemo vitae perferendis quia possimus culpa nesciunt alias, illum maxime ullam exercitationem odio quas unde modi quos est? Officiis.',
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
      {books.map((book, index) => {
        const { img, title, author, massage } = book
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

function Book({ img, title, author, massage }) {
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello Wolrd')
  }
  const comlexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='bo'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img width={'200rem'} height={'150rem'} src={img} alt='' class='center' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h1>{author}</h1>
      <p>{massage}</p>
      <button type='button' onClick={clickHandler}>
        click
      </button>
      <button type='button' onClick={() => comlexExample(author)}>
        more complez example click
      </button>
    </article>
  )
}

ReactDom.render(<ListBook />, document.getElementById('root'))
