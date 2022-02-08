import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />
Template.parameters = {
  docs: { source: { code: 'some arbitrary string' } }
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  backgroundColor: 'blue.500'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Button'
}
