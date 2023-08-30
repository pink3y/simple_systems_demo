import "./userList.css";
import UserComponent from "./UserComponent";
import { useAppSelector } from "../store/hooks";

function UserList() {
  const userlist = useAppSelector((state) => state.user.userList);
  const username = useAppSelector((state) => state.user.username);
  return (
    <>
      {userlist.length > 0 && username && (
        <h4> {`Showing users for "${username}"`}</h4>
      )}
      <ul className="userlistContainer">
        {userlist?.map((userlistItem) => {
          console.log(userlistItem);
          return <UserComponent userlistItem={userlistItem} />;
        })}
      </ul>
    </>
  );
}

export default UserList;
