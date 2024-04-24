import React from 'react';

const FeatureCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://geeko.netlify.app/img/icons/f1.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Proven CV Templates to increase Hiring Chance</h2>
          <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum adipiscing elit.</p>
        </div>
      </div>
    );
};

export default FeatureCard;