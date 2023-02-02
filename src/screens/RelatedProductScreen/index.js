import { View, Text } from 'react-native'
import React from 'react'
import HorizontalFlatList from '../../components/HorizontalFlatList'
import { useRoute } from '@react-navigation/native'

export default function RelatedProductScreen() {
    const route = useRoute();
    const {relatedListings} = route.params;
  return (
    <View>
     
    <View>
    <HorizontalFlatList
      products={relatedListings}
      SECTIONS={[
        {
          title: 'Related house',
          horizontal: true,
          data: [
            {
              key: '1',
              text: 'Item text 1',
            },
            {
              key: '2',
              text: 'Item text 2',
            },

            {
              key: '3',
              text: 'Item text 3',
            },
            {
              key: '4',
              text: 'Item text 4',
            },
            {
              key: '5',
              text: 'Item text 5',
            },
          ],
        },
      ]}
    />
  </View>
    </View>
  )
}

