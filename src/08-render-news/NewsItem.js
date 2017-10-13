import React from 'react' ;

const NewsItem = (props) => (
  <div>
    <span>{props.item.rank}:</span>
    <span><a href={props.item.url} target="blank">{props.item.title}</a></span>
    <span>(by {props.item.by})</span>
    <span>{props.item.kids ? props.item.kids.length : 0}comments</span>
  </div>
);
export default NewsItem;