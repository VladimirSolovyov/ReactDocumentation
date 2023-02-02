import React from 'react'

const MailBox = ({ unreadMsg }) => {
	return (
		<div>
			<h3>Hello!</h3>
			{unreadMsg.length > 0 && (
				<span>
					You have <b>{unreadMsg.length}</b> unread message.
				</span>
			)}
		</div>
	)
}

export default MailBox
