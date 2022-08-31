module.exports = {
	"branches": ["main", {name: 'next', prerelease: 'beta'}],
	"repositoryUrl": "https://github.com/AndTem/semantic-release-test",
	"plugins": [
	[
		"@semantic-release/commit-analyzer",
		{
			// TODO: описать для каждого enum
			"releaseRules": [
				{"type": "bug", "release": "patch"},
				{"type": "build", "release": "patch"},
				{"type": "feat", "release": "minor"},
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
					// {
					// 	"type": "bug",
					// 	"scope":"ui",
					// 	"section": "🐞 @astral/ui package bugs",
					// 	"hidden": false
					// },
					// {
					// 	"type": "feat",
					// 	"scope":"ui",
					// 	"section": "✨ New features",
					// 	"hidden": false
					// },
					// {
					// 	"type": "bug",
					// 	"scope":"TEST-*",
					// 	"hidden": false
					// },
					// {
					// 	"type": "feat",
					// 	"scope":"TEST-*",
					// 	"hidden": false
					// },
					{
						"type": "bug",
						"section": "🐞 Bugs",
						"hidden": false
					},
					{
						"type": "feat",
						"section": "✨ Features",
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
	],
		[
			'@semantic-release/exec',
			{
				// добавляем в outputs gh actions следущую версию пакетов
				prepareCmd: 'echo "NEXT_VERSION=${nextRelease.version}" >> $GITHUB_ENV',
			},
		],
],
}
