import MainLayout from '../layouts/MainLayouts'
import EditIcon from '../Components/icons/EditIcon'
import { supabase } from '../utils/supabase'
import { useEffect, useState, useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import { Link } from 'react-router'

const HomePage = () => {


	return <MainLayout>This is the Home page</MainLayout>;
};

export default HomePage;