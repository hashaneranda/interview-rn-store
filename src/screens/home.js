import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {VStack, HStack, ScrollView, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

// redux
import {addToCart} from '../store/cartSlice';

// components
import ProductCard from '../components/ProductCard/ProductCard';

// services
import {getAllProducts} from '../services/productsService';

const products = [...new Array(3)];

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(res => setAllProducts(res));
  }, []);

  return (
    <ScrollView>
      <VStack space={15}>
        <HStack direction="row-reverse">
          <Button onPress={() => navigation.navigate('Cart')}>My Cart</Button>
        </HStack>
        <VStack space={10}>
          {allProducts.map((product, i) => (
            <ProductCard
              key={i}
              title={product?.title}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
              onClickCart={x => addToCart(x)}
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
}
