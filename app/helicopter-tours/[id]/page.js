// import { travelPackages } from "../../Data/helicopterTravelPackagesData";
import styles from "./page.module.css";

// export async function generateStaticParams() {
//   return travelPackages.map((tour) => ({
//     id: tour.id,
//   }));
// }

export default function TourPage({ params }) {
  // const { id } = params;
  // const tour = travelPackages.find((t) => t.id === id);

  // if (!tour) {
    return <div>Tour not found</div>;
  // }

  // return (  
  //   <div className={styles.container}>
  //     <h1>{tour.title}</h1>
  //     <img src={tour.heroImage} alt={tour.title} className={styles.image} />
  //     <p>{tour.description}</p>
  //   </div>
  // );
}
