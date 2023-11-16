import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Header />
      <div className="row">
        <Hero />
      </div>
      <Footer />
    </>
  )
}

export default App
