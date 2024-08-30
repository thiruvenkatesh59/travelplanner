import React, { useState } from 'react';
import './Package.css';
import { Link } from 'react-router-dom';
import image from '../accert/mala.jpeg';
import image1 from '../accert/val.jpeg';
import image2 from '../accert/ooty.jpeg';
import image3 from '../accert/munnar.jpeg';
import image4 from '../accert/thi.jpeg';
import image5 from '../accert/com.jpeg';
import image6 from '../accert/theni.jpeg';
import image7 from '../accert/pan.jpeg';
import image8 from '../accert/goa.jpeg';
import image9 from '../accert/ram.jpeg';
import image10 from '../accert/mahe.jfif';
import image11 from '../accert/varkala.jfif';

const packages = [
    { name: "Valparai", image: image1, link: "/valparai" },
    { name: "Mahabalipuram", image: image, link: "/Mahabalipuram" },
    { name: "Ooty", image: image2, link: "/ooty" },
    { name: "Rameswaram", image: image9, link: "/rameswaram" },
    { name: "Goa", image: image8, link: "/madurai" },
    { name: "Puducherry", image: image7, link: "/puducherry" },
    { name: "Theni", image: image6, link: "/mudumalai" },
    { name: "Munnar", image: image3, link: "/nilgiris" },
    { name: "Coimbatore", image: image5, link: "/coimbatore" },
    { name: "Kanniyakumari", image: image4, link: "/Kanya" },
    { name: "Mahe", image: image10, link: "/mahe" },
    { name: "Varkala", image: image11, link: "/varkala" },
];

const Package = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPackages = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="package" id="package">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search packages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="pack">
                <div className="grid">
                    {filteredPackages.map((pkg, index) => (
                        <div className="d" key={index}>
                            <div className="items">
                                <img src={pkg.image} alt={pkg.name} width="100px" height="100px" />
                                <h4>{pkg.name}</h4>
                                <center><Link to={pkg.link}>
                                    <button>select</button>
                                </Link></center>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Package;
