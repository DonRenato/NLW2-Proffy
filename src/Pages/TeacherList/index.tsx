import React, { useState, FormEvent } from 'react';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import api from '../../services/api';

import './styles.css';



function TeacherList(){
    const [subject, setSubject] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeacher] = useState([]);

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const res = await api.get('/classes', {
            params:{
                subject,
                weekday,
                time
            }
        });

       setTeacher(res.data);
    }

       

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                        name="subject" 
                        label="Matéria"
                        value = { subject } 
                        onChange = { (e) => { setSubject(e.target.value)}}
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

                    <Select 
                        name="weekday" 
                        label="Dia da semana" 
                        value = { weekday }
                        onChange = {(e) => { setWeekday(e.target.value)}}
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
                        type="time" 
                        name="time" 
                        label="Hora"
                        value = { time }
                        onChange = {(e) => { setTime(e.target.value)}}
                    />
                    <button type="submit">Buscar</button> 
                </form>
            </PageHeader>
            <main>
               {teachers.map(teacher => (
                    <TeacherItem />)             
               )}
            </main>
        </div>
    );
}


export default TeacherList;