const second = 1000000000
const minute = 60 * second;

export const metadata = [
	{

		name: 'Ant Kingdom',
		description: 'Ant Kingdom',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/ant-queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Kingdom',
				max: [],
				min: []
			},
		],
		detail: {
			kingdom: {
				landId: []
			}
		}
	},
	{

		name: 'Ant Queen',
		description: 'Ant Queen',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/ant-queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Queen',
				max: [],
				min: []
			},
			{
				trait_type: 'Rarity',
				value: 'Common',
				max: [],
				min: []
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: [],
			},
		],
		detail: {
			queen: {
				level: 1,
				inNest: [],
				breedingWorkerId: 0,
				info: {
					foodPerWorker: 40,
					breedWorkerTime: 60 * second
				}
			}
		}
	},
	{

		name: 'Ant Worker',
		description: 'Ant Worker',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/ant.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Worker',
				max: [],
				min: []
			},
			{
				trait_type: 'Rarity',
				value: 'Common',
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
				level: 1,
				antState: 0,
				farmTimestamp: 0,
				queenId: [],
				inNest: [],
				breedTimestamp: 0,
				info: {
					farmPerTime: {
						'food': 10,
						'gold': 0.1,
						'leaf': 20,
						'soil': 30,
					},
					farmingTime: minute * 5,
				}
			}
		}
	},
	{

		name: 'Ant Nest',
		description: 'Ant Nest',
		tokenId: [],
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
				value: 'Common',
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
				queenIn: [],
				inLand: [],
				limit: 10
			}
		}
	},
	{

		name: 'Land',
		description: 'Land',
		tokenId: [],
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
				value: 'Common',
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
				resource: {
					gold: 1000,
					leaf: 10000,
					soil: 20000,
					food: 8000,
				},
				info: { farmingTime: minute * 5, },
				nestStaked: [],
				claimableResource: []
			}
		}
	},

];

export const levelData = [
	{
		type: "Queen",
		info: [
			{
				rarity: "Common",
				data: [
					{
						level: 1, costResource: {
							gold: 10,
							leaf: 30,
							food: 40,
						},
						nextLevel: {
							
						}
					},
					{
						level: 2, resource: {
							gold: 10,
							leaf: 30,
							food: 40,
						}
					},
					{
						level: 3, resource: {
							gold: 10,
							leaf: 30,
							food: 40,
						}
					},
					{
						level: 4, resource: {
							gold: 10,
							leaf: 30,
							food: 40,
						}
					},
					{
						level: 5, resource: {
							gold: 10,
							leaf: 30,
							food: 40,
						}
					}
				],
				nextLevel : [
					
				]
			}
		]
	}
]