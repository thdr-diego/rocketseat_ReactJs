import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar.jsx';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            
            <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/80010933?v=4"/>
            
                <strong>Diego Oliveira</strong>
                <span> Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size = {20}/>
                        Editar seu perfil
                    </a>
                </footer>

            </div>
        </aside>
    );
}