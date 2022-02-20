import { useContext } from 'react';
import styles from './App.module.scss';

import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './context/auth';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    // Utiliza-se "className" pois usamos um arquivo js, então se fosse "class" daria conflito
    <main className={`${styles.contentWrapper} ${user ? styles.contentSigned : ''}`}>
        <MessageList />
        { !!user ? <SendMessageForm /> : <LoginBox/> }
    </main>    
  )
}
