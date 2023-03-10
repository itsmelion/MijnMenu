import { ScrollView } from 'react-native';

import { Feed as FeedService } from 'services';

import { Card, Text } from 'components';

import { HelloHeader } from './components/HelloHeader';

export const Feed = () => {
  const { data } = FeedService.useFeed();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <HelloHeader />

      {data?.map((item) => (
        <Card key={item.id}>
          <Text>{item.type}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};
