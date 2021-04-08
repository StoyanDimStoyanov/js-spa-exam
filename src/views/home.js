import { html } from '../../node_modules/lit-html/lit-html.js';
import { getlastTenArticles } from '../api/data.js';


const homeTemplate = (articles, python, java, c, js) => html`
<!-- Home -->   
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
    <h2>JavaScript</h2>
       ${js ? articleTemplate(js) : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${c ? articleTemplate(c) : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${java ? articleTemplate(java) : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${python ? articleTemplate(python) : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
</section>`;


export async function homepage(ctx) {

    const articles = await getlastTenArticles()
    console.log(articles);
    const python = articles.find(t =>t.category === 'Python')
    const js = articles.find(t =>t.category === 'JavaScript')
    const c = articles.find(t =>t.category === 'C#')
    const java = articles.find(t =>t.category === 'Java')
    ctx.render(homeTemplate(articles, python, java, c, js));
    
}

const articleTemplate = (article) => html`
    
        <article>
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <a href="/details/${article._id}" class="btn details-btn">Details</a>
        </article>`;