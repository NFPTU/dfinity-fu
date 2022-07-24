import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import {
	RightBox,
	OptionSelect,
	SearchWrapper,
	SearchInput,
	ComboxOption,
	Select,
	FillterItems,
	TotalItems,
	BoxImg,
	Image,
	CollectionID,
	Price,
	PriceIcon,
	PriceText,
	FeedBack,
	ImgAvater,
	NameActor,
	Infor,
	NameCollection,
	LeftInfor,
	RightInfor,
	FeedBackIcon,
	CountFeedBack,
	BoxMainImg,
} from './right-fillter-element';
import { data } from './mock-data';

const { Option } = Select;

function RightFillterEle() {
	function onChange(value) {
		console.log(`selected ${value}`);
	}

	function onSearch(val) {
		console.log('search:', val);
	}
	return (
		<RightBox>
			<OptionSelect>
				<SearchWrapper>
					<SearchIcon style={{ color: '#gray' }} />
					<SearchInput placeholder='Search items' />
				</SearchWrapper>

				<ComboxOption>
					<Select
						style={{ width: 227 }}
						showSearch
						placeholder='Select a person'
						optionFilterProp='children'
						onChange={onChange}
						onSearch={onSearch}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}>
						<Option value='jack'>Jack</Option>
						<Option value='lucy'>Lucy</Option>
						<Option value='tom'>Tom</Option>
					</Select>
				</ComboxOption>
				<ComboxOption>
					<Select
						style={{ width: 100 }}
						showSearch
						placeholder='Price:'
						optionFilterProp='children'
						onChange={onChange}
						onSearch={onSearch}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}>
						<Option value='jack'>Jack</Option>
						<Option value='lucy'>Lucy</Option>
						<Option value='tom'>Tom</Option>
					</Select>
				</ComboxOption>
			</OptionSelect>
			<BoxMainImg>
				{data.map((item, index) => (
					<BoxImg key={index}>
						<ImgAvater>
							<Link to='/nft/detail'>
								<Image src={item.imgUrl} alt='' />
							</Link>
						</ImgAvater>
						<Infor>
							<LeftInfor>
								<NameCollection>Collection From Actor</NameCollection>
								<NameActor>{item.nameActor}</NameActor>
							</LeftInfor>
							<RightInfor>
								<CollectionID>{item.collectionID}</CollectionID>
								<Price>
									<PriceIcon>
										<CurrencyBitcoinIcon />
									</PriceIcon>
									<PriceText>{item.price}</PriceText>
								</Price>
							</RightInfor>
						</Infor>

						<FeedBack>
							<FeedBackIcon>
								<FavoriteIcon />
							</FeedBackIcon>
							<CountFeedBack>{item.emotionCount}</CountFeedBack>
						</FeedBack>
					</BoxImg>
				))}
			</BoxMainImg>
		</RightBox>
	);
}

export default RightFillterEle;
