"use client";
import { useParams } from "next/navigation";
import { packages } from "@/app/data";
import { templesData } from "@/app/Data/templesData";
import { hotels } from "@/app/Data/hotelsData";
import { tourPackages } from "@/app/Data/tourPackagesData";


import Temples from "@/app/container/Temples";
import Hotels from "@/app/container/Hotels";
import Packages from "@/app/container/Packages";
import "./page.css"
const TemplePage = () => {

    const { slug } = useParams();

    const TempleList = templesData.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const HotelList = hotels.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );

    const PackagesList = tourPackages.filter(
        (item) => item.location?.toLowerCase() === slug.toLowerCase()
    );



    return (
        <>
            {/* Temples */}
           <Temples TempleList={TempleList} />

            {/* Hotels */}
            <Hotels HotelList={HotelList} />

            {/* Packages */}
            <Packages PackageList={PackagesList} />
        </>
    );
};

export default TemplePage;
