// import './example.test.js';

// IMPORT MODULES under test here:
import { renderGame } from '../render-utils.js';
import { renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('Test if renderGame returns a HTML div with p tags with the team names and scores', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let gameExample1 = {
        name1: 'Red',
        name2: 'Blue',
        score1: 1,
        score2: 2
    };


    const expected1 = '<div class="game"><div class="team"><p class="name">Red</p><p class="score">1</p></div><div class="team"><p class="name">Blue</p><p class="score">2</p></div></div>';

    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = renderGame(gameExample1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1.outerHTML, expected1, 'Feeds renderGame an object with Red/Blue/1/2 and returns the outerHTML (string) of div "<div class="game"><div class="team"><p class="name">Red</p><p class="score">1</p></div><div class="team"><p class="name">Blue</p><p class="score">2</p></div></div>"');


    //Arrange
    // Set up your arguments and expectations
    let gameExample2 = {
        name1: 'Dems',
        name2: 'Reps',
        score1: 3,
        score2: 3
    };


    const expected2 = '<div class="game"><div class="team"><p class="name">Dems</p><p class="score">3</p></div><div class="team"><p class="name">Reps</p><p class="score">3</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = renderGame(gameExample2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2, 'Feeds renderGame an object with Dems/Reps/3/3 and returns the outerHTML (string) of div "<div class="game"><div class="team"><p class="name">Dems</p><p class="score">3</p></div><div class="team"><p class="name">Reps</p><p class="score">3</p></div></div>"');
});


test('Test if renderTeam, given a name and score, returns a HTML div with p tags with the team name and score', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let name1 = 'Red';
    let score1 = 1;



    const expected1 = '<div class="team"><p class="name">Red</p><p class="score">1</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = renderTeam(name1, score1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1.outerHTML, expected1, 'Feeds renderTeam Red and 1 and returns the outerHTML (string) of div "<div class="team"><p class="name">Red</p><p class="score">1</p></div>"');


    //Arrange
    // Set up your arguments and expectations
    let name2 = 'Dems';
    let score2 = 2;



    const expected2 = '<div class="team"><p class="name">Dems</p><p class="score">2</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = renderTeam(name2, score2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2, 'Feeds renderTeam Dems and 2 and returns the outerHTML (string) of div "<div class="team"><p class="name">Dems</p><p class="score">2</p></div>"');

});