import styled from 'styled-components'

export const StyledTrackItem = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  
  .track {
    margin: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  .trackInfo__grid {
    width: 200px;
    margin: 0 20px;
    
    .artist {
      font-size: 12px;
      color: gray;
    }
  }
  
  .deleteTrack__button {
    margin-left: auto;
  }
`