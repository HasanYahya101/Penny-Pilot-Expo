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
import { ChevronDown } from '~/lib/icons/Chevron-Down';
import { ArrowDown } from '~/lib/icons/ArrowDown';
import { ArrowUp } from '~/lib/icons/ArrowUp';
import { Plus } from '~/lib/icons/Plus';

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

                    <View className="p-6 flex flex-row justify-between items-start mt-3">
                        <View className="flex flex-col">
                            <Text className="text-gray-400 truncate">Good Afternoon</Text>
                            <Text className="text-2xl font-semibold mt-1 truncate">Amit Mohan</Text>
                        </View >
                        <View className="flex items-center gap-4">
                            <TouchableOpacity className="w-16 h-16 mt-0 rounded-full overflow-hidden">
                                <Avatar alt="Profile"
                                    className="w-16 h-16 mt-0 rounded-full overflow-hidden"
                                >
                                    <AvatarImage
                                        source={{ uri: "https://fastly.picsum.photos/id/1079/200/200.jpg?hmac=1ufYwVqTHDtGZw0aD-rsTU5gv74qWxm5-k7xQYkSeig" }}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                        style={{ resizeMode: 'cover' }}
                                    />
                                    <AvatarFallback className='w-16 h-16 mt-0 rounded-full overflow-hidden'>
                                        <Text className="text-gray-200 text-xl">AM</Text>
                                    </AvatarFallback>

                                </Avatar>
                            </TouchableOpacity >
                        </View >
                    </View >
                    <View className='mt-8 px-6 flex flex-row justify-between items-start'>
                        <TouchableOpacity className='flex flex-row gap-1 rounded-lg'>
                            <Text className="text-md truncate font-semibold mb-4">This month</Text>
                            <ChevronDown className='text-white mt-[0.2rem]' size={16} strokeWidth={2} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Search className="text-white" size={20} strokeWidth={2} />
                        </TouchableOpacity>
                    </View>

                    <View className="px-6">

                        <View className="flex gap-4 mb-4 flex-row">
                            <View className="flex-1 bg-[#FF6B6B]/30 rounded-full px-4 py-3">
                                <View className="flex flex-row items-center gap-2">
                                    <View className="w-12 h-12 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                                        <ArrowDown className="w-4 h-4 text-white" />
                                    </View >
                                    <View >
                                        <Text className="text-sm text-gray-400">Spending</Text>
                                        <Text className="text-lg font-semibold">$1,021</Text>
                                    </View >
                                </View >
                            </View >
                            <View className="flex-1 bg-[#4CAF50]/30 rounded-full px-4 py-3">
                                <View className="flex flex-row items-center gap-2">
                                    <View className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center">
                                        <ArrowUp className="w-4 h-4 text-white" />
                                    </View >
                                    <View >
                                        <Text className="text-sm text-gray-400">Income</Text>
                                        <Text className="text-lg font-semibold">$10,000</Text>
                                    </View >
                                </View >
                            </View >
                        </View >
                        <View className='flex px-auto items-center justify-center'>
                            <View className="inline-block items-center justify-center px-4 py-2 rounded-full bg-gray-800 mx-auto">
                                <Text className="text-sm truncate">Balance: $8,979</Text>
                            </View>
                        </View>
                    </View >



                </ScrollView>
                {/* Hovering Icon */}
                < TouchableOpacity className='z-30 absolute bottom-8 right-8 rounded-full bg-blue-400 dark:bg-white h-[68px] w-[68px] flex items-center justify-center'
                >
                    <Plus className='text-white dark:text-black' size={26} />
                </TouchableOpacity >
            </SafeAreaView >
        </>
    );
}
