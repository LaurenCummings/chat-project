import { useChatStore } from "../store/useChatStore";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  return <div>ChatContainer</div>;
};

export default ChatContainer;
