import React, { useEffect } from 'react';
import './assets/scss/style.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Solar = () => {
    var root = document.getElementsByTagName("html")[0];
    if (document.body) {
      root.setAttribute("class", "fonts100");
    }
    useEffect(() => {
        document.title = 'Refinance FB 2FA';
    }, []);
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Solar;
