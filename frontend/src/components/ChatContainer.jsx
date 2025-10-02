import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import MessageSkeleton from "../components/skeletons/MessageSkeleton";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";
import { useAuthStore } from "../store/useAuthStore";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

    const { authUser } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  )

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        { messages.map((message) => (
          <div 
            key={message._id}
            className={`chat ${message.sender._id === authUser._id ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img src={message.senderId === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser.profilePic || "/avatar.png"} alt="profile pic" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <MessageInput />

    </div>
  )
};

export default ChatContainer;
