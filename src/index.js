import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'
import './books.js'
import './book.js'

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
