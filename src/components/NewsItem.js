import React from 'react'

const NewsItem = (props) => {
 
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (

        <div className='my-3'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span class="badge rounded-pill bg-danger">{source} </span>
                </div>
                <img src={!imageUrl ? 'https://www.shutterstock.com/image-vector/breaking-news-banner-isolated-on-260nw-470123609.jpg' : imageUrl} className="card-img-to" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...  </h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>

    )
}


export default NewsItem
// ... used only for long description can be shorted in short form