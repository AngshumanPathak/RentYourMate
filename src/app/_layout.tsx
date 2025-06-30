import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import '../../global.css'

export default function _layout() {
  return (
    <SafeAreaView className=' h-full'>
        <Slot/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})