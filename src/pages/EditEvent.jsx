import React from 'react'
import MainLayout from '../layouts/MainLayouts'
import { supabase } from '../utils/supabase'
import { useEffect, useState } from 'react'
import Input from '../Components/form/input'
import { useParams } from 'react-router'
import EventForm from '../Components/EventForm'

const EditEvent = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const { data: eventData, error: eventError } = await supabase
                .from("events")
                .select()
                .eq("id", eventId)
                .single();
            if (eventError) alert(eventError);
            if (eventData) setEvent(eventData);
        };

        fetchEvent();
    }, [eventId]);
    return (
        <MainLayout>
            <EventForm eventData={event} />
        </MainLayout>
    );
};

export default EditEvent;