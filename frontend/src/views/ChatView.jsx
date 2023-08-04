import ChatInput from "../components/ChatInput"
import ChatMessage from "../components/ChatMessage"

const ChatView = () => (
    <div className="flex flex-col h-full w-4/5 px-7 py-5">
        <div className="flex-1 overflow-scroll">
            <ChatMessage messages={['hola', 'hola2']} />
            <ChatMessage messages={['hola']} receiver />
        </div>
        <ChatInput onSend={console.log}/>
    </div>
)

export default ChatView
