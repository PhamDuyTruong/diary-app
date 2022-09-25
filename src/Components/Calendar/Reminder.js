import React from 'react';


const Reminder = (props) => {
    const { reminder, reminders, setReminders, handleDeleteClick } = props;
    const handleComplete = () => {
        setReminders(
            reminders.map((item) => {
                if(item.id === reminder.id){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        )
    };

  return (
      <>
      <li
        className={`relative pl-2 py-2 flex my-2 bg-green-dark rounded-l-xl ${
          reminder.completed ? 'line-through opacity-60' : ''
        }`}
      >
        <input type="checkbox" onClick={handleComplete} aria-label="checkbox" />
        <div className="ml-4 text-left">
          <p className="text-xs">{reminder.date}</p>
          <p className="h-7 w-72 overflow-hidden">{reminder.text}</p>
        </div>
        <button
          type="button"
          onClick={() => handleDeleteClick(reminder.id)}
          className="border-l absolute top-5 right-2 h-5 w-14"
        >
          <abbr title="Delete">
            <img
              src="/img/icons/close.svg"
              alt="delete"
              className="h-5 w-5 ml-5"
            />
          </abbr>
        </button>
      </li>
    </>
  )
}

export default Reminder