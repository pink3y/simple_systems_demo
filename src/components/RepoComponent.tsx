import { repolistItem } from "../store/features/userSlice";
import "./repoList.css";

interface RepoComponentProps {
  userRepo: repolistItem;
}

function RepoComponent(props: RepoComponentProps) {
  return (
    <div id={"" + props.userRepo.id} className="repoContainer">
      <div className="repoHeaderContainer">
        <a target={"_blank"} href={props.userRepo.html_url}>
          {props.userRepo.name}
        </a>
        <div className="repoStars">
          <h4> {props.userRepo.stargazers_count}</h4>
          <div> {"-STARS"} </div>
        </div>
      </div>
      <span className="languageSpan"> ( {props.userRepo.language} )</span>
      <p>{props.userRepo.description}</p>
    </div>
  );
}

export default RepoComponent;
