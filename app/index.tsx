import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Link, Stack } from 'expo-router';

export default function Screen() {
    const [progress, setProgress] = React.useState(78);

    function updateProgressValue() {
        setProgress(Math.floor(Math.random() * 100));
    }
    return (
        <>
            <Stack.Screen
                options={{
                    title: '',
                }} />
            <View className='flex-1 justify-center items-center gap-5 p-6 bg-black'>

            </View>
        </>
    );
}
