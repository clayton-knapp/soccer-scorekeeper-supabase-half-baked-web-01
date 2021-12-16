const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//Creates/Inserts current Game object to the Supabase Table
export async function createGame(currentGameObj){
    // const newGame = { ...game }; - THIS WAS HERE WHAT IS THIS?
    // create a single new game in the games table using the above object
    const response = await client
        .from('games')
        .insert([
            {
                name1: currentGameObj.name1,
                name2: currentGameObj.name2,
                score1: currentGameObj.score1,
                score2: currentGameObj.score2
            }
        ]);

    // console.log(response.data);
    
    return checkError(response);
}

//Read/Select data from games
export async function getGames() {
    // select all games from the games table
    const response = await client
        .from('games')
        .select();
    // console.log(response.data);

    return checkError(response);    
}

//GET USER 
export async function getUser() {
    // console.log(client.auth.session());
    return client.auth.session();
}

//CHECK AUTH 
export async function checkAuth() {
    const user = await getUser();
    // console.log(user);

    if (!user) location.replace('../'); 
}

// REDIRECT TO GAMES PAGE
export async function redirectToGames() {
    if (await getUser()) {
        location.replace('./games');
    }
}

//SIGN UP
export async function signUpUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

//SIGN IN
export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

//LOGOUT
export async function logout() {
    await client.auth.signOut();

    return window.location.href = '/';
}

//CHECK ERROR - IF NONE RETURNS DATA
function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
