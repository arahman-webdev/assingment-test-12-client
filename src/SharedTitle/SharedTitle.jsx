import React from 'react';

const SharedTitle = ({title}) => {
    return (
        <div>
            <h2 className="text-4xl md:text-6xl font-bold text-center text-blue-900 mb-10">
                {title}
            </h2>
        </div>
    );
};

export default SharedTitle;

