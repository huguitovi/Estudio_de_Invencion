import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

const firstBook = {
  title: 'Hello World',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  author: 'victor',
}

const secBook = {
  title: 'Other World',
  img:
    'https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg',
  author: 'hugo',
}
const tirstBook = {
  title: 'Hi Moon!',
  img:
    'https://image.freepik.com/vector-gratis/vector-onda-azul-transparente_1055-7084.jpg',
  author: 'Ezequiel',
}

const gecBook = {
  title: 'Other Moon',
  img: 'https://www.idento.es/wp-content/uploads/2015/05/Png-vs-Jpg-1.jpg',
  author: 'Fernando',
}
const Book = ({ img, title, author }) => {
  return (
    <article className='bo'>
      <img width={'200rem'} height={'150rem'} src={img} alt='' class='center' />
      <h2>{title}</h2>
      <h1>{author}</h1>
    </article>
  )
}
const ListBook = () => {
  return (
    <section className='boolist'>
      <Book
        author={firstBook.author}
        imag={firstBook.img}
        title={firstBook.title}
        number={6 + 3}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam
          lobortis facilisis sem. Nullam nec mi et neque pharetrasollicitudin.
          Praesent imperdiet mi nec ante. Donec ullamcorper, felis non sodales
          commodo, lectus velit ultrices augue, adignissim nibh lectus placerat
          pede. Vivamus nunc nunc, molestie ut, ultricies vel, semper in, velit.
          Ut porttitor. Praesentin sapien. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Duis fringilla tristique neque. Sed
          interdum libero utmetus. Pellentesque placerat. Nam rutrum augue a
          leo. Morbi sed elit sit amet ante lobortis sollicitudin.
        </p>
      </Book>{' '}
      <Book
        imag={secBook.img}
        title={secBook.title}
        author={secBook.author}
        number={3}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vitae totam praesentium, nisi sed laborum reiciendis placeat ratione,
          soluta maiores amet nesciunt sapiente error tenetur corporis impedit
          minima? Magni, explicabo!
        </p>
      </Book>
      <Book
        imag={gecBook.img}
        title={gecBook.title}
        author={gecBook.author}
        number={3}
      />{' '}
      <Book
        imag={tirstBook.img}
        title={tirstBook.title}
        author={tirstBook.author}
        number={3}
      />{' '}
      <Book
        author={firstBook.author}
        imag={firstBook.img}
        title={firstBook.title}
        number={6 + 3}
      />{' '}
      <Book
        imag={secBook.img}
        title={secBook.title}
        author={secBook.author}
        number={3}
      />{' '}
      <Book
        imag={gecBook.img}
        title={gecBook.title}
        author={gecBook.author}
        number={3}
      />{' '}
      <Book
        imag={tirstBook.img}
        title={tirstBook.title}
        author={tirstBook.author}
        number={3}
      />
    </section>
  )
}

ReactDom.render(<ListBook />, document.getElementById('root'))
