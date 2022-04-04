
function Title(props) {
    const arrView = []
    const { data } = props
    const handleClickView = () => {
        data.forEach((item) => {
            arrView.push(item.duration)
        })
        arrView.sort() 
        props.appCallBack(arrView)
    }
    return (
        <div className="row flex flex-every pd-10 f-12">
            <p className="top" onClick = {handleClickView}>LƯỢI XEM</p>
            <p className="song">BÀI HÁT</p>
            <p className="album">ALBUM</p>
            <p className="time">THỜI GIAN</p>
        </div>
    )
}



export default Title