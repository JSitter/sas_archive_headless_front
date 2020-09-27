import React from 'react';

function teaserLines(numLines) {
    let lines = [];
    for(let line = 0; line<numLines; line++) {
        lines.push(<div className="teaser-line" key={line}></div>);
    }
    return lines;
}

export default function LoadingTeaserContent() {
    return  (
        <div className="teaser-article">
            <div className="content-wrapper">
                <div className="loading-teaser-header"></div>
                {teaserLines(8)}
            </div>

        </div>
    );
}
