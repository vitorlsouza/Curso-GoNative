import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import './config/Reactotronconfig';

import Post from './components/Post';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 0,
          title: 'Aprendendo React Native',
          autor: 'Vitor L Souza',
          description: 'Lorem ipsum dolor sit amet, ponderum insolens incorrupte at vix. Eum id modus doctus. Est posse feugiat liberavisse ne. Ad nobis eligendi pertinax mea, te probo virtute sapientem vix, ancillae assentior id quo.'
        },
        {
          id: 1,
          title: 'Aprendendo React Native',
          autor: 'Vitor L Souza',
          description: 'Lorem ipsum dolor sit amet, ponderum insolens incorrupte at vix. Eum id modus doctus. Est posse feugiat liberavisse ne. Ad nobis eligendi pertinax mea, te probo virtute sapientem vix, ancillae assentior id quo.'
        },
        {
          id: 2,
          title: 'Aprendendo React Native',
          autor: 'Vitor L Souza',
          description: 'Lorem ipsum dolor sit amet, ponderum insolens incorrupte at vix. Eum id modus doctus. Est posse feugiat liberavisse ne. Ad nobis eligendi pertinax mea, te probo virtute sapientem vix, ancillae assentior id quo.'
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView>
          <View>
            {this.state.posts.map(post => <Post key={post.id} post={post} />)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#EE7777',
  },
  cabecalho: {
    height: 70,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 1
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
