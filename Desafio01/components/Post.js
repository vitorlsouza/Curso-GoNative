import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Post = ({post}) => (
	<View style={styles.postContainer}>
		<Text style={styles.postTitle}>{post.title}</Text>
			<Text style={styles.postAutor}>{post.autor}</Text>
			<View style={styles.linha}>
			</View>
		<Text style={styles.postDescription}>{post.description}</Text>
	</View>
)

const styles = StyleSheet.create({
	postContainer: {
		flex:1,
		backgroundColor: '#FFFFFF',
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 20,
		shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2},
		shadowOpacity: 1,
		borderRadius: 5
	},
	postTitle: {
		color: '#333333',
		fontSize: 16,
		fontWeight: 'bold',
	},
	postAutor: {
		color: '#999999',
		borderBottomWidth: 1,
	},
	postDescription: {
		color: '#666666'
	},
	linha: {
		borderBottomWidth: 1,
		borderColor: '#EEEEEE',
		marginVertical: 10,
	}
})

export default Post;