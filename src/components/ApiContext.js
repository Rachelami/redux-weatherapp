import React, {useState} from 'react'

const ApiContext = React.createContext([{}, () => {}])

const ApiProvider = (props) => {
	const [apiContext, setApiContext] = useState('')

	return (
		<ApiContext.Provider value={[apiContext, setApiContext]}>
			{props.children}
		</ApiContext.Provider>
	)
}

export {ApiContext, ApiProvider}