module.exports = {
	"branches": "main",
	"repositoryUrl": "https://github.com/AndTem/semantic-release-test",
	"debug": "true",
	"plugins": [
	"@semantic-release/commit-analyzer",
	"@semantic-release/release-notes-generator",
	[
		"@semantic-release/changelog",
		{
			"changelogFile": "CHANGELOG.md"
		}
	],
		"@semantic-release/npm",
	[
		"@semantic-release/git",
		{
			"assets": ["CHANGELOG.md"],
			"message": "chore: Begin ${nextRelease.version}"
		}
	],
		["@semantic-release/exec", {
			"prepareCmd": "echo 'new: ${nextRelease.version}'",
		}],
	// [
	// 	"@semantic-release/github"
	// ]
],
}
