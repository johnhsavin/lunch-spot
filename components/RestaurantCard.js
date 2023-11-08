import { Box, Image, Heading, Text } from "@gluestack-ui/themed"

export default function RestaurantCard({ restaurant }) {
  return (
<Box>
  <Heading>{restaurant.name}</Heading>
  <Text>{restaurant.address}</Text>
</Box>
  )
}