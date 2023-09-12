import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  let timestamp = message?.createdAt?.seconds + (message?.createdAt?.nanoseconds) * 10**-9;
  let date = new Date(timestamp * 1000);
  let dateFormat = date.toDateString().substring(4)  + ", "+ date.getHours() + ":" + date.getMinutes();
  

  
  return (
    <div className="bg-slate-950">
      <div className="text-center">
        <time className="text-xs opacity-50">{dateFormat}</time>
        <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
            <div className="w-7 rounded-full">
              <img src={message.avatar} />
            </div>
          </div>
          <div className="chat-header">
            {message.name}
          </div>
          <div className={`chat-bubble text-white ${currentUser.uid === message.uid ? "bg-blue-700" : ""}`}>{message.text}</div>
            <div className="chat-footer opacity-100">
              ✅
            </div>
        </div>
      </div>
    </div>
  );
};

export default Message;