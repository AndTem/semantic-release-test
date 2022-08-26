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
	[
		"@semantic-release/git",
		{
			"assets": ["CHANGELOG.md"],
			"message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
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
