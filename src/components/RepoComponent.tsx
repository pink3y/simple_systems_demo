import { repolistItem } from "../store/features/userSlice";
import star from "../assets/star.png";
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
          <img className="starIcon" src={star} />
        </div>
      </div>
      <span className="languageSpan"> ( {props.userRepo.language} )</span>
      <p>{props.userRepo.description}</p>
    </div>
  );
}

export default RepoComponent;
