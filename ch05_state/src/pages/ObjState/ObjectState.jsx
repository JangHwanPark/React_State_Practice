import React, {useState} from 'react';
import SelectCarOptions from "./SelectCarOption/SelectCarOptions";
import TodoList from "./TodoList/TodoList";

export default function ObjectState() {
    return (
        <div className={'col-span-12'}>
            <h2>객체 상태 관리 연습</h2>
            <TodoList/>
            <h2>중첩 객체 상태 관리 연습</h2>
            <SelectCarOptions/>
        </div>
    );
}