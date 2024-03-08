import type {Meta, StoryObj} from '@storybook/react'
import {View} from 'react-native'

import {Button, ButtonProps} from './index'

const meta = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Hello world',
  },
  decorators: [
    Story => (
      <View style={{padding: 16}}>
        <Story />
      </View>
    ),
  ],
} as Meta<ButtonProps>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
