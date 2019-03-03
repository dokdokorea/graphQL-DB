import {getMovies, getById,addMovie,deleteMovie,
    searchAllHistory,login,addSignUp,findById,findId,deleteAccount} from './db';


const resolvers = {

    Query:{
        movies:()=> getMovies(),
        movie: (_, {id})=> getById(id),
        history: ()=>searchAllHistory(),    //history 전체 찾기
        user_info: (_,{id,password})=>login(id,password), //아이디&비밀번호로 로그인
        findById:(_,{id})=>findById(id),    //아이디로 개인정보 다 불러오기
findId:(_,{name,email}) => findId(name,email),  //아이디 찾기

    },

    Mutation:{
    addMovie:(_,{name,score})=>addMovie(name,score),
    deleteMovie:(_,{id})=>deleteMovie(id),
    addSignUp:(_,{id,name,password,nickName,email,token})=> addSignUp(id,name,password,nickName,email,token),
deleteAccount:(_,{id}) => deleteAccount(id),    //회원탈퇴

    }

};

export default resolvers;