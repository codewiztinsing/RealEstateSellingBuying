import {Button,Progress,Gravatar,Carousel, H4,H5,ThemeProvider,Indicator,Image} from 'nachos-ui';
import { View } from 'react-native/types';


const InteriorImages = () => {
    return (
      <View>
        <H4>Example:</H4>
        <View style={{ marginVertical: 15 }}>
          <Carousel
            images={[
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300',
              'https://picsum.photos/200/300'
              
              
            ]}
          />
        </View>
      </View>
    )
  }

  export default InteriorImages;