const boylers = require ("../data/boylers.json");

const getAllBoylers = () => {
    return boylers;
};

const getBoylersByBuilding = (building) => {
    const boylersByBuilding = boylers.filter(boylers => {
        boylers.building === parseInt(building);
    })
    return boylersByBuilding;
};

const getBoylersById = (id) => {
    const boylersById = boylers.filter(boylers => {
        boylers.id === parseInt(id);
    })
    return boylersById;
};

module.exports = {
    getAllBoylers,
    getBoylersByBuilding,
    getBoylersById
};
