import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { changeFilter, getAll } from './features/productsSlice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(getAll)

  const selectProduct = (theme) => {
    dispatch(changeFilter(theme))
  }


  return (
    <div className='App'>
      <div className="App__first-part">
        <h1>Shop Bestsellers</h1>
        <div className="button-part">
          <button onClick={() => { selectProduct('Bath') }}>Bath and Body</button>
          <button onClick={() => { selectProduct("Hair") }}>Hair</button>
          <button onClick={() => { selectProduct("MakeUP") }}>Dry Body Oil</button>
          <button onClick={() => { selectProduct("Skincare") }}>Body Repair Lotion</button>
        </div>
      </div>
      <div className="App__div-part">
        {
          data.map((elm) => {
            return <div className='itemFlex' key={elm.id}>
              <img src={elm.image} alt="SelfCare product" />
              <div className='desc'>
              <p>{elm.desc}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
