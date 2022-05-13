import Private from './Private';
import Public from './Public';
import { useAuth } from './components/hooks/useAuth';

function App() {

  const {token} = useAuth()

 if (token?.token) {
   return <Private/>
 }
 return <Public/>
  
}

export default App;
