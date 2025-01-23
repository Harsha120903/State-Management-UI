import Controls from './components/Controls'
import Container from './components/Container'
import './App.css'
import Header from './components/Header'
import {useSelector} from 'react-redux'
import DisplayCounter from './components/DisplayCounter'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivacyMessage from './components/PrivacyMessage'
function App() {
  const privacy=useSelector(store=>store.privacy);
  return(
    <>
  <center className="px-4 py-5 my-5 text-center">
    <Container>
    <Header></Header>
    <div className="col-lg-6 mx-auto">
    {privacy ?  <PrivacyMessage/>:<DisplayCounter></DisplayCounter>} 
      <Controls></Controls>
    </div>
    </Container>
  </center>
    </>
  );
}

export default App
