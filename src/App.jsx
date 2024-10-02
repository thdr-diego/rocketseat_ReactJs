import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './components/Post.jsx';

const posts = [
{
  id: 1,
  author: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/80010933?v=4',
    name: 'Diego Oliveira',
    role: 'Desenvolvedor Fullstack'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date ('2024-10-02 10:59:00')
},

{
  id: 2,
  author: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/28007005?v=4',
    name: 'Jéssica Castro',
    role: 'Desenvolvedora Fullstack'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date ('2024-09-30 14:19:00')
},
];


export function App() {
  return (
    <div>
    <Header/>
    
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
    {posts.map(post=> {
      return (
             <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             />
      )
    })}
      </main>
    </div>
   </div>
  )
}
