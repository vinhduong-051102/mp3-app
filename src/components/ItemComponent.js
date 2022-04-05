import  secondToTime  from '../function/time.js'
function ItemComponent({ props, index }) {
    const { duration, thumbnail, nameMusic, artistsNames, title } = props
    const timeRemain = secondToTime(duration)
    return (
        <div className="row flex flex-every pd-10">
            <h3 className="top">{index + 1}</h3>
            <div className="card-info flex">
                <img className="img-artist" src={ thumbnail } />
                <div className="artist-info flex flex-col">
                    <span className="title">{ nameMusic }</span>
                    <p className="f-12">{ artistsNames }</p>
                </div>
            </div>
            <div className="album-info f-12">
                { title }
            </div>
            <p className="view f-12 middle">{duration}</p>
            <div className="times f-12">
                { timeRemain }
            </div>
        </div>
    )
}

export default ItemComponent