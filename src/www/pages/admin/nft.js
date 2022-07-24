const second = 1000000000;
const minute = 60 * second;

export const metadata = [
	//Common -> Uncommon -> rare -> epic -> legendery value
	//5 + 10+15+30+40
	//time
	{

		name: 'Ant Kingdom',
		description: 'Ant Kingdom',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/kingdom.png',
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
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Queen',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Common',
				max: [],
				min: [],
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
					'resourcePerWorker': {
						gold: 0,
						leaf: 0,
						soil: 0,
						food: 30,
					},
					breedWorkerTime: 60 * second, //giam
				},
			},
		},
	},
	{
		name: 'Ant Queen',
		description: 'Ant Queen',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Queen',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: [],
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
					'resourcePerWorker': {
						gold: 0,
						leaf: 0,
						soil: 0,
						food: 28,
					},
					breedWorkerTime: 54 * second, //giam
				},
			},
		},
	},
	{
		name: 'Ant Queen',
		description: 'Ant Queen',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Queen',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Rare',
				max: [],
				min: [],
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
					'resourcePerWorker': {
						gold: 0,
						leaf: 0,
						soil: 0,
						food: 26,
					},
					breedWorkerTime: 49 * second, //giam
				},
			},
		},
	},
	{
		name: 'Ant Queen',
		description: 'Ant Queen',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Queen',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Epic',
				max: [],
				min: [],
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
					'resourcePerWorker': {
						gold: 0,
						leaf: 0,
						soil: 0,
						food: 24,
					},
					breedWorkerTime: 44 * second, //giam
				},
			},
		},
	},
	{
		name: 'Ant Queen',
		description: 'Ant Queen',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/queen.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Queen',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Legendary',
				max: [],
				min: [],
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
					'resourcePerWorker': {
						gold: 0,
						leaf: 0,
						soil: 0,
						food: 20,
					},
					breedWorkerTime: 38 * second, //giam
				},
			},
		},
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Common', //Uncommon
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: [],
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
						//tang
						food: 10,
						gold: 0.1,
						leaf: 20,
						soil: 30,
					},
					farmingTime: minute * 5,
				},
			},
		},
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon', //Uncommon
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: [],
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
						//tang
						food: 11,
						gold: 0.11,
						leaf: 22,
						soil: 33,
					},
					farmingTime: minute * 5,
				},
			},
		},
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Rare', //Uncommon
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: [],
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
						//tang
						food: 12,
						gold: 0.12,
						leaf: 24,
						soil: 36,
					},
					farmingTime: minute * 5,
				},
			},
		},
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Epic', //Uncommon
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: [],
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
						//tang
						food: 13,
						gold: 0.14,
						leaf: 27,
						soil: 40,
					},
					farmingTime: minute * 5,
				},
			},
		},
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Legendary', //Uncommon
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: ['10'],
				min: [],
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
						//tang
						food: 15,
						gold: 0.15,
						leaf: 29,
						soil: 44,
					},
					farmingTime: minute * 5,
				},
			},
		},
	},
	//Common -> Uncommon -> rare -> epic -> legendery value
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Common',
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: [],
				min: ['10'],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			nest: {
				//
				level: 1,
				queenIn: [],
				inLand: [],
				limit: 10
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: [],
				min: ['10'],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			nest: {
				//
				level: 1,
				queenIn: [],
				inLand: [],
				limit: 10
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Rare',
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: [],
				min: ['10'],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			nest: {
				//
				level: 1,
				queenIn: [],
				inLand: [],
				limit: 10
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Epic',
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: [],
				min: ['10'],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			nest: {
				//
				level: 1,
				queenIn: [],
				inLand: [],
				limit: 10
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
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Legendary',
				max: [],
				min: [],
			},
			{
				trait_type: 'Level',
				value: '1',
				max: [],
				min: ['10'],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			nest: {
				//
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
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/land.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Land',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Common',
				max: [],
				min: [],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			land: {
				resource: {
					//tang
					gold: 1000,
					leaf: 10000,
					soil: 20000,
					food: 8000,
				},
				info: { farmingTime: minute * 5 },
				nestStaked: [],
				inKingdom: 0,
				claimableResource: [],
			},
		},
	},
	{
		name: 'Land',
		description: 'Land',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/land.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Land',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Uncommon',
				max: [],
				min: [],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			land: {
				resource: {
					//tang
					gold: 1100,
					leaf: 11000,
					soil: 22000,
					food: 8800,
				},
				info: { farmingTime: minute * 5 },
				nestStaked: [],
				inKingdom: 0,
				claimableResource: [],
			},
		},
	},
	{
		name: 'Land',
		description: 'Land',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/land.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Land',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Rare',
				max: [],
				min: [],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			land: {
				resource: {
					//tang
					gold: 1200,
					leaf: 12000,
					soil: 25000,
					food: 9700,
				},
				info: { farmingTime: minute * 5 },
				nestStaked: [],
				inKingdom: 0,
				claimableResource: [],
			},
		},
	},
	{
		name: 'Land',
		description: 'Land',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/land.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Land',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Epic',
				max: [],
				min: [],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			land: {
				resource: {
					//tang
					gold: 14000,
					leaf: 14000,
					soil: 27000,
					food: 11000,
				},
				info: { farmingTime: minute * 5 },
				nestStaked: [],
				inKingdom: 0,
				claimableResource: [],
			},
		},
	},
	{
		name: 'Land',
		description: 'Land',
		tokenId: [],
		image:
			'https://storageapi.fleek.co/c86ea07c-070d-40b0-bb7a-12a2d3c468f4-bucket/nft/land.png',
		attributes: [
			{
				trait_type: 'Type',
				value: 'Land',
				max: [],
				min: [],
			},
			{
				trait_type: 'Rarity',
				value: 'Legendary',
				max: [],
				min: [],
			},
			{
				trait_type: 'Limit',
				value: '30',
				max: ['92'],
				min: [],
			},
		],
		detail: {
			land: {
				resource: {
					//tang
					gold: 1500,
					leaf: 15000,
					soil: 30000,
					food: 12000,
				},
				info: { farmingTime: minute * 5 },
				nestStaked: [],
				inKingdom: 0,
				claimableResource: [],
			},
		},
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
							gold: 15,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 30,
								},
								'breedWorkerTime': 60 * second,
							}
						}
					},
					{
						level: 2, costResource: {
							gold: 10,
							leaf: 30,
							food: 40,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 28,
								},
								'breedWorkerTime': 58 * second,
							}
						}
					},
					{
						level: 3, costResource: {
							gold: 12,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 26,
								},
								'breedWorkerTime': 56 * second,
							}
						}
					},
					{
						level: 4, costResource: {
							gold: 14,
							leaf: 40,
							food: 50,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 24,
								},
								'breedWorkerTime': 54 * second,
							}
						}
					},
					{
						level: 5, costResource: {
							gold: 16,
							leaf: 45,
							food: 50,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 22,
								},
								'breedWorkerTime': 52 * second,
							}
						}
					}
				],
			},
			{
				rarity: "Common",
				data: [
					{
						level: 1, costResource: {
							gold: 15,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 30,
								},
								'breedWorkerTime': 60 * second,
							}
						}
					},
					{
						level: 2, costResource: {
							gold: 10,
							leaf: 30,
							food: 40,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 28,
								},
								'breedWorkerTime': 58 * second,
							}
						}
					},
					{
						level: 3, costResource: {
							gold: 12,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 26,
								},
								'breedWorkerTime': 56 * second,
							}
						}
					},
					{
						level: 4, costResource: {
							gold: 14,
							leaf: 40,
							food: 50,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 24,
								},
								'breedWorkerTime': 54 * second,
							}
						}
					},
					{
						level: 5, costResource: {
							gold: 16,
							leaf: 45,
							food: 50,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 22,
								},
								'breedWorkerTime': 52 * second,
							}
						}
					}
				],
			},
			{
				rarity: "Uncommon",
				data: [
					{
						level: 1, costResource: {
							gold: 15,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 30,
								},
								'breedWorkerTime': 60 * second,
							}
						}
					}
				],
			},
			{
				rarity: "Rare",
				data: [
					{
						level: 1, costResource: {
							gold: 15,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 30,
								},
								'breedWorkerTime': 60 * second,
							}
						}
					}
				],
			}
			,
			{
				rarity: "Epic",
				data: [
					{
						level: 1, costResource: {
							gold: 15,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 30,
								},
								'breedWorkerTime': 60 * second,
							}
						}
					}
				],
			},
			{
				rarity: "",
				data: [
					{
						level: 1, costResource: {
							gold: 15,
							leaf: 35,
							food: 45,
							soil: 0,
						},
						nextLevel: {
							queen: {
								'resourcePerWorker': {
									gold: 0,
									leaf: 0,
									soil: 0,
									food: 30,
								},
								'breedWorkerTime': 60 * second,
							}
						}
					}
				],
			}
		]
	}
]
