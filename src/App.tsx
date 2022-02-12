import styles from './App.module.scss';

import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';

export function App() {
  return (
    // Utiliza-se "className" pois usamos um arquivo js, então se fosse "class" daria conflito
    <main className={styles.contentWrapper}>
        <MessageList />
        <LoginBox />
    </main>    
  )
}
