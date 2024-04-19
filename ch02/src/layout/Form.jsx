import React from 'react';
import Input from "../components/Input";
import Button from "../components/Button";

export default function Form({input, setInput, ...rest}) {
    console.log(input)
    return (
        <form className={'w-6/12 flex'}>
            <Input
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                placeholder="검색어를 입력하세요"
                onChange={(e) => setInput(e.target.value)}
            />
            <Button title={'검색'} className={`w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}/>
        </form>
    );
}