import styles from './sideSideNavibar.module.css';
import { useRef } from 'react';
import { useToggleCollapse } from '~/src/utilities/hooks/useToggleCollapse/useToggleCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Co_mail from './props/mail/mail';

import avatar1 from '~/src/assets/images/avatar1.png';
// import avatar2 from '~/src/assets/images/avatar2.png';
// import avatar3 from '~/src/assets/images/avatar3.png';


function Co_sideSideNavibar() {

    // context_top_collapse toggle
    const context_side_collapseRef = useRef();
    const { toggle: triggerContext_side_collapse } = useToggleCollapse(styles, context_side_collapseRef, 500);

    return (
        <div className={styles.main_sideSideNavibar}>
            <div className={styles.context_side}>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
                <a>Link 5</a>
            </div>
         
        
            <div className={styles.context_side_nav}>
                <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic} onClick={triggerContext_side_collapse}/>
            </div>
            <div className={styles.context_side_nav_spacer}></div>


            <div className={styles.context_side_collapse} ref={context_side_collapseRef}>
                <div className={styles.overlay} onClick={triggerContext_side_collapse}></div>

                <div className={styles.context_side}>
                    <div className={styles.heading}>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerContext_side_collapse}/>
                    </div>

                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                    <a>Link 4</a>
                    <a>Link 5</a>
                </div>
            </div>


            <div className={styles.context_main}>

                <Co_mail mail_img={avatar1}
                    mail_subject='Remember Me'
                    mail_from='Borge Refsnes, Sep 27, 2015.'
                    text1={`Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt  in culpa qui officia deserunt mollit anim id est laborum consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                    text2={`Best Regards, \nBorge Refsnes`}
                />

            </div>
        </div>
    );
}

export default Co_sideSideNavibar;