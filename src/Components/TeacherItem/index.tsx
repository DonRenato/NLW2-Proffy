import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/54222065?s=460&u=5ae1658ec82b97642873d026c4ead83e82aa378a&v=4" alt="Seo Darthinho" /> 
                <div>
                    <strong>Seo Darthinho </strong>
                    <span>Religião</span>
                </div>
                </header>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    <br /><br />
                    Cum, consectetur similique! Repudiandae reprehenderit voluptatibus, ipsam, 
                    explicabo nam ducimus esse consequuntur doloremque amet dolorem non aspernatur quisquam, 
                    exercitationem odio! Id, hic?
                </p>
                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$80,00</strong>
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