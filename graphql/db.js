import { userInfo } from "os";

let user_info = [
    {
        id:"5",
        name:"예영",
        nickName:"dokdokorea",
        password:"1234",
        email:"email",
        isSignedUp: true, //이메일 인증
        token:123451
    },
    {
        id:"4",
        name:"영우",
        nickName:"dokdokorea",
        password:"1234",
        email:"email",
        isSignedUp: true,
        token:1231141
    },
    {
        id:"3",
        name:"상훈",
        nickName:"dokdokorea",
        password:"1234",
        email:"email",
        isSignedUp: true,
        token:395784
    },


];
let history=[
    {
        edit_code:1,
        title:"예영이 짱",
        id: "^^",
        edit_contents:"예영이는 세상에서 제일 짱이다아!!",
        date:"2019-03-02"
    },
    {
        edit_code:2,
        title:"예영이 ㅋ짱",
        id: "^^2",
        edit_contents:"예영이는 세상에서 제일 짱이다아!!",
        date:"2019-03-02"
    },
];

let info_list=[
    {
    title: "예영이가 짱이야",
    contents:"나를 경배하라",
    classify:"예영찬양"
    },
];

let reference = [
    {
        reference: 111,
        parents:"여신",
        child:"예영"
    },
];

let movies = [
    {
        id:0,
        name: "Star Wars = The new one",
        score: 11
    },
    {
        id:1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id:2,
        name:"The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];
export const getMovies = ()=>movies;

export const getById = id =>{
    const filteredMovies = movies.filter(movie => id == movie.id);
    return filteredMovies[0];
};

export const deleteMovie=(id)=>{
    const cleanedMovies = movies.filter(movie=> movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else {
        return false;
    }
};

export const addMovie=(name,score)=>{
    const newMovie = {
        id: `${movies.length+1}`,
        name,
        score
    };

movies.push(newMovie);
return newMovie;
};

export const searchAllHistory = () => history;

export const login = (id,password)=>{
    const checkAccount = user_info.filter(user => id==user.id & user.isSignedUp & password == user.password);
    return checkAccount[0];
};

export const addSignUp=(id,name,password,nickName,email,token)=>{
    const newAccount ={
        id,
        name,
        password,
        nickName,
        email,
        isSignedUp: false,
        token
    };
    user_info.push(newAccount);
    return newAccount;
};

export const findById=(id)=>{
    const checkId = user_info.filter(user => id == user.id);
    return checkId[0];
};

export const findId=(name,email)=>{
    const showId = user_info.filter(user => name == user.name && email == user.email);
   return showId[0];
};

export const deleteAccount = (id)=>{
    const finalCheck = user_info.filter(user => id != user.id);
    if(user_info.length > finalCheck.length){
        user_info = finalCheck;
        return true;
    }else {
        return false;
    }
};
