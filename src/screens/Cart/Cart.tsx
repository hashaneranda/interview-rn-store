import React from 'react';
import { VStack, FlatList, Heading, Text, Container, Center } from 'native-base';

// components
import ProductCard from '@/components/ProductCard/ProductCard';

// hook
import useLocalStorage from '@/hooks/useLocalStorage';

// utils
import { calculateTotalPrice, removeItemFromCart } from './utils/cartHelper';

export default function Cart() {
  const [myCart, setMyCart] = useLocalStorage({ key: 'cart', initailValue: [] });

  return (
    <VStack space={3}>
      <Heading>My Cart</Heading>

      <VStack space={5}>
        <FlatList
          maxHeight='85%'
          data={myCart ?? []}
          renderItem={({ item: product }: any) => (
            <ProductCard
              key={product?.title}
              title={product?.title}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
              onRemoveCart={() => setMyCart(removeItemFromCart(Array.isArray(myCart) ? myCart : [], product))}
            />
          )}
        />
        <Center>
          <Container>
            <VStack flexDirection='row-reverse'>
              <Text fontSize='lg'>Total : USD {calculateTotalPrice(myCart ?? [])}</Text>
            </VStack>
          </Container>
        </Center>
      </VStack>
    </VStack>
  );
}
