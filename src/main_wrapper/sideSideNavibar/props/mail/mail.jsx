import styles from './mail.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar1img from '~/src/assets/images/avatar1.png';

function Co_mail({
    mail_img = avatar1img,
    mail_subject = "mail_subject",
    mail_from = "mail_from",
    text1 = "",
    text2 = ""
}) {
    return(
        <div className={styles.main_mail}>

            <div className={styles.mail_top}>
                <img src={mail_img} alt="mail image"></img>
                <h3>Subject: {mail_subject}</h3>
                
                <div className={styles.mail_from}>
                    <FontAwesomeIcon icon="fa-solid fa-clock" className={styles.ic_clock}/>
                    <p>From {mail_from}</p>
                </div>

                <div className={styles.mail_buttons}>
                    <button type="button">
                        <p>Reply</p>
                        <FontAwesomeIcon icon="fa-solid fa-reply" className={styles.ic_reply}/>
                    </button>

                    <button type="button">
                        <p>Forward</p>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className={styles.ic_forward}/>
                    </button>
                </div>
            </div>

            <div className={styles.mail_body}>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>

        </div>
    );
}

Co_mail.propTypes = {
    mail_img: PropTypes.string,
    mail_subject: PropTypes.string,
    mail_from: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
}

export default Co_mail