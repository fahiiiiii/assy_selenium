import React from 'react';

const ImportantInfo: React.FC = () => {
    return (
        <div className="max-w-2xl p-5 font-sans">
            <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Important information</h2>
                <h3 className="text-xl font-semibold text-gray-800">You need to know</h3>
            </div>

            <div className="flex flex-col gap-4">
                <div className="text-sm leading-relaxed text-gray-800">
                    Extra-person charges may apply and vary depending on property policy.
                </div>
                <div className="text-sm leading-relaxed text-gray-800">
                    Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges.
                </div>
                <div className="text-sm leading-relaxed text-gray-800">
                    Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed.
                </div>
                <div className="text-sm leading-relaxed text-gray-800">
                    Onsite parties or group events are strictly prohibited.
                </div>
                <div className="flex items-baseline gap-1 text-sm leading-relaxed text-gray-800 safety">
                    <span>•</span>
                    Host has indicated there is a carbon monoxide detector on the property.
                </div>
                <div className="flex items-baseline gap-1 text-sm leading-relaxed text-gray-800 safety">
                    <span>•</span>
                    Host has indicated there is a smoke detector on the property.
                </div>
                <div className="flex items-baseline gap-1 text-sm leading-relaxed text-gray-800 safety">
                    <span>•</span>
                    Safety features at this property include a fire extinguisher and a first aid kit.
                </div>
            </div>
        </div>
    );
};

export default ImportantInfo;