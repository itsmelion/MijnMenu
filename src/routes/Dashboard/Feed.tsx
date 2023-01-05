import { ScrollView } from 'react-native';

import { HelloHeader } from './components/HelloHeader';

export const Feed = () => (
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <HelloHeader />
  </ScrollView>
);
