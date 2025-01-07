import { TouchableOpacity, View } from 'react-native';
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
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { ArrowUpCircle } from '~/lib/icons/ArrowUpCircle';
import { ArrowDownCircle } from '~/lib/icons/ArrowDownCircle';
import { Eye } from '~/lib/icons/eye';
import { EyeOff } from '~/lib/icons/EyeOff';
import { Bell } from '~/lib/icons/bell';
import { Menu } from '~/lib/icons/menu';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
    const [isBalanceHidden, setIsBalanceHidden] = useState(false);

    return (
        <>
            <SafeAreaView className='flex-1 justify-start items-center bg-black'>
                <ScrollView className='flex-1 w-full' contentContainerClassName='justify-start items-center'>
                    {/*<View className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-[40px] z-0"></View>
                    <View className="absolute top-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-0"></View>*/}

                    <View className='mt-4 w-[86vw] relative aspect-[5/3] bg-white rounded-3xl shadow-xl items-center' //  transition-colors duration-300 ease-in-out
                    >

                        <Text className='text-center absolute top-5 left-4 text-2xl text-black font-sans'>
                            Total Balance
                        </Text>

                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    );
}
