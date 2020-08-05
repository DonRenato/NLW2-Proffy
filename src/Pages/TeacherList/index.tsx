import React from 'react';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

import './styles.css';



function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
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
                    <Input type="time" name="time" label="Hora"/> 
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
            

            
        </div>
    );
}


export default TeacherList;