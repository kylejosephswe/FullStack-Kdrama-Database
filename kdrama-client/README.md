1. To run this web app, you need to first start the database by running the following in the terminal:
brew services start mongodb-community@6.0
2. After running that command you need to go to the root directory (kdrama-client) and run this command:
npm start
3. And at the very end do ctrl + c to end the frontend and server.
4. And then do the following to stop the database server:
brew services stop mongodb-community@6.0