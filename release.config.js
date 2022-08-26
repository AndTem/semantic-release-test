module.exports = {
	"branches": ["main", "next"],
	"repositoryUrl": "https://github.com/AndTem/semantic-release-test",
	"plugins": [
	[
		"@semantic-release/commit-analyzer",
		{
			"releaseRules": [
				{"type": "bug", "release": "patch"},
				{"type": "feat", "release": "minor"},
				{"type": "build", release: false}
			],
		}
	],
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
	// [
	// 	"@semantic-release/github"
	// ]
],
}
