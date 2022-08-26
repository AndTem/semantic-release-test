module.exports = {
	"branches": ["main", "next"],
	"repositoryUrl": "https://github.com/AndTem/semantic-release-test",
	"plugins": [
	[
		"@semantic-release/commit-analyzer",
		{
			// TODO: описать для каждого enum
			"releaseRules": [
				{"type": "bug", "release": "patch"},
				{"type": "feat", "release": "minor"}
			],
		}
	],
	[
		"@semantic-release/release-notes-generator",
		{
			"preset": "conventionalcommits",
			"linkReferences": true,
			"presetConfig": {
				"types": [
					{
						"type": "bug",
						"scope":"ui",
						"section": "🐞 @astral/ui package bugs",
						"hidden": false
					},
					{
						"type": "feat",
						"scope":"ui",
						"section": "✨ New features",
						"hidden": false
					},
					{
						"type": "bug",
						"scope":"TEST-*",
						"hidden": false
					},
				]
			}
		}
	],
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
