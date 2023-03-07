function Card(props) {
    let badgeText = null;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            <img src={`/images/${props.coverImg}`} />
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-rating">
                <img src="/images/star.png" />&nbsp;
                <span className="rating">{props.stats.rating.toFixed(1)}</span>&nbsp;
                <span className="count">({props.stats.reviewCount})</span>&nbsp;
                <span className="location">{props.location}</span>&nbsp;
            </div>
            <div className="card-text">
                <p className="card-title">{props.title}</p>
                <p className="card-price"><strong>From ${props.price}</strong>&nbsp;/&nbsp;person</p>
            </div>
        </div>
    )
}

export { Card };