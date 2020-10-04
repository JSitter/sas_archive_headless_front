import React from 'react';

export default function ArticleTeaser(props) {
    return (
        <article className="teaser">
            <h2 className="article-title">{props.title}</h2>
            <p className="article-author">{props.title}</p>
            <p className="article-publish-date">{props.publishedDate}</p>
            <section className="article-body">
                {props.articleBody}
            </section>
        </article>
    );
}
