import styled from 'styled-components';

export const Container = styled.div`
	background-image: url('/images/background-board.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 35%;
	position: relative;
	margin: auto;
	width: 63rem;
	transition: all 0.2s ease-in-out;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	z-index: 6;
	-webkit-animation-name: slideup;
	animation-name: slideup;
	height: 60rem;
`;

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 55rem;
	padding: 30px;
`;

export const Left = styled.div`
	width: 280px;
	height: 100%;
	margin-right: 105px;
`;

export const LeftWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export const ListMiniCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 326px;
	min-width: 80px;
	background-color: #f3d8af;
	padding-right: 10px;
	border-radius: 6px;
	overflow: scroll;
	overflow-x: hidden;
	//Display elements from right to left:
	direction: rtl;
	scrollbar-width: thin;
	position: absolute;
	top: 100px;
	bottom: 0;
	transition: all 0.2s ease-in-out;
	left: 45px;
	z-index: 100;
`;

export const CardImg = styled.img`
	cursor: pointer;
	width: 62px;
	height: 100px;
	padding: 2px 0;
`;

export const CardWrapper = styled.div`
	height: 380px;
	width: 280px;
	margin-left: 105px;
	margin-top: 96px;
`;

export const Right = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 460px;
	background-color: rgba(233, 225, 214, 0.6);
	border-radius: 5px;
	padding: 10px 10px;
	margin-left: -25px;
`;

export const Info = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const InfoTop = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Type = styled.div`
	font-size: 23px;
	color: #923935;
`;

export const Level = styled.div`
	background-color: #923935;
	color: #fff;
	font-size: 20px;
	box-sizing: border-box;
	padding: 5px;
	border-radius: 5px;
`;

export const InfoBody = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 0px;
`;

export const InfoBodyLeft = styled.div`
	font-size: 20px;
`;

export const InfoBodyLeftItem = styled.div``;

export const InfoBodyRight = styled.div`
	margin-right: 30px;
	font-size: 20px;
`;

export const InfoBodyRightItem = styled.div``;

export const CountdownWrapper = styled.div`
	border: 2px solid #de8d2b;
	width: 50%;
	margin: auto;
	margin-top: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
`;

export const CountdownInside = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #923935;
	padding: 6px 0px;
	font-size: 20px;
`;

export const Countdown = styled.div`
	display: flex;
	align-items: center;
	color: #923935;
	padding: 15px 10px;
	font-size: 20px;
`;

export const Hour = styled.div``;

export const Minutes = styled.div``;

export const Second = styled.div``;

export const BtnList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`;

export const Btn = styled.div`
	background-image: url('https://play.farmersworld.io/static/media/plain-button.58a5875c.png');
	background-size: contain;
	background-clip: padding-box;
	width: 200px;
	height: 50px;
	background-repeat: no-repeat;
	background-position: 50%;
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	text-align: center;
	color: #fff;
	cursor: pointer;
	text-shadow: -3px 2px 2px #923935;
	display: flex;
	align-items: center;
	justify-content: center;
	//Disable button
	/* filter: grayscale(1); */
`;

//=========== Resource =================
export const ListResourceWrapper = styled.div`
	width: 437px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	border: 2px solid #de8d2b;
	padding: 10px 15px;
	border-radius: 5px;
`;

export const ResourceTitle = styled.div`
	font-size: 23px;
	color: #923935;
`;

export const ListResource = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ResourceItem = styled.div`
	display: flex;
	align-items: center;
	margin-right: 5px;
	width: 90px;
	box-sizing: border-box;
`;

export const ResourceImg = styled.img`
	width: 40px;
	border-radius: 50%;
`;

export const ResourceQuantity = styled.div``;

//Resource Farm Per Time:
export const ResourceFarmPerTime = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ResourceItemm = styled.div`
	display: flex;
	align-items: center;
    margin-bottom: 5px;
`;
export const ResourceItemName = styled.div`
	margin-right: 5px;
`;

export const ResourceItemValue = styled.div`
    margin-right: 5px;
`;

export const ResourceFarmPerTimeTitle = styled.div`
	text-transform: uppercase;
	font-size: 13px;
	border-top: 2px solid black;
`;

export const ResourceItemImg = styled.img`
    width: 30px;
    border-radius: 50%;
`

//Notification
export const WrapperNoti = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	top: 45%;
	left: 55%;
	transform: translate(-50%, -50%);
	width: 55rem;
	padding: 30px;
`;

export const NotiWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const NotiTitle = styled.div`
	font-weight: bold;
	font-size: 22px;
`;

export const NotiBody = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
`;

export const NotiNavigate = styled.div`
	font-size: 22px;
	margin-right: 10px;
`;

export const NotiBtn = styled.div`
	color: #ffffff;
	font-size: 22px;
	background: linear-gradient(180deg, #f9c744, #df8c00);
	width: 180px;
	height: 45px;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	opacity: 0.9;
	transition: all 0.5s ease;

	&:hover {
		opacity: 1;
	}
`;

export const WrapperLoader = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	top: 45%;
	left: 88%;
	transform: translate(-50%, -50%);
	width: 55rem;
	padding: 30px;
`;


