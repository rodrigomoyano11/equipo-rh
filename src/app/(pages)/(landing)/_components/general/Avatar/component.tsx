import Image from 'next/image'
import './styles.css'

export type AvatarProps = {
  src: string
  alt: string
  className?: string
}

export const Avatar = ({ src, alt, className = '' }: AvatarProps) => (
  <div className={`avatar-component ${className}`}>
    <Image alt={alt} className="image" fill={true} src={src} />
  </div>
)

export default Avatar
