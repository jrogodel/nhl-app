export class InMemoryStoreService {

  createDb() {
    let teams = [ 
      {
        "id": 11,
        "team": "Philadelphia Flyers",
        "conference": "East",
        "wins": 22,
        "losses": 10,
        "rank": 3
      }
    ];
    let players = [
      {
        "id": 22,
        "fname": "Claude",
        "lname": "Giroux",
        "age": 28,
        "position": "Center",
        "goals": 15,
        "assists": 34
      }
    ]

    return(teams, players)  
  }
}
