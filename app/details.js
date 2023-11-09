import { useContext } from "react";
import { Text, Box, Image, Heading } from "@gluestack-ui/themed";
import { RestaurantContext } from "./_layout";
import { Link } from "expo-router";

export default function Details() {

  const { thisRest } = useContext(RestaurantContext)

  return (
    <Box px={8} py={60} bgColor="beige" flex={1} alignItems="center" >
      <Image
        w="$full"
        h={250}
        alt={thisRest.name}
        source={{ uri: thisRest.photo_url }} />
      <Heading size="4xl">{thisRest.name}</Heading>
      <Text>{thisRest.address}</Text>
      <Link href={thisRest.menu_url}>Menu</Link>
      <Text size="2xl">{thisRest?.rating && '⭐️'.repeat(thisRest.rating)}</Text>
    </Box>

  )
}