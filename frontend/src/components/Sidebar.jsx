import { useChatStore } from "../store/useChatStore";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser } = useChatStore();
  return <div>Sidebar</div>;
};

export default Sidebar;
