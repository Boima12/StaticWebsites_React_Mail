import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faBars, faPencil, faClock, faReply, faArrowRight, faXmark, faInbox, faCaretRight, faCaretDown, faPaperPlane, faHourglassHalf, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

// grouping for easier organize
const iconGroup1 = [faHouse, faFacebook, faFaceSmile, faBars, faPencil, faClock, faReply, faArrowRight, faXmark, faInbox, faCaretRight, faCaretDown, faPaperPlane, faHourglassHalf, faTrashCan];

// Add all icons to the library
library.add(...iconGroup1);