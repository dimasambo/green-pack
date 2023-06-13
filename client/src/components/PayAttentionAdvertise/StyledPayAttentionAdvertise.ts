import styled from 'styled-components'

export const StyledPayAttentionAdvertise = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: lightgray;

  a {
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    
    .createdDetails {
      color: gray;
      display: flex;
      flex-direction: column;

      .author {
        font-size: 14px;
      }

      .date {
        font-size: 13px;
      }
    }

    .firstBlock {
      display: flex;
      align-items: center;

      .title {
        font-size: 18px;
      }

      .warningIcon {
        width: 10px;
        height: 10px;
        background: orangered;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    .content {
      font-size: 18px;
    }

    .trackInfo__grid {
      width: 200px;
      margin: 0 20px;

      .artist {
        font-size: 12px;
        color: gray;
      }
    }

    .volumeUp {
      margin-left: auto;
    }
  }
`