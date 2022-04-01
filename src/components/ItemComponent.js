import  secondToTime  from '../function/time.js'

function ItemComponent({ props }) {
    if(props.album) {
        var { artistsNames ,title, thumbnail } = props.album
    }
    const nameMusic = props.title
    const duration = props.duration
    const timeRemain = secondToTime(duration)
    
    return (
        <div className="row flex flex-every pd-10">
            <div className="card-info flex">
                <img className="img-artist" src={ props.album ? thumbnail : props.thumbnailM } />
                <div className="artist-info flex flex-col">
                    <span className="title">{nameMusic}</span>
                    <p className="f-12">{props.album ? artistsNames : props.artistsNames}</p>
                </div>
            </div>
            <div className="album-info f-12">
                {title}
            </div>
            <div className="times f-12">
                {timeRemain}
            </div>
        </div>
    )
}

export default ItemComponent