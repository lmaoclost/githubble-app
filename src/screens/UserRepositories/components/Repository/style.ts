// style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  repositoryContainer: {
    backgroundColor: '#1C1C1E',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  repoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repoTextContainer: {
    flex: 1,
  },
  repoName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoDescription: {
    color: '#CCCCCC',
    fontSize: 14,
    marginTop: 4,
  },
  stargazersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stargazersCount: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 4,
  },
  repoButton: {
    backgroundColor: '#31CF67',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
