import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/ChickSoftLogo sml.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }:Props) => {
	return (
		<HStack padding="15px">
			<Image src={logo} boxSize={"100px"} />
			<SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
		</HStack>
	);
};

export default NavBar;
