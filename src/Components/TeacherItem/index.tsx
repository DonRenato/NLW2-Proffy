import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {  
        id: number;
        avatar: string;
        bio: string;
        cost: string;
        name: string;
        subject: string;
        user_id: number;
                whatsapp:string;
}

interface TeacherItemProps{
    teacher: Teacher;
    
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="avatar" /> 
                <div>
                    <strong> {teacher.name} </strong>
                    <span>{ teacher.subject }</span>
                </div>
                </header>
                <p> { teacher.bio }</p>
                <footer>
                    <p>
                        Preço/Hora
                        <strong>R${teacher.cost},00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsAppIcon} alt="whatsApp" />
                        Entrar em contato
                    </button>
            </footer>
         </article>
        
                
            
    );
}


export default TeacherItem;