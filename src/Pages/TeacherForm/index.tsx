import React, { useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import Select from '../../Components/Select';



function TeacherForm(){
    const [scheduleItems, setScheduleItems] = useState([
        { weekday:0, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {
                weekday: 1,
                from: '',
                to:''
            }
          
        ]);
       
    };

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader  
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
                />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp"  />
                    <TextArea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="materia" 
                        label="Matéria" 
                        options ={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Bilogia'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Educação Física', label: 'Educação Física '},
                            { value: 'Física', label: 'Física'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'História', label: 'História'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Religião', label: 'Religião'},
                            { value: 'Filosofia', label: 'Filosofia'},
                            { value: 'Inglês', label: 'Inglês'},
                            { value: 'Espanhol', label: 'Espanhol'},
                        ]}    
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                  
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return(
                            <div key={scheduleItem.weekday } className="schedule-item">
                    <Select 
                        name="weekday" 
                        label="Dia da semana" 
                        options ={[
                            { value: '1', label: 'Domingo'},
                            { value: '2', label: 'Segunda-feira'},
                            { value: '3', label: 'Terça-feira'},
                            { value: '4', label: 'Quarta-feira'},
                            { value: '5', label: 'Quinta-feira'},
                            { value: '6', label: 'Sexta-feira'},
                            { value: '7', label: 'Sábado'},
                            ]}    
                    /> 

                    <Input name="from" label="Das" type="time" />
                    <Input name="to" label="Até" type="time" />
                    </div>
                        );
                    })}        
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button>Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}


export default TeacherForm;