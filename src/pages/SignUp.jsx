import MainLayout from "../layouts/MainLayouts";
import Input from "../Components/form/input";
import Card from "../Components/Card";
import SendIcon from "../Components/icons/SendIcon";
import { supabase } from "../utils/supabase";


const SignUp = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const signupForm = {
			firstname: formData.get("firstname"),
			lastname: formData.get("lastname"),
			email: formData.get("email"),
			password: formData.get("password"),
		};

		const { data, error } = await supabase.auth.signUp({
			email: signupForm.email,
			password: signupForm.password,
		});

		if (error) alert(error);

		if (data) console.log(data);
	};

	return (
		<MainLayout>
			<div className="min-h-screen flex flex-col">
				<div className="flex justify-center items-center flex-1">
					<Card>
						<h1 className="text-xl font-bold">Sign Up</h1>
						<form onSubmit={handleSubmit}>
							<Input
								name="firstname"
								placeholder="Enter your First Name"
								label="Firstname"
								type="text"
							/>
							<Input
								name="lastname"
								placeholder="Enter your Last Name"
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
							<button className="btn btn-primary rounded-full mt-5">
								<SendIcon className="text-sm" /> Submit
							</button>
						</form>
					</Card>
				</div>
			</div>
		</MainLayout>
	);
};

export default SignUp;