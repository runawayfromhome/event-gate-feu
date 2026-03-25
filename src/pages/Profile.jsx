import MainLayout from '../layouts/MainLayouts'
import EditIcon from '../Components/icons/EditIcon'
import { supabase } from '../utils/supabase'
import { useEffect, useState, useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import { Link } from 'react-router'


const Profile = () => {
    const { session } = useContext(SessionContext);
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select()
                .eq("id", session.user.id)
                .single()
            if (error) alert(error)
            if (data) {
                console.log("data", data)
                setProfile(data)
            }
        }
        if (session) {
            fetchProfile()
        }
    }, [session])

    return (
        <MainLayout>
            <div className='pt-10 flex justify-between'>
                <div>
                    Firstname: {profile?.firstname} <br />
                    Lastname: {profile?.lastname} <br />
                    Email: {profile?.email} <br />
                </div>
                <div>
                    <Link to="/profile-edit" className="btn btn-primary rounded-full">
                        <EditIcon className="text-sm" /> Edit Profile
                    </Link>

                </div>
            </div>
        </MainLayout>
    );
}

export default Profile;
