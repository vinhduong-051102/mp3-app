
import { useRef } from 'react'

function Header({ input, datas, appCallBack, appInputCallBack }) {
    const ip = useRef()
    const inputRef = ip.current
    const handleInput = (e) => {
        appInputCallBack(e.target.value)
    }
    const handleDelete = () => {
        const newArr = datas.filter((song) => {
            return song.nameMusic != input
        })
        appCallBack(newArr)
        appInputCallBack('')
        inputRef.focus()
    }
    
    return (
        <div className="flex flex-every">
            <h1 className="f-54">Mới phát hành</h1>
            <div className="middle ">
                <input 
                    className="input-style"
                    placeholder="Nhập tên bài hát ... "
                    onChange={handleInput}
                    value={input}
                    ref={ip}
                />
                <button
                    onClick={handleDelete}
                    className="button-style"
                >
                    XOÁ BÀI HÁT
                </button>
            </div>
        </div>
    )
}

export default Header