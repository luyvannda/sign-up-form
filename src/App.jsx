import './App.css'
import Footer from './components/Footer'
import FormComponent from './components/FormComponent'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className='container-fluid'>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-5">
          <Header />
        </div>

        <div className="col-md-6 col-lg-5 mt-5">
          <Hero />
          <FormComponent />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
