import MainLayout from '../layouts/MainLayouts'
import { supabase } from '../utils/supabase'
import { useEffect, useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'


const Profile = () => {
    const session = useContext(SessionContext)

    useEffect(() => {
        console.log("session", session);
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select()
                .eq('id', session.user.id)
                .single()
            if (error) alert(error);
            if (data) console.log("data", data);


        }

        if (session) { fetchProfile() }

    }, [session]);

    return (
        <MainLayout> <h1>Profile</h1> </MainLayout>
    );
}

export default Profile;
