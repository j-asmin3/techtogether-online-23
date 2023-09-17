import Navbar from "@components/Navbar";
import Petition from "@components/Petition";
import React from "react";

export default function Page() {
    const signers = [];

    return (
        <div className="flex flex-col w-full items-center">
            <Navbar/>
            <div className={"w-2/3 mt-12"}>
                <Petition
                    petition={{
                        title: "Title",
                        company: "Company",
                        location: "Location",
                        description: "Description ..."
                    }}
                />
                <p>{signers.length + " people have signed"}</p>
                <button className="bg-primary-darkblue text-white transform hover:scale-125 rounded-lg p-2 mt-2">
                    Sign this petition
                </button>
            </div>
        </div>
    )
}