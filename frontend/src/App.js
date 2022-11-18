import React from "react"; //, useState
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar/Navbar";
//import IndexScroll from "./components/layouts/Index_Scroll/IndexScroll";
import { Contact, Favourites, Home, Stock, Login } from "./pages";
import { Container } from "@mui/material";
import SignUp from "./components/layouts/SignUp/SignUp";
import { AuthProvider } from "./firebase/AuthContext";
import PrivateRoute from "./components/layouts/PrivateRouter.js/PrivateRoute";
import PrivateAdminRoute from "./components/layouts/PrivateRouter.js/PrivateAdminRoute";
import NotUser from "./components/layouts/PrivateRouter.js/NotUser";
import { AddStock, RemoveStock, AddNews, RemoveNews } from "./components/layouts/admin";

function App() {
	//const { currentUser } = useAuth();

	return (
		<div className='App'>
			<Router>
				<AuthProvider>
					<Navbar />
					{/* <IndexScroll /> */}
					<div className='main-body'>
						<Container>
							{/* change to container */}
							<div className='navigation'>
								<Routes>
									<Route exact path='/' element={<Home />} />
									<Route path='/favourites' element={<Favourites />} />
									<Route path='/contact' element={<Contact />} />
									<Route path='/stock' element={<Stock />} />
									<Route
										path='/login'
										element={
											<PrivateRoute>
												<Login />
											</PrivateRoute>
										}
									/>
									<Route
										path='/signup'
										element={
											<PrivateRoute>
												<SignUp />
											</PrivateRoute>
										}
									/>
									<Route
										path='/addstock'
										element={
											<NotUser>
												<PrivateAdminRoute>
													<AddStock />
												</PrivateAdminRoute>
											</NotUser>
										}
									/>
									<Route
										path='/removestock'
										element={
											<NotUser>
												<PrivateAdminRoute>
													<RemoveStock />
												</PrivateAdminRoute>
											</NotUser>
										}
									/>
									<Route
										path='/addnews'
										element={
											<NotUser>
												<PrivateAdminRoute>
													<AddNews />
												</PrivateAdminRoute>
											</NotUser>
										}
									/>
									<Route
										path='/removenews'
										element={
											<NotUser>
												<PrivateAdminRoute>
													<RemoveNews />
												</PrivateAdminRoute>
											</NotUser>
										}
									/>
									{/* <Route path='/*' element={<NotFound />} /> */}
								</Routes>
							</div>
						</Container>
					</div>
					{/* <Footer /> */}
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
