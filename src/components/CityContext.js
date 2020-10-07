import React, {useState} from 'react'

const CityContext = React.createContext([{}, () => {}])

const CityProvider = (props) => {
	const [cityContext, setCityContext] = useState('')

	return (
		<CityContext.Provider value={[cityContext, setCityContext]}>
			{props.children}
		</CityContext.Provider>
	)
}

export {CityContext, CityProvider}