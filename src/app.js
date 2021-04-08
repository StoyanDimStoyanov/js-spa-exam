import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout, search } from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

import { homepage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';


setUserNav()
document.getElementById('logoutBtn').addEventListener('click', logoutFunc);
const main = document.querySelector('main');
page('/', decorateContext, homepage);
page('/login', decorateContext, loginPage);
page('/details/:id', decorateContext, detailsPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/search', decorateContext, searchPage);

page.start()



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav  = setUserNav;

    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        // document.querySelector('div.profile > span').textContent = `Welcome, ${email}`; /* when logout shout be changed hidden */
        document.querySelector('#user').style.display =  'block';
        document.querySelector('#guest').style.display =  'none';
    }else{
        document.querySelector('#user').style.display =  'none';
        document.querySelector('#guest').style.display =  'block';
    }
}

async function logoutFunc() {
    await logout();
    setUserNav();
    page.redirect('/');
}