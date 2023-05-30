import NextAuth from "next-auth/next";
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
//import GithubProvider from "next-auth/providers/github";


const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
  // secret: process.env.JWT_SECRET
};

export default NextAuth(authOptions);
