import React, { useState, FormEvent } from 'react';
import PageHeader from '../../Components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Input from '../../Components/Input';
import TextArea from '../../Components/TextArea';
import Select from '../../Components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';



function TeacherForm(){
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const history = useHistory();

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

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('/classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: scheduleItems
        }).then(()=> {
            alert('Cadastro realizado com sucesso');
        }).catch((e)=>{
            console.log(e);
            alert(('Erro no cadastro'));
        })
        history.push('/');
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const newArray = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return {...scheduleItem,[field]: value}
            }
            return scheduleItem;
        });  
        setScheduleItems(newArray);  
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader  
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
                />
            <main>
                <form action="POST" onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input 
                            name = "name" 
                            label = "Nome completo"  
                            value = { name }
                            onChange = { (e) => {setName(e.target.value)} }
                        />
                        <Input 
                            name = "avatar" 
                            label = "Avatar" 
                            value = { avatar }
                            onChange = {(e) => {setAvatar(e.target.value)}}
                        />
                        <Input 
                            name = "whatsapp" 
                            label = "WhatsApp"  
                            value = { whatsapp }
                            onChange = {(e) => {setWhatsapp(e.target.value)}}
                        />
                        <TextArea 
                            name = "bio" 
                            label = "Biografia"
                            value = { bio }   
                            onChange = {(e)=>{setBio(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name = "subject" 
                            label = "Matéria" 
                            value = { subject }
                            onChange = {(e) =>{setSubject(e.target.value)}}
                            options ={[
                                { value: 'Artes', label: 'Artes'},
                                { value: 'Biologia', label: 'Biologia'},
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
                        <Input 
                            name = "cost" 
                            label = "Custo da sua hora por aula" 
                            value = { cost }
                            onChange = {(e) => {setCost(e.target.value)}}
                        />
                    
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, i) => {
                            return(
                                <div key={scheduleItem.weekday } className="schedule-item">
                        <Select 
                            name = "weekday" 
                            label = "Dia da semana"
                            value = { scheduleItem.weekday }
                            onChange = {(e) => {setScheduleItemValue(i,'weekday', e.target.value)}}
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

                        <Input 
                            name = "from" 
                            label = "Das" 
                            type = "time" 
                            value = { scheduleItem.from }
                            onChange = {(e) => {setScheduleItemValue(i,'from', e.target.value)}}
                            />
                        <Input 
                            name = "to" 
                            label = "Até" 
                            type = "time" 
                            value = { scheduleItem.to }
                            onChange = {(e) => {setScheduleItemValue(i,'to', e.target.value)}}
                            />
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
                        <button type="submit" >Salvar cadastro</button>
                    </footer>
                </form>
                
            </main>
        </div>
    );
}


export default TeacherForm;