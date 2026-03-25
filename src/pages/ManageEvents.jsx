import React from "react";
import MainLayout from "../layouts/MainLayouts";
import { Link } from "react-router";
import Input from "../Components/form/input";
import { supabase } from "../utils/supabase";
import { useEffect } from "react";
import { useState } from "react";
import EventCard from "../Components/EventCard";

const ManageEvents = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data: eventsData, error: eventsError } = await supabase
                .from("events")
                .select();
            if (eventsError) alert(eventsError);
            if (eventsData) setEvents(eventsData);
        };

        fetchEvents();
    }, []);

    return (
        <MainLayout>
            <div className="pt-5">
                <form>
                    <div className="text-right">
                        <Link to="/add-event" className="btn btn-primary rounded-full">
                            Add Event
                        </Link>
                    </div>
                    <div>
                        {events?.map((event) => {
                            return <EventCard event={event} />;
                        })}
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default ManageEvents;