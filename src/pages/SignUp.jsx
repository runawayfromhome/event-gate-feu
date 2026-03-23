import MainLayout from "../layouts/MainLayouts";
import Input from "../Components/form/input";
import Card from "../Components/Card";

const SignUp = () => {
	return (
		<MainLayout>
			<div className="flex justify-center">
				<Card>
					<h1>Sign up</h1>
					<Input
						name="firstname"
						placeholder="Enter your First name"
						label="Firstname"
						type="text"
					/>

					<Input
						name="lastname"
						placeholder="Enter your Last name"
						label="Lastname"
						type="text"
					/>
					<Input
						name="email"
						placeholder="Enter your Email"
						label="Email"
						type="email"
					/>
					<Input
						name="password"
						placeholder="Enter your Password"
						label="Password"
						type="password"
					/>
					<button className="btn btn-primary">Submit</button>
				</Card>
			</div>
		</MainLayout>
	);
};

export default SignUp;