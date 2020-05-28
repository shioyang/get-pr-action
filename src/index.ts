import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  const token = core.getInput("repo-token", { required: true });

  const owner = github.context.repo.owner;
  const repo = github.context.repo.repo;
  const commit_sha = github.context.sha;

  const client = new github.GitHub(token);
  const response = await client.repos.listPullRequestsAssociatedWithCommit({
    owner,
    repo,
    commit_sha,
  });

  const pr = response.data.length > 0 && response.data[0];

  const pull_request = pr ? JSON.stringify(pr) : "";
  core.debug(pull_request);
  core.setOutput("pull_request", pull_request);
}

run().catch((err) => {
  core.setFailed(err.message);
});
