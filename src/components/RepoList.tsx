import "./userList.css";
import RepoComponent from "./RepoComponent";
import { repolistItem } from "../store/features/userSlice";

interface RepoListProps {
  id: string;
  userRepos: repolistItem[];
}
function RepoList(props: RepoListProps) {
  return (
    <div id={props.id} className="repolistContainer">
      {props.userRepos.map((userRepo) => (
        <RepoComponent userRepo={userRepo} />
      ))}
    </div>
  );
}

export default RepoList;
