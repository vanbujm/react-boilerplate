import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './News.css';

export class NewsComponent extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    const renderedNews = this.props.news.map(item => (
      <article key={item.link} className={s.newsItem}>
        <h1 className={s.newsTitle}>
          <a href={item.link}>{item.title}</a>
        </h1>
        <div
          className={s.newsDesc}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </article>
    ));
    return <div>{renderedNews}</div>;
  }
}

export default withStyles(s)(NewsComponent);
