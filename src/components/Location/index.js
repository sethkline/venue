import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0898207648156!2d-76.99679788415786!3d40.184814479392614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8e80c46635eed%3A0xdba7b31027203f14!2sMechanicsburg+Middle+School!5e0!3m2!1sen!2sus!4v1545854539163" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen></iframe>

                <div className="location_tag">
                    <div>
                        Location
                    </div>
                </div>

        </div>
    );
};


export default Location;