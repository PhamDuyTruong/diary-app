import React, {useContext, useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { v4 as uuid } from 'uuid';
import {LanguageContext} from '../../context/Language';
import Time from '../../utils/Time';

import ReminderList from './ReminderList';

const CalendarView = () => {
    const [reminder, setReminder] = useState("");
    const [date, setDate] = useState(new Date());
    const [reminderDate, setReminderDate] = useState(new Date());
    const [reminders, setReminders] = useState(() => {
        const savedReminders = localStorage.getItem('reminders');
        if (savedReminders) {
          return JSON.parse(savedReminders);
        }
        return [];
      });
      const [showModal, setShowModal] = useState(false);
      const handleClose = (e) => {
        e.preventDefault();
        setShowModal(false);
        setReminder('');
      };
      const handleShow = () => setShowModal(true);
      const {dictionary} = useContext(LanguageContext);
      useEffect(() => {
        localStorage.setItem('reminders', JSON.stringify(reminders));
      }, [reminders]);

      const handleReminderSubmitForm = (e) =>{
          e.preventDefault();
          if(reminder !== ""){
            setReminders([
                ...reminders, 
                {
                    id: uuid(),
                    date: reminderDate,
                    text: reminder.trim(),
                    completed: false,
                    show: false,
                }
            ])
          }
          setReminders('');
      };
      const handleDateTime = (e) => {
        setDate(e.target.value);
      };
      const handleReminderChange = (e) => {
        setReminder(e.target.value);
      };
      const onCalendarChange = (e) => {
          setDate(e)      
    };
    const handleDeleteClick = (id) => {
        if (window.confirm(dictionary.reminderDelete)) {
          const removeReminder = reminders.filter((item) => item.id !== id);
          setReminders(removeReminder);
        }
      };
  return (
    <div>Calendar</div>
  )
}

export default CalendarView