import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function TopNavBar() {
  return (
    <SafeAreaView className='h-20 items-start justify-between bg-slate-950'>
      <Text className='text-white text-[25px] font-poppins-bold ml-10'>Rent Your mate</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})