import { Header } from '../../header/ui/Header'
import { Window } from '../../window/ui/Window'
import style from '../../../index.module.css'

export const Main = () => {
	const header = 'Contact Us'
	const header_text =
		"Get in touch with us! Whether you have questions, feedback, or just want to say hello, we're for you."

	const form_header = 'Send us a Massage'
  const contact_label = 'Preferred contact method of communication'

	return (
		<div className={style.main}>
			<div className={style.container}>
				<Header header={header} header_text={header_text} />
				<Window form_header={form_header} contact_label={contact_label}/>
			</div>
		</div>
	)
}
