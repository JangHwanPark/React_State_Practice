import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";

export default function Components() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button type="button" onClick={openModal}>모달 버튼</button>
            <Modal show={showModal} handleClose={closeModal}>
                <p>모달 오픈!</p>
            </Modal>
        </div>
    );
}