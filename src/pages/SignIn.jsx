import MainLayout from "../layouts/MainLayouts";
import Input from "../Components/form/input";
import Card from "../Components/Card";
import SendIcon from "../Components/icons/SendIcon";
import { supabase } from "../utils/supabase";
import { useContext, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate } from "react-router";
const SignIn = () => {
    const { session, profile } = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (profile?.role === "user") {
            navigate("/");
        } else if (profile?.role === "admin") {
            navigate("/manage-events");
        }

    }, [profile, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const signInForm = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        console.log("signInForm", signInForm);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: signInForm.email,
            password: signInForm.password,
        });

        if (error) {
            console.log("sign in error", error);
            return;
        }

        console.log("sign in data", data);
    };

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col">
                <div className="flex justify-center items-center flex-1">
                    <Card>
                        <h1 className="text-xl font-bold">Sign In</h1>
                        <form onSubmit={handleSubmit}>
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

export default SignIn;
