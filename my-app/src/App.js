import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Books from './components/Books'

const DUMMY_BOOKS = [
  {
    id: 'e1',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    rating: 5,
  },
  { 
    id: 'e2', 
    title: 'Game of Thrones', 
    author: 'George RR Martin', 
    rating: 5 },
  {
    id: 'e3',
    title: 'Philosopher Stone',
    author: 'J.K. Rowling',
    rating: 5,
  },

];

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
