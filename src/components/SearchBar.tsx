import "./searchBar.css";
import loadingSpinner from "../assets/loading-spinner.svg";
import { useAppDispatch } from "../store/hooks";
import { setUserList, setUsername } from "../store/features/userSlice";
import { searchGithubUsers } from "../store/api/github";
import { useState } from "react";

function SearchBar() {
  const dispatch = useAppDispatch();

  const [tempUsername, setTempUsername] = useState("");
  const [ongoingUserRequest, toggleOngoingUserRequest] = useState(false);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!tempUsername) return;
          toggleOngoingUserRequest(true);
          dispatch(setUserList([]));
          const githubUserResponse = await searchGithubUsers(tempUsername, 0);
          toggleOngoingUserRequest(false);
          dispatch(setUserList(githubUserResponse));
          dispatch(setUsername(tempUsername));
        }}
        className="searchBarContainer"
      >
        <input
          value={tempUsername}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document.getElementById("searchFormButton")?.click();
            }
          }}
          onChange={(e) => {
            setTempUsername(e.target.value);
          }}
          placeholder={"Enter Username"}
          type="text"
        />
        <button id="searchFormButton">{"Suchen"}</button>
        {ongoingUserRequest && <img src={loadingSpinner} />}
      </form>
    </>
  );
}

export default SearchBar;
