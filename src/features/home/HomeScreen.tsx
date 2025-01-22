import {FlatList, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import CustomSafeAreaView from '../../components/ui/CustomSafeAreaView';
import withPlayer from '../../components/player/Player';
import {usePlayerStore} from '../../state/usePlayerStore';
import CustomHeader from '../../components/ui/CustomHeader';
import TrackItem from '../../components/tracks/TrackItem';

const HomeScreen: FC = () => {
  const {allTracks} = usePlayerStore();
  // console.log(allTracks);
  const renderMusicTrack = ({item}: any) => {
    return <TrackItem item={item} />;
  };

  return (
    <CustomSafeAreaView>
      <CustomHeader title="Your Tracks" />

      <FlatList
        data={allTracks}
        renderItem={renderMusicTrack}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 20,
  },
});

export default withPlayer(HomeScreen);
