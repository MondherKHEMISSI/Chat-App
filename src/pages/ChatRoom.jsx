import ChatBox from "../components/ChatBox"
import SendMessage from "../components/SendMessage"

const ChatRoom = () => {
  return (
    <div className="bg-slate-950">
      <ChatBox />
      <SendMessage />
    </div>
  )
}

export default ChatRoom