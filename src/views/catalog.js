import { html } from '../../node_modules/lit-html/lit-html.js';

import {getAllArticles} from '../api/data.js'

const catalogTemplate = (articles) => html`
<!-- catalogue -->
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>

    ${articles.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` :
articles.map(a => articleTemplate(a))}
    <!-- No articles message -->
    
</section>`;

export async function catalogPage(ctx) {
    const articles = await getAllArticles();
   
    ctx.render(catalogTemplate(articles));

}

const articleTemplate = (article) => html`<a class="article-preview" href="/details/${article._id}">
<article>
    <h3>Topic: <span>${article.title}</span></h3>
    <p>Category: <span>${article.category}</span></p>
</article>
</a>`;