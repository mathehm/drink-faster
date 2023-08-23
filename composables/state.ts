import { type DrinkData } from 'types'

export const useFavorite = () => useState<DrinkData>('favorite', () => ({ drinks: [] }))
