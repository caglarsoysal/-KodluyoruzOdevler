import './App.css'
import { useState } from 'react';
function App() {
  
  
  // state tanımlama
  const [todos, setTodos] = useState(['Yemek yap']);
  const [input, setInput] = useState('');
  
  
  
  // input değerini değiştirme fonksiyonu
  const handleChange = (e) => {
  setInput(e.target.value)
  }
  // yeni todo ekleme fonksiyonu

  const addTodos = (e) =>{
  e.preventDefault();  // sayfa yenilenmesini engelle
  setTodos([...todos, input]); // todos dizisine input değerini ekle
  setInput(""); // input değerini sıfırla
  }

 
  // todo silme fonksiyonu
const deleteTodos = (index) =>{
const newTodos= [...todos]// todos dizisini kopyala
newTodos.splice(index,1)// index parametresine göre todo sil
setTodos(newTodos); // todos dizisini güncelle
}

  return (
 <>
 <div className="app">
  <h1 className='text-red-600 font-bold'>React To Do List</h1>
  <form action="" onSubmit={addTodos}>
    <input id='sa' type="text" value={input} onChange={handleChange} />
    <button id='as' type='submit'>Ekle</button>
  </form>
  <ul>
        {todos.map((todo, index) => (
          <li className='bg-slate-400' key={index}>
            {todo}
            <button className='text-red-800  ' onClick={() => deleteTodos(index)}>Sil</button>
          </li>
        ))}
      </ul>
 </div>
 </>
  )
}

export default App
