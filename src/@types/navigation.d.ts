export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      user: {
        githubUser: {
          avatar_url: string;
          name: string;
          login: string;
          bio: string;
          company: string;
          blog: string
        }
      };
      userRepositories: {
        repositories: {
          id: number;
          name: string;
          html_url: string;
          stargazers_count: number;
        }[]
      };
    }
  }
}
