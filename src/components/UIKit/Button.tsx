import React from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const variants = {
  primary: 'bg-purple-500  text-purple-50',
  secondary: 'bg-white  text-purple-800',
  danger: 'bg-red-100  text-red-800',
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
} & (LinkProps | ButtonProps)

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  asLink: true
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: false
}

const LinkButton: React.FC<Props> = ({ children, ...props }) => {
  const navigate = useNavigate()
  if (props.asLink) {
    const { asLink, href, onClick, ...rest } = props

    // use router for navigation to prevent full page reload
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (href) navigate(href)
      if (onClick) onClick(e)
    }

    return (
      <a onClick={handleClick} href={href} {...rest}>
        {children}
      </a>
    )
  }
  return <button {...props}>{children}</button>
}

const Button: React.FC<Props> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <LinkButton
      className={twMerge(
        'rounded-lg px-4 py-2 text-center  font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </LinkButton>
  )
}

export default Button
