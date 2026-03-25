import React from "react";
import MainLayout from "../layouts/MainLayouts";
import { Link } from "react-router";
import Input from "../Components/form/input";
import { supabase } from "../utils/supabase";

const AddEvent = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());

        const { data: eventData, error: eventError } = await supabase
            .from("events")
            .insert(formDataObject)
            .select()
            .single();
        if (eventError) alert(eventError);
        if (eventData) console.log(eventData);
    };

    return (
        <MainLayout>
            <div className="pt-5 p-4">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left side: regular inputs */}
                        <div className="w-full md:w-1/2">
                            <Input
                                type="text"
                                label="Title"
                                placeholder="Enter Title"
                                name="title"
                            />
                            <Input
                                type="date"
                                label="Start Date"
                                placeholder="Select Start Date"
                                name="start_date"
                            />
                            <Input
                                type="date"
                                label="End Date"
                                placeholder="Select End Date"
                                name="end_date"
                            />
                            <Input
                                type="time"
                                label="Start Time"
                                placeholder="Select Start Time"
                                name="start_time"
                            />
                            <Input
                                type="time"
                                label="End Time"
                                placeholder="Select End Time"
                                name="end_time"
                            />
                            <Input
                                type="text"
                                label="Location"
                                placeholder="Enter Location"
                                name="location"
                            />

                            <div className="text-right mt-5">
                                <button className="btn btn-primary rounded-full" type="submit">
                                    Create Event
                                </button>
                            </div>
                        </div>

                        {/* Right side: description/bio */}
                        <div className="w-full md:w-1/2">
                            <fieldset className="fieldset h-full">
                                <legend className="fieldset-legend">Description</legend>
                                <textarea
                                    className="textarea w-full min-h-[380px]"
                                    placeholder="Bio"
                                    name="description"
                                ></textarea>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default AddEvent;