import React, {useState} from 'react';

export default function UserProfile() {
    const [userProfile, setUserProfile] = useState({
        basicInfo: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com"
        },
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345"
        },
        social: {
            facebook: "john.doe",
            twitter: "@johndoe",
            instagram: "@johndoe"
        },
        preferences: {
            newsletter: true,
            smsNotifications: false
        }
    });

    return (
        <div>

        </div>
    );
}