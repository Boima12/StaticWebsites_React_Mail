import styles from './inbox_mail.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useBoxAlpha } from '../../../../zustand/boxAlpha';

import avatar1img from '~/src/assets/images/avatar1.png';


function Co_inbox_mail({
    inbox_image = avatar1img,
    inbox_author = "Unknown",
    inbox_subject = "",
    inbox_brief = "",
    inbox_index = 0
}) {

    // Subject conditional, if index_subject is blank then hide the subject paragraph.
    const [isInboxSubjectBlank, setIsInboxSubjectBlank] = useState(false);
    useEffect(() => {
        setIsInboxSubjectBlank(inbox_subject.trim() === "");
    }, [inbox_subject]);


    // Zustand currentMailIndex
    const { setCurrentMailIndex } = useBoxAlpha();
    const triggerMailIndex = (indexVal) => {
        setCurrentMailIndex(indexVal);
    }


    return(
        <li className={styles.main_inbox_mail} onClick={() => triggerMailIndex(inbox_index)}>

            <div className={styles.title}>
                <img src={inbox_image} alt="inbox image"></img>
                <h3>{inbox_author}</h3>
            </div>

            {!isInboxSubjectBlank && <p className={styles.subject}>Subject: {inbox_subject}</p>}
            <p className={styles.brief}>{inbox_brief}</p>

        </li>
    );
}


Co_inbox_mail.propTypes = {
    inbox_image: PropTypes.string,
    inbox_author: PropTypes.string,
    inbox_subject: PropTypes.string,
    inbox_brief: PropTypes.string,
    inbox_index: PropTypes.number,
}


export default Co_inbox_mail