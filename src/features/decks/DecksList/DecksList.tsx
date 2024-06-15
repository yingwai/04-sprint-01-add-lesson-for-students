import { useEffect } from 'react'
import s from './DecksList.module.css'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'
import { getDecksTC } from '../decks-thunks'

export const DecksList = () => {
	const decks = useAppSelector(selectDecks);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getDecksTC());
	}, [dispatch])

	return (
		<ul className={s.list}>
			{decks.items.map(el => {
				return <DeckItem deck={el} key={el.id} />
			})}
		</ul>
	)
}
