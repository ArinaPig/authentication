import { HeaderProps } from '../model/types'
import style from '../../../index.module.css'

export const Header: React.FC<HeaderProps> = props => {
	const { header } = { ...props }
	const { header_text } = { ...props }

  return (
    <header className={style.header}>
      <h1 className={style.h1}>{header}</h1>
      <p className={style.header_text}>{header_text}</p>
    </header>
  )
}
