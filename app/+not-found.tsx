import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import { OctagonX } from '~/lib/icons/Octagon-X';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
        <OctagonX className='w-[40vw] h-[40vw] text-foreground/70' />
        <Text>This screen doesn't exist.</Text>

        <Link href='/'>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
