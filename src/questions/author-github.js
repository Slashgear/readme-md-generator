module.exports = projectInfos => ({
  type: 'input',
  message: '👤  Github username (use empty value to skip)',
  name: 'authorGithubUsername',
  default: projectInfos.githubUsername,
  transform: input => input.replace(/^@/, '')
})
