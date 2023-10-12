import React from 'react';
import styles from "./Cards.module.scss";
import { Link } from 'react-router-dom';

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    const firstEightResults = results.slice(0, 8);

    display = firstEightResults.map((x) => {
      const { id, name, image, status, species, gender } = x;

      let statusClass = '';
      if (status === 'Alive') {
        statusClass = 'status-alive';
      } else if (status === 'Dead') {
        statusClass = 'status-dead';
      } else if (status === 'unknown') {
        statusClass = 'status-unknown';
      }

      const statusText = <span className={statusClass}>{status}</span>;

      return (
        <Link to={`${page}${id}`} style={{ textDecoration: "none" }} key={id} className='col-12 col-md-6 col-lg-4 col-xl-3 text-center mb-4'>
          <div className={styles.cards}>
            <img src={image} alt='' className={`${styles.img} img-fluid mx-auto`} />
            <div className='content'>
              <div className={`${styles.nameCharacter} poppins fs-7 mt-4 fw-bold`}>{name}</div>
              <div className={`${styles.datesCharacter} poppins fs-9 my-2`}>
                <p>
                  {statusText} | {species} | {gender}
                </p>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No characters found";
  }

  return (
    <div className='row justify-content-center'>
      {display}
    </div>
  );
};

export default Cards;
