module.exports = {
	"branches": ["main", "next"],
	"repositoryUrl": "https://github.com/AndTem/semantic-release-test",
	"plugins": [
	[
		"@semantic-release/commit-analyzer",
		{
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
						"type": "bug",
						"scope":"Button",
						"section": "🐞 @astral/ui Button bugs",
						"hidden": false
					},

					{
						"type": "bug",
						"section": "🐞 Bugs",
						"hidden": false
					},

					{
						"type": "feat",
						"section": "✨ New features",
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
