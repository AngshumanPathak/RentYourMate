import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function _layout() {
  return (
    <SafeAreaView>
      <Slot/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})