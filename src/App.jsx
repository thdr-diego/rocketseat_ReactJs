import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './components/Post.jsx';

export function App() {
  return (
    <div>
    <Header/>
    
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
    <Post/>
    <Post/>
    <Post/>
      </main>
    </div>
   </div>
  )
}
