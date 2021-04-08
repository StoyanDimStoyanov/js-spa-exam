import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';

const searchTemplate = () => html`

<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        <a class="article-preview" href="#">
            <article>
                <h3>Topic: <span>Arrays</span></h3>
                <p>Category: <span>Javascript</span></p>
            </article>
        </a>
        <a class="article-preview" href="#">
            <article>
                <h3>Topic: <span>Tuples and Sets</span></h3>
                <p>Category: <span>Python</span></p>
            </article>
        </a>
        <a class="article-preview" href="#">
            <article>
                <h3>Topic: <span>Stacks and Queues</span></h3>
                <p>Category: <span>JAVA</span></p>
            </article>
        </a>
        <a class="article-preview" href="#">
            <article>
                <h3>Topic: <span>Lists</span></h3>
                <p>Category: <span>C#</span></p>
            </article>
        </a>
        <a class="article-preview" href="#">
            <article>
                <h3>Topic: <span>Classes</span></h3>
                <p>Category: <span>Javascript</span></p>
            </article>
        </a>

        <h3 class="no-articles">No matching articles</h3>
    </div>
</section>`;


export async function searchPage(ctx) {
   
    
    ctx.render(searchTemplate(searchPage()));
    
}