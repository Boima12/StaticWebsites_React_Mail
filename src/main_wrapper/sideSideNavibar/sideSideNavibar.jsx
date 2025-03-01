import styles from './sideSideNavibar.module.css';
import { useRef } from 'react';
import { useToggleCollapse } from '~/src/utilities/hooks/useToggleCollapse/useToggleCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useBoxAlpha } from '../../zustand/boxAlpha';

import Co_mail from './props/mail/mail';
import Co_inbox_mail from './props/inbox_mail/inbox_mail';

import avatar1img from '~/src/assets/images/avatar1.png';
import avatar2img from '~/src/assets/images/avatar2.png';
import avatar3img from '~/src/assets/images/avatar3.png';


function Co_sideSideNavibar() {

    // mail logic
    const mail3 = {
        mail_img: avatar3img,
        mail_subject: "Remember Me",
        mail_author: "Borge Refsnes",
        mail_from: "Borge Refsnes, Sep 27, 2015.",
        text1: `Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt  in culpa qui officia deserunt mollit anim id est laborum consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        text2: `Best Regards, \nBorge Refsnes`
    };
    
    const mail2 = {
        mail_img: avatar2img,
        mail_subject: "",
        mail_author: "Jane Doe",
        mail_from: "Jane Doe, Sep 25, 2015.",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        text2: "Forever yours,\nJane"
    };
    
    const mail1 = {
        mail_img: avatar1img,
        mail_subject: "",
        mail_author: "John Doe",
        mail_from: "John Doe, Sep 23, 2015.",
        text1: "Welcome.",
        text2: "That's it!"
    };

    const mails = [mail3, mail2, mail1];
    const { currentMailIndex } = useBoxAlpha();




    // toggle inbox
    const inboxRef = useRef();
    const { isOpen: isInboxOpen, toggle: triggerInbox } = useToggleCollapse(styles, inboxRef, 500);


    // toggle inboxCollapse
    const inboxCollapseRef = useRef();
    const { isOpen: isInboxCollapseOpen, toggle: triggerInboxCollapse } = useToggleCollapse(styles, inboxCollapseRef, 500);


    // toggle sendMail
    const sendMailRef = useRef();
    const { toggle: triggerSendMail } = useToggleCollapse(styles, sendMailRef, 500);


    // context_top_collapse toggle
    const context_side_collapseRef = useRef();
    const { toggle: triggerContext_side_collapse } = useToggleCollapse(styles, context_side_collapseRef, 500);


    return (
        <div className={styles.main_sideSideNavibar}>
            <div className={styles.context_side}>
                <ul className={styles.menu1}>
                    <li className={styles.newMessage} onClick={triggerSendMail}>
                        <p>New Message</p>
                        <FontAwesomeIcon icon="fa-solid fa-pencil" className={styles.ic}/>
                    </li>

                    <li className={styles.inbox} onClick={triggerInbox}>
                        <FontAwesomeIcon icon="fa-solid fa-inbox" className={styles.ic}/>
                        <p>Inbox ({mails.length})</p>
                        <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic} style={{display: isInboxOpen ? "none" : "inline-block"}}/>
                        <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.ic} style={{display: isInboxOpen ? "inline-block" : "none"}}/>                         
                    </li>       


                    <ul className={styles.inbox} ref={inboxRef}>
                        {mails.map((mail, index) => (
                            <Co_inbox_mail 
                                key={index}
                                inbox_image={mail.mail_img}
                                inbox_author={mail.mail_author}
                                inbox_subject={mail.mail_subject} 
                                inbox_brief={mail.text1} 
                                inbox_index={index}
                            />
                        ))}
                    </ul>


                    <li className={styles.other}>
                        <FontAwesomeIcon icon="fa-solid fa-paper-plane" className={styles.ic1}/>
                        <p>Sent</p>
                    </li>      

                    <li className={styles.other}>
                        <FontAwesomeIcon icon="fa-solid fa-hourglass-half" className={styles.ic2}/>
                        <p>Drafts</p>
                    </li>  

                    <li className={styles.other}>
                        <FontAwesomeIcon icon="fa-solid fa-trash-can" className={styles.ic3}/>
                        <p>Trash</p>
                    </li>         
                </ul>
                

            </div>
         
        
            <div className={styles.context_side_nav}>
                <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic} onClick={triggerContext_side_collapse}/>
                <button type="button" onClick={triggerSendMail}>
                    <FontAwesomeIcon icon="fa-solid fa-pencil" className={styles.ic}/>
                </button>
            </div>
            <div className={styles.context_side_nav_spacer}></div>


            <div className={styles.context_side_collapse} ref={context_side_collapseRef}>
                <div className={styles.overlay} onClick={triggerContext_side_collapse}></div>

                <div className={styles.context_side}>
                    <ul className={styles.menu1}>
                        <li className={styles.heading} onClick={triggerContext_side_collapse}>
                            <p>Close</p>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic}/>
                        </li>

                        <li className={styles.newMessage} onClick={triggerSendMail}>
                            <p>New Message</p>
                            <FontAwesomeIcon icon="fa-solid fa-pencil" className={styles.ic}/>
                        </li>

                        <li className={styles.inbox} onClick={triggerInboxCollapse}>
                            <FontAwesomeIcon icon="fa-solid fa-inbox" className={styles.ic}/>
                            <p>Inbox ({mails.length})</p>
                            <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic} style={{display: isInboxCollapseOpen ? "none" : "inline-block"}}/>
                            <FontAwesomeIcon icon="fa-solid fa-caret-down" className={styles.ic} style={{display: isInboxCollapseOpen ? "inline-block" : "none"}}/>                         
                        </li>       

                        <ul className={styles.inbox} ref={inboxCollapseRef}>
                            {mails.map((mail, index) => (
                                <Co_inbox_mail 
                                    key={index}
                                    inbox_image={mail.mail_img}
                                    inbox_author={mail.mail_author}
                                    inbox_subject={mail.mail_subject} 
                                    inbox_brief={mail.text1} 
                                    inbox_index={index}
                                />
                            ))}
                        </ul>  

                        <li className={styles.other}>
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" className={styles.ic1}/>
                            <p>Sent</p>
                        </li>      

                        <li className={styles.other}>
                            <FontAwesomeIcon icon="fa-solid fa-hourglass-half" className={styles.ic2}/>
                            <p>Drafts</p>
                        </li>  

                        <li className={styles.other}>
                            <FontAwesomeIcon icon="fa-solid fa-trash-can" className={styles.ic3}/>
                            <p>Trash</p>
                        </li>         
                    </ul>
                </div>
            </div>


            <div className={styles.sendMail} ref={sendMailRef}>
                <div className={styles.overlay} onClick={triggerSendMail}></div>

                <div className={styles.panel}>
                    <div className={styles.heading}>
                        <h3>Send Mail</h3>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerSendMail}/>                        
                    </div>

                    <div className={styles.input_bar}>
                        <p>To</p>
                        <input type="text"></input>
                    </div>

                    <div className={styles.input_bar}>
                        <p>From</p>
                        <input type="text"></input>
                    </div>

                    <div className={styles.input_bar}>
                        <p>Subject</p>
                        <input type="text"></input>
                    </div>
                    
                    <div className={styles.input_bar}>
                        <textarea rows={8} placeholder='What&apos;s on your mind?'></textarea>
                    </div>

                    <div className={styles.footer}>
                        <button type="button" onClick={triggerSendMail}>
                            <p>Cancel</p>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic}/>
                        </button>

                        <button type="button" onClick={triggerSendMail}>
                            <p>Send</p>
                            <FontAwesomeIcon icon="fa-solid fa-paper-plane" className={styles.ic}/>
                        </button>
                    </div>
                </div>
            </div>


            <div className={styles.context_main}>

                <Co_mail
                    mail_img={mails[currentMailIndex].mail_img}
                    mail_subject={mails[currentMailIndex].mail_subject}
                    mail_from={mails[currentMailIndex].mail_from}
                    text1={mails[currentMailIndex].text1}
                    text2={mails[currentMailIndex].text2}
                />

            </div>
        </div>
    );
}

export default Co_sideSideNavibar;