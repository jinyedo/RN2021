import React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TextInput,    
    TouchableOpacity    
} from 'react-native';
import { addBook } from './actions';
import { connect } from "react-redux";

const initialState = {
    name: '',
    author: ''
}

class Books extends React.Component {
    render() {
        return(
            <View style={styles.container}>
            <Text style={styles.title}>Books</Text>
            <ScrollView
              keyboardShouldPersistTaps='always'
              style={styles.booksContainer}
            >
              {
                books.map((book, index) => (    
                  <View style={styles.book} key={index}>    
                    <Text style={styles.name}>{book.name}</Text>    
                    <Text style={styles.author}>{book.author}</Text>    
                  </View>    
                ))    
              }
            </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    booksContainer: {
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      flex: 1
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center'
    },
    book: {
      padding: 20
    },
    name: {
      fontSize: 18
    },
    author: {
      fontSize: 14,
      color: '#999'
    }
})

const mapStateToProps = (state) => ({
    books: state.bookReducer.books
})
x
export default connect(mapStateToProps)(Books)
