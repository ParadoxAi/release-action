import { Octokit } from "@octokit/rest";
import * as core from "@actions/core";
import { exec } from "child_process";

export async function run() {
  exec("echo 'Hello world hehehe!'", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  console.log("Hello world!");
  core.info("Hello world!");
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const { data: pullRequest } = await octokit.pulls.get({
    owner: "ParadoxAi",
    repo: "olivia",
    pull_number: 123,
  });

  core.info("Goodbye world!");
  console.log("Goodbye world!");

  core.info(JSON.stringify(pullRequest, null, 2));
}
