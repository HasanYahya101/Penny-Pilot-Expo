import { Stack, useNavigation } from 'expo-router';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';
import { Text as TextPrimitive } from '~/components/ui/text';
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, AnimatedStyle, withTiming, withSequence, withRepeat } from 'react-native-reanimated';
import { Button } from '~/components/ui/button';

export default function NotFoundScreen() {

    const opacity = useSharedValue(0);
    const translateY = useSharedValue(-20);

    const fadeInStyle = useAnimatedStyle(() => ({
        opacity: withTiming(opacity.value, { duration: 500 }),
        transform: [{ translateY: withTiming(translateY.value, { duration: 500 }) }],
    }));

    const separatorStyle = useAnimatedStyle(() => ({
        transform: [{ scaleX: withTiming(opacity.value, { duration: 500 }) }],
    }));

    React.useEffect(() => {
        opacity.value = 1;
        translateY.value = 0;
    }, []);

    const navigation = useNavigation();

    const goBack = () => {
        if (Platform.OS === 'web') {
            window.history.back();
            return;
        }
        navigation.goBack();
    }

    return (
        <>
            <Stack.Screen options={{
                title: 'Oops!', headerTitleStyle: {
                    //fontSize: 18,
                    //fontWeight: 'bold',
                },
            }} />
            <View className="flex-1 dark:bg-black bg-white justify-center items-center px-4">
                <View className="w-full max-w-md">
                    <Animated.View style={fadeInStyle} className="items-center">
                        <Text className="text-8xl font-bold dark:text-white mb-2 text-black">404</Text>
                        <Text className="text-xl dark:text-gray-300 text-gray-700 mb-6">Page not found</Text>
                    </Animated.View>

                    <Animated.View style={fadeInStyle} className="space-y-4">
                        <Text className="dark:text-gray-400 text-gray-600 text-center px-12">
                            The page you're looking for doesn't exist or has been moved. Please try again.
                        </Text>
                    </Animated.View>
                    <Animated.View style={fadeInStyle} className="space-y-4">
                        <Button onPress={() => goBack()} className="mt-12 w-[80vw] max-w-[18rem] self-center bg-black dark:bg-white">

                            <TextPrimitive className='font-bold text-white dark:text-black'>
                                Back
                            </TextPrimitive>
                        </Button>
                    </Animated.View>

                </View>
            </View>
        </>
    );
}