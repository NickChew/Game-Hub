
import bullsEye from "../assets/Bulls-eye.svg";
import thumbsUp from "../assets/thumbs-up.svg";
import meh from "../assets/meh.svg";
import { ImageProps, Image } from '@chakra-ui/react';


interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating <3) return null;
  const emojiMap: {[key: number]: ImageProps} = {
    3: {src : meh, alt:"Meh!", boxSize: "35px"},
    4: {src : thumbsUp, alt:"Recommended", boxSize: "25px"},
    5: {src : bullsEye, alt:"Exceptional!", boxSize: "25px"}
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji