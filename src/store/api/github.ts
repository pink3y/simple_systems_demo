import { Octokit } from "octokit";

const GITHUB_ACCESS_TOKEN = "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"; // !!TODO PUT THIS IN DEPLOYMENT
const octoKit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

export const searchGithubUsers = async (username: string, pageNr: number) => {
  const octoResponse = await octoKit.rest.search.users({
    q: `${username}`,
    per_page: 5,
    page: pageNr,
  });
  console.log("Res", octoResponse);
  return octoResponse.data.items;
};
export const getUserRepos = async (githubUsername: string) => {
  const repoResponse = await octoKit.rest.search.repos({
    q: `user:${githubUsername}`,
  });
  console.log("repoResponse", repoResponse);
  return repoResponse.data.items;
};
