import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    // flexDirection: 'row',
    width: '100%',
    borderColor: '#285032',
    borderRadius: 10,
    // marginBottom: 10,
    margin:40
  },

  rightContainer: {
    // flex: 3,
    backgroundColor: '#fff',
    marginLeft: 4,
  },
  title: {
    fontSize: 18,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    marginLeft: 4,
  },
  image: {
    // flex: 2,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
    height: 100,
    width: 150,
    resizeMode: 'cover',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 2,
  },
});

export default styles;
