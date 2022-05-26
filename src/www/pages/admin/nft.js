export const metadata = [
	{

		name: 'Ant Queen',
		description: 'Ant Queen',
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/ant-queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Ant Queen',
				max: [],
				min: []
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: []
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: []
			},
		],
		detail: {
			queen: {
				level: 1
			}
		}
	},
	{

		name: 'Ant Worker',
		description: 'Ant Worker',
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/ant.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Ant Worker',
				max: [],
				min: []
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: []
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: []
			},
		],
		detail: {
			worker: {
				level: 1
			}
		}
	},
	{

		name: 'Ant Nest',
		description: 'Ant Nest',
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/ant-nest.jpg',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Nest',
				max: [],
				min: []
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: []
			},
			{
				trait_type: 'Level',
				value: '1',
				max: [],
				min: ['10']
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: []
			},
		],
		detail: {
			nest: {
				level: 1,
				queenIn: []
			}
		}
	},
	{

		name: 'Land',
		description: 'Land',
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/land.jpg',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Land',
				max: [],
				min: []
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: []
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: []
			},
		],
		detail: {
			land: {
				gold: 1000,
				leaf: 10000,
				wood: 10000,
				nestStaked: []
			}
		}
	},

];
