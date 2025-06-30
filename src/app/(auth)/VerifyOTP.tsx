import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function VerifyOTP() {

  const router = useRouter()

  const handleVerifyOTPPress =() => {
      
    router.push('../(tabs)')
     
  }
  return (
    <View>
      <Text>VerifyOTP</Text>
      <Button
        onPress={() => handleVerifyOTPPress()}
        title="Verify OTP"
        color="#1e40af" // Tailwind's bg-blue-800 hex
        />
    </View>
  )
}

const styles = StyleSheet.create({})