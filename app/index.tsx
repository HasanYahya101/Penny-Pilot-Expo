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
import { Search } from '~/lib/icons/search';
import { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
    const [isBalanceHidden, setIsBalanceHidden] = useState(false);

    return (
        <>
            <SafeAreaView className='flex-1 justify-start items-center bg-black'>
                <ScrollView className='flex-1 w-full' contentContainerClassName='justify-start'>
                    {/*<View className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-[40px] z-0"></View>
                    <View className="absolute top-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-0"></View>*/}

                    {/*<View className='mt-4 w-[86vw] relative aspect-[5/3] bg-white rounded-3xl shadow-xl items-center' //  transition-colors duration-300 ease-in-out
                    >

                        <Text className='text-center absolute top-5 left-4 text-2xl text-black font-sans'>
                            Total Balance
                        </Text>

                    </View>*/}

                    <View className="p-6 flex justify-between items-start">
                        <View >
                            <Text className="text-gray-400">Good Afternoon</Text>
                            <Text className="text-2xl font-semibold mt-1">Amit Mohan</Text>
                        </View >
                        <View className="flex items-center gap-4">
                            {/* <Search className="w-6 h-6 text-gray-400" /> */}
                            <View className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="https://fastly.picsum.photos/id/1079/200/200.jpg?hmac=1ufYwVqTHDtGZw0aD-rsTU5gv74qWxm5-k7xQYkSeig"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </View >
                        </View >
                    </View >

                    <View className="px-6 mt-6">
                        <Text className="text-xl mb-4">This month</Text>
                        <View className="flex gap-4 mb-4">
                            <View className="flex-1 bg-[#FF6B6B]/20 rounded-full px-4 py-3">
                                <View className="flex items-center gap-2">
                                    <View className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                                        <ArrowDownCircle className="w-4 h-4 text-white" />
                                    </View >
                                    <View >
                                        <Text className="text-sm text-gray-400">Spending</Text>
                                        <Text className="text-lg font-semibold">$1,021</Text>
                                    </View >
                                </View >
                            </View >
                            <View className="flex-1 bg-[#4CAF50]/20 rounded-full px-4 py-3">
                                <View className="flex items-center gap-2">
                                    <View className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center">
                                        <ArrowUpCircle className="w-4 h-4 text-white" />
                                    </View >
                                    <View >
                                        <Text className="text-sm text-gray-400">Income</Text>
                                        <Text className="text-lg font-semibold">$10,000</Text>
                                    </View >
                                </View >
                            </View >
                        </View >
                        <View className="inline-block px-4 py-2 rounded-full bg-gray-800">
                            <Text className="text-sm">Balance: $8,979</Text>
                        </View >
                    </View >



                </ScrollView>
            </SafeAreaView>
        </>
    );
}
