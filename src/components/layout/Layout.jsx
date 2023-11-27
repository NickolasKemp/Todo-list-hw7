import React from "react";


const Layout = ({ children }) => {
	return (
		<div className="py-5 bg-blue-400 h-screen overflow-auto">
			{children}
		</div>
	)
}

export default Layout