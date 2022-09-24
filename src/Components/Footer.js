import React, {useContext} from 'react';
import {LanguageContext} from '../context/Language';

const Footer = () => {
    const {dictionary} = useContext(LanguageContext);
  return (
    <footer className="container text-center pt-36 sm:py-16 text-lg tracking-wider mx-auto">
      <p>
        {dictionary.footerMade}
        <span className="text-rose-dark">&#10084;</span> {dictionary.footerBind}{' '}
        &#9835; {dictionary.footerPrep} {dictionary.footerDo}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <span>
            <u>{dictionary.footerName}</u>
          </span>
          {dictionary.footerDate}
          {dictionary.footerRights}
        </a>
      </p>
    </footer>
  )
}

export default Footer