import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

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
    function createNewConnection(){
        api.post('/connections', {
            user_id: teacher.id
        });
    }


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
                    <a 
                    target="_blank"
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`}>
                        <img src={whatsAppIcon} alt="whatsApp" />
                        Entrar em contato
                    </a>
            </footer>
         </article>
        
                
            
    );
}


export default TeacherItem;