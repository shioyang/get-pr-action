import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  try {
    const token = core.getInput("repo-token", { required: true });

    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;
    const commit_sha = github.context.sha
    console.log(commit_sha);

    const client = new github.GitHub(token);
    const response = await client.repos.listPullRequestsAssociatedWithCommit({
      owner,
      repo,
      commit_sha,
    });

    const pull_request =
      response.data.length > 0 ? JSON.stringify(response.data[0]) : "";
    console.log(pull_request);
    core.setOutput("pull_request", pull_request);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
