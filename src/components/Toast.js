import React, {useEffect} from 'react'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Toast({error, resetError}) {
	const customId = error

	useEffect(() => {
		if (error) {
			toast(`${error}`, {
				toastId: customId,
				position: 'bottom-center',
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				fontSize: 10,
				onClose: () => {resetError('')}
			})
		}
	}, [error])

	return (
		<div>
			{(error) &&
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
			/>}
		</div >
	)
}