let initialState = {
    friends: [
        {id: 1, name: "Olechka", img: "/img/Olechka.jpg"},
        {id: 2, name: "Arthur", img: "./../img/Arthur.jpg"},
        {id: 3, name: "Ruslan", img: "./../img/Ruslan.jpg"},
        {id: 4, name: "Dima", img: "./../img/Dima.jpg"},
        {id: 5, name: "Artyom", img: "./../img/Artyom.jpg"}
    ]
};

const friendsReduser = (state = initialState, action) => {

    return state;
}

export default friendsReduser;