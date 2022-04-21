import React from 'react';
import { Search,
        AccountCircleOutlined,
        AccountBalanceWalletOutlined
} from '@mui/icons-material';
import {
  Container,
  Logo,
  LogoWrapper,
  Menu,
  MenuItem,
  Name,
  Option,
  OptionItem,
  OptionWrapper,
  Right,
  SearchInput,
  SearchWrapper
} from './navbar-elements'

function Navbar() {
	return (
		<Container>
			<LogoWrapper>
        <Logo src='https://motoko-lsp-client.gallerycdn.vsassets.io/extensions/motoko-lsp-client/motoko-lsp-client/2.2.0/1583876431744/Microsoft.VisualStudio.Services.Icons.Default' alt=''/>
        <Name>NFPTU</Name>
      </LogoWrapper>

			<Right>
        <SearchWrapper>
          <Search style={{color: '#gray'}}/>
          <SearchInput placeholder="Search items, collections, and accounts"/>
        </SearchWrapper>
  
        <OptionWrapper>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Stats</MenuItem>
            <MenuItem>Create</MenuItem>
          </Menu>

          <Option>
            <OptionItem>
                <AccountCircleOutlined fontSize="large"/>
            </OptionItem>
            <OptionItem>
                <AccountBalanceWalletOutlined fontSize="large"/>
            </OptionItem>
          </Option>
        </OptionWrapper>
      </Right>
		</Container>
	);
}

export default Navbar;
