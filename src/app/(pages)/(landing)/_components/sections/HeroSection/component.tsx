import { Button } from '@/app/_components/ui/Button'
import { LinkProps } from '@/app/_components/ui/Link'
import './styles.css'

export type HeroSectionProps = {
  variant?: 'horizontal' | 'vertical'
  overline?: string
  title: string
  description: string
  image: string
  button?: {
    text: string
    href?: LinkProps['href']
    onClick?: () => void
  }
}

export const HeroSection = (props: HeroSectionProps) => {
  const { overline, title, description, image, button, variant = 'horizontal' } = props

  return (
    <section className="hero-section-component" style={{ '--background-image': `url(${image})` }}>
      <div className={`caption ${variant}`}>
        {overline && <span className="overline">{overline}</span>}

        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>

        {button && (
          <Button
            className="button"
            color="white"
            href={button.href}
            variant="outline"
            onPress={button.onClick}>
            {button.text}
          </Button>
        )}
      </div>
    </section>
  )
}

export default HeroSection
