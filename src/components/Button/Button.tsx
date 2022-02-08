import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'md',
  backgroundColor = 'red.500',
  label
}: ButtonProps) => {
  return (
    <ChakraButton
      variant={primary ? 'solid' : 'outline'}
      bg={backgroundColor}
      size={size}
    >
      {label}
    </ChakraButton>
  )
}
