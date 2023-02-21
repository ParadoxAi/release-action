import { Octokit } from '@octokit/rest'

export async function run() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const { data: pullRequest } = await octokit.pulls.get({
    owner: 'ParadoxAi',
    repo: 'olivia',
    pull_number: 123,
  })

  console.log(pullRequest)
}
