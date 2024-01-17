import React from 'react';
// import { useDispatch } from 'react-redux';
import { VStack, HStack, Button, FlatList } from 'native-base';
import { useNavigation } from '@react-navigation/native';

// redux
// import { addToCart } from '@/features/cart/cartSlice';
import { useFetchPostsQuery } from '@/features/post/postService';

// components
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductCardSkeleton from '@/components/ProductCard/ProductCardSkeleton';

// hook
import useLocalStorage from '@/hooks/useLocalStorage';

export default function Home() {
  const navigation = useNavigation();

  const [myCart, setMyCart] = useLocalStorage({ key: 'cart', initailValue: [] });

  const { data, isFetching } = useFetchPostsQuery('');

  return (
    <VStack space={15}>
      <HStack direction='row-reverse'>
        <Button onPress={() => navigation.navigate('Cart')}>My Cart</Button>
      </HStack>
      <VStack space={10}>
        {isFetching && [...new Array(4)].map((product, i) => <ProductCardSkeleton key={i} />)}

        <FlatList
          data={data ?? []}
          renderItem={({ item: product }: any) => (
            <ProductCard
              key={product?.title}
              title={product?.title}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
              onClickCart={(x: any) => setMyCart(Array.isArray(myCart) ? [...myCart, x] : [x])}
            />
          )}
        />
      </VStack>
    </VStack>
  );
}
