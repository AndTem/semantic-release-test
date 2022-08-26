module.exports = {
	"branches": "main",
	"repositoryUrl": "https://github.com/AndTem/semantic-release-test",
	"plugins": [
	"@semantic-release/commit-analyzer",
	"@semantic-release/release-notes-generator",
	[
		"@semantic-release/changelog",
		{
			"changelogFile": "CHANGELOG.md"
		}
	],
	// [
	// 	"@semantic-release/git",
	// 	{
	// 		"assets": ["CHANGELOG.md"],
	// 		"message": "chore: Release note ${nextRelease.version}"
	// 	}
	// ],
	[
		"@semantic-release/github"
	]
],
}
