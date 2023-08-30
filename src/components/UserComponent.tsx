import { useEffect, useState } from "react";
import "../App.css";
import loadingSpinner from "../assets/loading-spinner.svg";
import RepoList from "./RepoList";
import { repolistItem, userlistItem } from "../store/features/userSlice";
import downArrow from "../assets/down.png";
import { getUserRepos } from "../store/api/github";

interface UserComponentProps {
  userlistItem: userlistItem;
}

function UserComponent(props: UserComponentProps) {
  const [isActive, toggleIsActive] = useState(false);
  const [ongoingRepoRequest, toggleOngoingRepoRequest] = useState(true);
  const [userRepos, setUserRepos] = useState<repolistItem[]>([]);

  useEffect(() => {
    if (!isActive) {
      setUserRepos([]);
      return;
    }
    if (userRepos.length > 0) {
      return;
    }
    toggleOngoingRepoRequest(true);

    getUserRepos(props.userlistItem.login).then((userRepos) => {
      setUserRepos(userRepos);
      toggleOngoingRepoRequest(false);
    });
  }, [isActive]);

  useEffect(() => {
    toggleIsActive(false);
  }, [props.userlistItem]);

  return (
    <div id={"" + props.userlistItem.id}>
      <div
        onClick={() => {
          console.log("active", isActive);
          toggleIsActive(!isActive);
        }}
        className="userlistItemContainer"
      >
        <div className="userProfileContainer">
          <img
            className="userProfilePicture"
            src={props.userlistItem.avatar_url}
          />
          <h4>{props.userlistItem.login}</h4>
          {props.userlistItem.name && <h4>({props.userlistItem.name})</h4>}
        </div>
        <img
          className="arrowPicture"
          src={downArrow}
          style={{ transform: isActive ? "rotate(180deg)" : undefined }}
        />
      </div>
      {isActive && ongoingRepoRequest && (
        <div className="repoLoadingSpinner">
          <img src={loadingSpinner} />
        </div>
      )}
      {isActive && (
        <RepoList id={"" + props.userlistItem.id} userRepos={userRepos} />
      )}
    </div>
  );
}

export default UserComponent;
