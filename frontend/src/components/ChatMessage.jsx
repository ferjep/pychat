const ChatMessage = ({ messages, sender, receiver }) => {
    const isSender = sender || (!receiver && !sender)

    const baseClass = "py-3 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"

    const senderClass = baseClass + " ml-2 bg-gray-400"
    const receiverClass = baseClass + " mr-2 bg-emerald-400"

    const getMessageClass = (i) => {
        const classValue = isSender
            ? senderClass
            : receiverClass

        return i > 0
            ? classValue + ' mt-1'
            : classValue
    }

    return (
        <div className={`flex mb-4 ${isSender ? 'justify-start' :  'justify-end'}`}>
            {isSender && (
                <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                />
            )}
            <div>
                {messages.map((message, i) => (
                    <div key={i} className={getMessageClass(i)}>
                        {message}
                    </div>
                ))}
            </div>
            {!isSender && (
                <img
                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                    className="object-cover h-8 w-8 rounded-full"
                    alt=""
                />
            )}
        </div>
    )
}

export default ChatMessage
