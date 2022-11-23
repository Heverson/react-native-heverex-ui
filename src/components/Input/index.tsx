import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function InputText({...rest}) {
  return (
    <TextInput
        style={styles.container}
        {...rest}
    />
  )
}
