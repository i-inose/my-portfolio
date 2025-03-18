import './App.scss'
import Hero from './components/ Hero';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <>
      <div className='App'>
        <Hero
        name='Izuru Inose'
        profession='Software Engineer'
        />
        <Skills />
        <SocialLinks />
      </div>
    </>
  )
}

export default App