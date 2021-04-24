/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import PropTypes from "prop-types";

const LogInForm = ({ errorMessage, onSubmit }) => (
	<>
		<style jsx>{`
			form,
			label {
				display: flex;
				flex-flow: column;
				justify-content: center;
			}
			label > span {
				font-weight: 600;
			}
			input {
				padding: 8px;
				margin: 0.3rem 0 1rem;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
			.error {
				color: brown;
				margin: 1rem 0 0;
			}
		`}</style>
		<form onSubmit={onSubmit}>
			<label>
				<span>Username</span>
				<input type="text" name="username" required />
				<span>Password</span>
				<input type="password" name="password" required />
			</label>

			<button type="submit">Login</button>

			{errorMessage && <p className="error">{errorMessage}</p>}
		</form>
	</>
);

export default LogInForm;

LogInForm.propTypes = {
	errorMessage: PropTypes.string,
	onSubmit: PropTypes.func,
};
