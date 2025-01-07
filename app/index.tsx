import * as React from 'react';
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

export default function Screen() {
    const [isBalanceHidden, setIsBalanceHidden] = useState(false);

    return (
        <>
            <View className='flex-1 justify-start items-center bg-black'>
                <ScrollView className='flex-1 w-full' contentContainerClassName='justify-start items-center'>
                    <View className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-[40px] z-0"></View>
                    <View className="absolute top-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-0"></View>

                    <View style={{ backgroundColor: '#4F46E5', padding: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Menu color="white" size={24} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>My Finances</Text>
                            <TouchableOpacity>
                                <Bell color="white" size={24} />
                            </TouchableOpacity>
                        </View>

                        {/* User Info */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image
                                source={{ uri: 'https://placekitten.com/100/100' }}
                                style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: 'white' }}
                            />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: 'white', fontSize: 16 }}>Welcome back,</Text>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
                            </View>
                        </View>
                    </View>

                    {/* Balance Card */}
                    <View style={{ margin: 20, padding: 20, backgroundColor: 'white', borderRadius: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#333' }}>Total Balance</Text>
                            <TouchableOpacity onPress={() => setIsBalanceHidden(!isBalanceHidden)}>
                                {isBalanceHidden ? <Eye size={24} color="#666" /> : <EyeOff size={24} color="#666" />}
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#000', marginVertical: 10 }}>
                            {isBalanceHidden ? '••••••' : '$8,250.00'}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ color: '#4CAF50', fontWeight: '600' }}>+$2,500.00</Text>
                            <Text style={{ color: '#F44336', fontWeight: '600' }}>-$1,250.00</Text>
                        </View>
                        <Progress value={33} />
                    </View>

                    {/* Quick Actions */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                        <Button style={{ backgroundColor: '#4CAF50', padding: 15, borderRadius: 10, alignItems: 'center', flexDirection: 'row' }}>
                            <ArrowUpCircle size={20} color="white" />
                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>Income</Text>
                        </Button>
                        <Button style={{ backgroundColor: '#F44336', padding: 15, borderRadius: 10, alignItems: 'center', flexDirection: 'row' }}>
                            <ArrowDownCircle size={20} color="white" />
                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>Expense</Text>
                        </Button>
                    </View>

                </ScrollView>
            </View>
        </>
    );
}
