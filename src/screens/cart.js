import React from 'react';
import {VStack, HStack, Heading} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

// components
import ProductCard from '../components/ProductCard/ProductCard';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart.cart);

  return (
    <VStack space={3}>
      <Heading>My Cart</Heading>

      <VStack>
        {cart.map(prod => (
          <ProductCard />
        ))}
      </VStack>
    </VStack>
  );
}
