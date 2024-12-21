import React, { useEffect } from 'react'

const windowClick = (ref, callback) => {
 
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                callback();
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [ref, callback]);

};

export default windowClick
