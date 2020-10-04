import React from 'react';

export default function Article(props) {
    return (
        <article>
            <h2 className="article-title">{props.title}</h2>
            <p className="article-author">{props.title}</p>
            <p className="article-publish-date">{props.publishedDate}</p>
            <section className="article-body">
                {props.articleBody}
            </section>
            <section>
                {props.comments}
            </section>
        </article>
    );
}
