import uniqid from "uniqid"

const cardFactory = (value) => {
    return {value, id: uniqid()}
};

export default cardFactory;