import { Button } from '@mui/material'
import './App.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from 'react';


const getDataFromLs = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}




function App() {


  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [number, setNumber] = useState(0)
  const [books, setBooks] = useState(getDataFromLs())


  const handleSubmite = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      number,
    }

    setBooks([...books, book])
    console.log(books)

  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])


  const handleDelete = (itemNumber) => {
    let deleteItem = books.filter(item => item.number != itemNumber)
    setBooks(deleteItem)
  }


  return (
    <>

      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./icons8-done-100.png" width="60" />
          </a>
        </div>
      </nav>


      <h1>لیست کتاب های کتابخانه خود را وارد کنید</h1>

      <div className='main'>

        <div className='sub-main-right'>

          <form onSubmit={handleSubmite}>

            <div className='right-book'>
              <div className='inputs'>
                <label>نام کتاب</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className='inputs'>
                <label>نام نویسنده</label>
                <input type="text" onChange={(e) => setAuthor(e.target.value)} />
              </div>

              <div className='inputs'>
                <label>شماره کتاب</label>
                <input type="number" onChange={(e) => setNumber(e.target.value)} />
              </div>
            </div>

            <div className='btn'>
              <Button variant='contained' type='submite'>ثبت</Button>
            </div>

          </form>
        </div>




        <div className='sub-main-left'>
          <div className='left-book'>
            <table className='table'>
              <thead>
                <tr>
                  <th >شماره</th>
                  <th >عنوان</th>
                  <th >نویسنده</th>
                  <th >حذف</th>
                </tr>
              </thead>
              <tbody>
                {
                  books.length < 1 ?
                    <span>There is not any book in your library</span>
                    :
                    books.map(item => {
                      return (
                        <tr key={item.id}>
                          <th>{item.number}</th>
                          <th>{item.title}</th>
                          <th>{item.author}</th>
                          <th><FaRegTrashCan onClick={() => handleDelete(item.number)} /></th>
                        </tr>
                      )
                    })

                }
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
