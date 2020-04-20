import React, {useState, useEffect, useRef} from 'react';
import { emailShufflerMessages } from '../../data/const';

const validateEmailUserName = (text) => {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
};

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay) {
            const id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }
        return () => {}; // pass linter
    }, [delay]);
};

const EmailShuffler = () => {
    const messages = emailShufflerMessages;
    const hold = 50; // ticks to wait after message is complete before rendering next message
    const delay = 50; // tick length in mS
    const [idx, updateIter] = useState(0); // points to current message
    const [message, updateMessage] = useState(messages[idx]);
    const [char, updateChar] = useState(messages[idx].length); // points to current char
    const [isActive, setIsActive] = useState(true); // disable when all messages are printed

    useInterval(() => {
        let newIdx = idx;
        let newChar = char;
        if (char - hold >= messages[idx].length) {
            newIdx += 1;
            newChar = 0;
        }
        if (newIdx === messages.length) {
            setIsActive(false);
        } else {
            updateMessage(messages[newIdx].slice(0, newChar));
            updateIter(newIdx);
            updateChar(newChar + 1);
        }
    }, isActive ? delay : null);

    return (
    <div
    className="inline-container"
    style={validateEmailUserName(message) ? {} : { color: 'red' }}
    onMouseEnter={() => setIsActive(false)}
    onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
        <a href={validateEmailUserName(message) ? `mailto:${message}@eliashomsi.com` : ''}>
            <span>{message}</span>
            <span>@eliashomsi.com</span>
        </a>
    </div>);
};

const EmailAtSection = () => {
    return (
        <div className="email-at">
            <p>Feel free to get in touch. You can email me at: </p>
            <EmailShuffler />
        </div>
    )
}

export default EmailAtSection;