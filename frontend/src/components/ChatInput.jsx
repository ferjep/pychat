import { useState } from "react"

const ChatInput = ({onSend}) => {
    const [text, setText] = useState('')

    const handleSend = () => {
        onSend(text.trim())
        setText('')
    }

    return (
        <div className="flex h-max mt-auto bg-blue-600 rounded h-10 overflow-hidden shadow-2xl outline outline-2 outline-emerald-500">
            <textarea
                className="mt-auto max-h-60 h-10 w-full p-2 resize-y"
                placeholder="Say Hello..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
                className="px-4 text-xl font-bold text-white bg-emerald-500"
                onClick={handleSend}
            >
                &gt;
            </button>
        </div>
    )
}

export default ChatInput
