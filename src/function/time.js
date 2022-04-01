function secondToTime(duration) {
    
    let seconds = Math.floor((duration) % 60)
    let minutes = Math.floor(duration / 60)
    let hours = Math.floor(duration  * 60 * 60)

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
}

export default secondToTime
