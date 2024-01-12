import React from 'react';
import {
  Text,
  Box,
  AspectRatio,
  Stack,
  HStack,
  Heading,
  Image,
  Center,
  Button,
} from 'native-base';

export default function ProductCard({
  title = 'test product',
  price = 13.5,
  description = 'lorem ipsum set',
  image = 'https://i.pravatar.cc',
  category = 'electronic',
  onClickCart = () => {},
}) {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: image,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5">
            {`USD ${price}`}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {category}
            </Text>
          </Stack>
          <Text fontWeight="400">{description}</Text>
          <Button
            onPress={() =>
              onClickCart({title, price, description, image, category})
            }>
            Add to cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
