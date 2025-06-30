import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function index() {

  const router = useRouter();   
  return (
    <View>
    <Text className='text-center text-2xl font-bold'>Welcome to Rent Your Mate</Text>
      <Button
        onPress={() => router.replace('./(auth)/SignUp')}
        title="Let's get started"
        color="#1e40af"
         // Tailwind's bg-blue-800 hex
      />
          
    </View>
  )
}

const styles = StyleSheet.create({})