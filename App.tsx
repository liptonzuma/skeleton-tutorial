import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Skeleton } from 'moti/skeleton';
import Row from './shared/Row';
import Avatar from './shared/Avatar';
import Column from './shared/Column';
import Button from './shared/Button';

const { width } = Dimensions.get('window');

export default function App() {
  const [loading, setLoading] = useState(true);
  const colorMode: 'light' | 'dark' = 'light';

  const [key, setKey] = useState({
    avatar: 'avatar',
    title: 'title',
    ratings: 'ratings',
    followers: 'followers',
    desc: 'descritption',
  });

  const generateRandomKey = () => {
    return (Math.PI * Math.random()).toString();
  };

  function handleLoad() {
    if (!loading) {
      setLoading(true);
      const newKey = generateRandomKey();
      const updatedKeys = {
        avatar: 'avatar' + newKey,
        title: 'title' + newKey,
        ratings: 'ratings' + newKey,
        followers: 'followers' + newKey,
        desc: 'description' + newKey,
      };
      setKey(updatedKeys);
      setTimeout(() => setLoading(false), 1200);
      return;
    }

    setLoading(false);
  }

  // It did not animate when I pressed load
  // Let's fix it.
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Row style={{ columnGap: 12 }}>
          {/* Time to use the skeleton */}
          <Skeleton
            colorMode={colorMode}
            width={50}
            height={50}
            radius={'round'}
            key={key.avatar}
          >
            {loading ? null : <Avatar />}
          </Skeleton>
          {/* lets do same for the rest */}
          <Column>
            <Skeleton
              key={key.title}
              colorMode={colorMode}
              width={'90%'}
              height={20}
            >
              {loading ? null : <Text style={styles.title}>React Native</Text>}
            </Skeleton>

            <Row style={{ columnGap: 12, marginTop: 4 }}>
              <Skeleton
                key={key.ratings}
                width={width / 3.2}
                height={20}
                colorMode={colorMode}
              >
                {loading ? null : (
                  <Row>
                    <Text style={styles.key}>Ratings</Text>
                    <Text style={styles.value}>10/10</Text>
                  </Row>
                )}
              </Skeleton>

              <Skeleton
                key={key.followers}
                width={width / 3.3}
                height={20}
                colorMode={colorMode}
              >
                {loading ? null : (
                  <Row>
                    <Text style={styles.key}>Followers</Text>
                    <Text style={styles.value}>500M</Text>
                  </Row>
                )}
              </Skeleton>
            </Row>
          </Column>
        </Row>

        <Column style={{ marginTop: 8 }}>
          <Skeleton
            key={key.desc}
            width={'100%'}
            height={155}
            colorMode={colorMode}
          >
            {loading ? null : (
              <Text style={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                mollitia ipsa modi aspernatur quaerat corrupti ducimus, facilis
                iure asperiores, fuga itaque! Quidem, eius harum. Ad voluptates
                harum et quis eaque perferendis impedit quasi id eos! Dolore,
                temporibus veritatis.
              </Text>
            )}
          </Skeleton>
        </Column>
      </View>

      <Button title={loading ? 'Stop Loading' : 'Load'} onPress={handleLoad} />
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    fontStyle: 'italic',
    opacity: 0.8,
    lineHeight: 22,
  },
  value: {
    opacity: 0.7,
  },
  key: {
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    width: width - 40,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 15,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
