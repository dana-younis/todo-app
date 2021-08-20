import React  , {useContext} from 'react';
import NavBar from './components/header';
import ToDo from './components/todo';
import If from './components/IF.js'
import { AuthContext } from './context/auth-context';
export default function App() {
  const context  = useContext(AuthContext);
    return (
      <>
        <NavBar />
        <If condition={context.loggedIn}>
          <ToDo />
        </If>
      </>
    );

}
