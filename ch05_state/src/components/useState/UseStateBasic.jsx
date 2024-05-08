import React, {useState} from 'react';

export default function UseStateBasic() {
    const [age, setAge] = useState(20);

    return (
        <div>{age}</div>
    );
}