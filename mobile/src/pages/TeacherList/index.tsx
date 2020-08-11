import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker'
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isTimeVisible, setIsTimeVisible] = useState(false);


    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState(new Date());

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });

                setFavorites(favoritedTeachersIds);
            }
        })
    }

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    function handleTimeFormat(date: Date) {
        const hours = date.getHours().toString();
        const minutes = `0${date.getMinutes()}`.slice(-2);
    
        return hours.concat(`:${minutes}`); 
    }

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                 subject,
                 week_day,
                 time: handleTimeFormat(time),
            }
        });

        setIsFiltersVisible(false);

        setTeachers(response.data);
    }

    function handleTimeChange(date: Date) {
        handleToggleIsTimeVisible();

        if(!date) return;
        
        setTime(date as Date);
    }

    function handleToggleIsTimeVisible() {
        setIsTimeVisible(!isTimeVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <View style={styles.input}>
                            <Picker
                                mode='dropdown'
                                selectedValue={subject}
                                onValueChange={itemValue => {
                                    setSubject(itemValue.toString());
                                }}
                            >
                                <Picker.Item value= 'Artes' label= 'Artes' />
                                <Picker.Item value='Biologia' label='Biologia' />
                                <Picker.Item value='Ciências' label='Ciências' />
                                <Picker.Item value='Educação física' label='Educação física' />
                                <Picker.Item value='Física' label='Física' />
                                <Picker.Item value='Geografia' label='Geografia' />
                                <Picker.Item value='História' label='História' />
                                <Picker.Item value='Matemática' label='Matemática' />
                                <Picker.Item value='Português' label='Português' />
                                <Picker.Item value='Química' label='Química' />
                                <Picker.Item value='Filosofia' label='Filosofia' />
                                <Picker.Item value='Sociologia' label='Sociologia' />
                            </Picker>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <View style={styles.input}>
                                    <Picker
                                        mode='dropdown'
                                        selectedValue={week_day}
                                        onValueChange={itemValue => {
                                            setWeekDay(itemValue.toString());
                                        }}
                                    >
                                        <Picker.Item value='0' label='Domingo' />
                                        <Picker.Item value='1' label='Segunda-feira' />
                                        <Picker.Item value='2' label='Terça-feira' />
                                        <Picker.Item value='3' label='Quarta-feira' />
                                        <Picker.Item value='4' label='Quinta-feira' />
                                        <Picker.Item value='5' label='Sexta-feira' />
                                        <Picker.Item value='6' label='Sábado' />
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <RectButton onPress={handleToggleIsTimeVisible} style={styles.input}>
                                    <Text>{handleTimeFormat(time)}</Text>
                                </RectButton>
                                
                                <View>
                                    { isTimeVisible && (
                                        <DateTimePicker
                                            value={time}
                                            mode="time"
                                            display="default"
                                            onChange={(event, date) => {handleTimeChange(date as Date)}}
                                        />
                                    )}

                                </View>
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle= {{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;