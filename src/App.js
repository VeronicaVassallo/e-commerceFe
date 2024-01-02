import React from "react";
//pages
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

//React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />

					<Route path="*" element={ErrorPage} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
