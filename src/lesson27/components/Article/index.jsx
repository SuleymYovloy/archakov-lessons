import React from "react";

import styles from './Article.module.scss';

const Article = () => {
    return (
        <div>
            <div className={styles.article}>
                <h2>Это важная новость!</h2>
                <p>
                    Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing
                    elit. Architecto, quos.
                    <button>Читать далее</button>
                </p>
            </div>
        </div>
    );
};

export default Article;