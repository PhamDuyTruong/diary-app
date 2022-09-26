import React, { useContext } from 'react';
import sad from './Feelings/sad.png';
import happy from './Feelings/happy.png';
import mixed from './Feelings/mixed-feelings.png';
import motivated from './Feelings/motivated.png';
import okay from './Feelings/okay.png';
import { LanguageContext } from '../../context/Language';

const Entry = ({
  entry,
  onEditClick,
  onDeleteClick,
  showEntry,
  handleEntryClose,
}) => {
  const showHideModal = showEntry ? 'block' : 'hidden';
  const { dictionary } = useContext(LanguageContext);

  return (
    <div
      className={`container modal w-4/5 rounded mx-auto z-40 bg-white-pure 
      h-4/5 px-14 py-2 absolute inset-0 top-16 shadow-md backdrop-blur-md 
      ${showHideModal}`}
    >
      <div>
        <img
          src={
            entry.mood === dictionary.entryMood1
              ? happy
              : entry.mood === dictionary.entryMood3
              ? sad
              : entry.mood === dictionary.entryMood2
              ? okay
              : entry.mood === dictionary.entryMood4
              ? motivated
              : mixed
          }
          alt=""
          className="absolute h-44 left-2 top-6 opacity-20 sm:opacity-50"
        />
      </div>
      <div className="h-4/5 text-center overflow-auto">
        <p className="text-left">{entry.date}</p>
        <h2 className="text-3xl pb-4">{entry.title}</h2>
        <p>{entry.text}</p>
      </div>
      <div
        className="w-full flex justify-around py-8 border-t-2 
      border-blue-dark absolute bottom-0 left-0"
      >
        <button type="button" onClick={() => onEditClick(entry)} className="">
          <abbr title="Edit">
            <img
              src="/img/icons/edit-pencil.svg"
              alt="delete"
              className="h-5 w-5"
            />
          </abbr>
        </button>
        <button
          type="button"
          onClick={() => onDeleteClick(entry.id)}
          className=""
        >
          <abbr title="Delete">
            <img src="/img/icons/trash.svg" alt="delete" className="h-5 w-5" />
          </abbr>
        </button>
      </div>
      <button
        type="button"
        onClick={handleEntryClose}
        className="absolute top-4 right-4 rounded-full w-10 h-10 flex 
        justify-center bg-blue-light shadow-2xl items-center"
      >
        <img src="/img/icons/close.svg" alt="X" width="20" height="20" />
      </button>
    </div>
  );
};

export default Entry;