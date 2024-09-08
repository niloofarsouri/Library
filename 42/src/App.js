
import { useState, useEffect } from 'react';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

function App() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let book ={
      title,
      author,
      number
    }
    setBooks(book)
  }

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  

  return (
    <div className="wrapper">
      <h1>لیست کتاب ها</h1>
      <p>کتاب جدید خود را به کتابخانه اضافه کنید.</p>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">عنوان</label>
              <input 
                type="text"
                className="form-control"
                required
                onChange={(e)=> setTitle(e.target.value)}
                />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">نویسنده</label>
              <input 
              type="text" 
              className="form-control" 
              required
              onChange={(e)=> setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">شماره #</label>
              <input 
              type="text" 
              className="form-control" 
              required
              onChange={(e)=> setNumber(e.target.value)}
              />
            </div>
            <div className="form-grou mt-4">
              <button type="submit" className="btn btn-success btn-md">افزودن</button>
            </div>
          </form>
        </div>
        <div className="view-container">
          <div className="table-responsive w-100">
            <table className="table">
               <thead>
                  <tr>
                    <th>شماره#</th>
                    <th>عنوان</th>
                    <th>نویسنده</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>تست</td>
                    <td>فرزاد</td>
                    <td className='delete-btn'>
                      <Icon icon={trash} />
                    </td>
                  </tr>
                  
                </tbody>
            </table>
          </div>
          <button className='btn btn-danger btn-md'>حذف همه</button>
        </div>
      </div>
    </div>
  );
}

export default App;
