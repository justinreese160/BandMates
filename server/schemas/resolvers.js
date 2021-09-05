const { AuthenticationError } = require('apollo-server-express');
const { User, Post,Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
  
    posts: async () => {
      return Post.find({});
    },

      users: async () => {
      return await User.find().select('-__v -password').populate('posts');
    }
  },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        console.log(user)
        console.log(token)
        return { token, user };
      },
    
      addPost: async (parent, {user_id, author, instrument, description, genre, title }) => {
        return await Post.create({user_id, author, instrument, description, genre, title });
      },
     
      removePost: async (parent, { postId }) => {
        return Post.findOneAndDelete({ _id: postId });
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      }
    }
  }


module.exports = resolvers;
