"use client";
import { useParams } from "next/navigation";
import { templesData } from "../../Data/templesData";
import { hotels } from "../../Data/hotelsData";
import { tourPackages } from "../../Data/tourPackagesData";


import Temples from "../../container/Temples";
import Hotels from "../../container/Hotels";
import Packages from "../../container/Packages";
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
            <Temples TempleList={TempleList} slug={slug} />
            {/* <Hotels HotelList={HotelList}  slug={slug} /> */}
            {/* <Packages PackageList={PackagesList}  slug={slug} /> */}
        </>
    );
};

export default TemplePage;
