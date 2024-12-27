import React from 'react';
import Modal from '../ui/Modal/Modal';

const AddTaskModal = ({isOpen, setIsOpen, title,}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programing herro"}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur nostrum sunt voluptatum quod corporis necessitatibus exercitationem esse repellendus unde et dolor magnam accusamus deleniti facilis reiciendis possimus architecto ratione dignissimos, impedit inventore ipsa error? Quam fuga consectetur commodi, quos eaque repellendus quia incidunt ex dignissimos alias perferendis iste dolore, ut molestias asperiores delectus! Ad cum dicta totam rerum pariatur a magnam doloribus asperiores natus neque tenetur non exercitationem vitae quod rem, officiis officia deserunt vel eius velit. Placeat eum quae error suscipit! Nobis nostrum blanditiis soluta adipisci reiciendis veniam officiis ratione totam inventore, vitae eum! In voluptatum quibusdam omnis aperiam.</p>
        </Modal>
    );
};

export default AddTaskModal;